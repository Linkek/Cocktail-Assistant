/**
 * Cocktail list component for displaying search results
 * Author: Linus Karlsson
 */

import { component } from 'haunted';
import { html } from 'lit-html';
import { Cocktail } from '../../types/index.js';
import { cocktailListStyles } from './CocktailList.styles';

interface CocktailListProps {
  cocktails: Cocktail[];
  hasSearched: boolean;
  onAddToShoppingList: (cocktail: Cocktail) => void;
}

function CocktailList({ cocktails, hasSearched, onAddToShoppingList }: CocktailListProps) {
  // If no search has been performed yet, show welcome message
  if (!hasSearched) {
    return html`
      <style>
        ${cocktailListStyles}
      </style>
      <div class="CocktailList welcome">
        <div class="welcome-message">
          <h2>🍸 Welcome to Cocktail Assistant!</h2>
          <p>Search for your favorite cocktails above to get started.</p>
        </div>
      </div>
    `;
  }

  // If search was performed but no results found
  if (cocktails.length === 0) {
    return html`
      <style>
        ${cocktailListStyles}
      </style>
      <div class="CocktailList empty">
        <p class="empty-message">No cocktails found. Try searching for something else!</p>
      </div>
    `;
  }

  return html`
    <style>
      ${cocktailListStyles}
    </style>
    <div class="CocktailList">
      <h2 class="results-title">
        Search Results
        <span class="results-count">${cocktails.length} found</span>
      </h2>
      <div class="cocktails-grid">
        ${cocktails.map(cocktail => html`
          <cocktail-card 
            .cocktail=${cocktail}
            .onAddToShoppingList=${onAddToShoppingList}
          ></cocktail-card>
        `)}
      </div>
    </div>
  `;
}

customElements.define('cocktail-list', component(CocktailList, { useShadowDOM: false }));
