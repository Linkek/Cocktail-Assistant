/**
 * Cocktail list component for displaying search results
 * Author: Linus Karlsson
 */

import { component } from 'haunted';
import { html } from 'lit-html';
import { Cocktail } from '../../types/enums';
import { cocktailListStyles } from './CocktailList.styles';

interface CocktailListProps {
  cocktails: Cocktail[];
  onAddToShoppingList: (cocktail: Cocktail) => void;
}

function CocktailList({ cocktails, onAddToShoppingList }: CocktailListProps) {
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
