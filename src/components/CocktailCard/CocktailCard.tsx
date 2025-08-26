/**
 * Cocktail card component for displaying individual cocktail results
 * Author: Linus Karlsson
 */

import { component } from 'haunted';
import { html } from 'lit-html';
import { Cocktail } from '../../types/index.js';
import { LanguageService } from '../../utils/index.js';
import { cocktailCardStyles } from './CocktailCard.styles';

interface CocktailCardProps {
  cocktail: Cocktail;
  onAddToShoppingList: (cocktail: Cocktail) => void;
}

function CocktailCard({ cocktail, onAddToShoppingList }: CocktailCardProps) {
  const handleAddClick = () => {
    onAddToShoppingList(cocktail);
  };

  return html`
    <style>
      ${cocktailCardStyles}
    </style>
    <div class="CocktailCard">
      <div class="cocktail-image">
        <img 
          src=${cocktail.strDrinkThumb} 
          alt=${cocktail.strDrink}
          loading="lazy"
        />
      </div>
      <div class="cocktail-content">
        <h3 class="cocktail-name">${cocktail.strDrink}</h3>
        <p class="cocktail-instructions">${LanguageService.getLocalizedInstructions(cocktail)}</p>
        <app-button
          .variant=${'success'}
          .size=${'medium'}
          .icon=${'+'}
          .label=${'Add to Shopping List'}
          .onClick=${handleAddClick}
          .ariaLabel=${`Add ${cocktail.strDrink} ingredients to shopping list`}
        ></app-button>
      </div>
    </div>
  `;
}

customElements.define('cocktail-card', component(CocktailCard, { useShadowDOM: false }));
