/**
 * Shopping list component for managing cocktail ingredients
 * Author: Linus Karlsson
 */

import { component } from 'haunted';
import { html } from 'lit-html';
import { ShoppingItem } from '../../types/index.js';
import { shoppingListStyles } from './ShoppingList.styles';

interface ShoppingListProps {
  ingredients: ShoppingItem[];
  onRemoveIngredient: (ingredientName: string) => void;
  onPrint: () => void;
}

function ShoppingList({ ingredients, onRemoveIngredient, onPrint }: ShoppingListProps) {
  const handleRemoveClick = (ingredientName: string) => {
    onRemoveIngredient(ingredientName);
  };

  const handlePrintClick = () => {
    onPrint();
  };

  return html`
    <style>
      ${shoppingListStyles}
    </style>
    <div class="ShoppingList">
      <h2 class="shopping-list-title">
        Shopping List
        ${ingredients.length > 0 ? html`<span class="ingredients-count">${ingredients.length} items</span>` : ''}
      </h2>
      <div class="shopping-list-content">
        ${ingredients.length === 0 
          ? html`<p class="empty-message">No ingredients added yet. Search for cocktails and add them to build your shopping list!</p>`
          : html`
              <ul class="ingredients-list" role="list">
                ${ingredients.map(ingredient => html`
                  <li class="ingredient-item" role="listitem">
                    <span class="ingredient-text">
                      ${ingredient.quantity}x ${ingredient.name}
                    </span>
                    <app-button
                      .variant=${'danger'}
                      .size=${'small'}
                      .label=${'✕'}
                      .onClick=${() => handleRemoveClick(ingredient.name)}
                      .ariaLabel=${`Remove ${ingredient.name} from shopping list`}
                      .title=${'Remove ingredient'}
                    ></app-button>
                  </li>
                `)}
              </ul>
              <app-button
                .variant=${'success'}
                .size=${'medium'}
                .fullWidth=${true}
                .icon=${'🖨️'}
                .label=${'Print Shopping List'}
                .onClick=${handlePrintClick}
                .ariaLabel=${'Print shopping list'}
              ></app-button>
            `
        }
      </div>
    </div>
  `;
}

customElements.define('shopping-list', component(ShoppingList, { useShadowDOM: false }));
