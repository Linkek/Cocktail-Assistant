/**
 * CocktailRecipe component for displaying individual cocktail recipes
 * Author: Linus Karlsson
 */

import { component } from 'haunted';
import { html } from 'lit-html';
import { CocktailRecipe } from '../../types/index.js';
import { cocktailRecipeStyles } from './CocktailRecipe.styles.js';

interface CocktailRecipeProps {
  recipe: CocktailRecipe;
  onRemoveRecipe: (recipeId: string) => void;
}

function CocktailRecipeComponent({ recipe, onRemoveRecipe }: CocktailRecipeProps) {
  const handleRemoveClick = () => {
    onRemoveRecipe(recipe.id);
  };
  return html`
    <style>
      ${cocktailRecipeStyles}
    </style>
    <div class="recipe-card">
      <div class="recipe-header">
        <h3 class="recipe-name">${recipe.name}</h3>
        <app-button
          .variant=${'danger'}
          .size=${'small'}
          .label=${'✕'}
          .onClick=${handleRemoveClick}
          .ariaLabel=${`Remove ${recipe.name} recipe`}
          .title=${'Remove recipe'}
        ></app-button>
      </div>
      <div class="recipe-ingredients">
        <h4>Ingredients:</h4>
        <ul class="ingredient-measures">
          ${recipe.ingredients.map(ingredient => html`
            <li>${ingredient.measure ? `${ingredient.measure} ` : ''}${ingredient.name}</li>
          `)}
        </ul>
      </div>
      <div class="recipe-instructions">
        <h4>Instructions:</h4>
        <p>${recipe.instructions}</p>
      </div>
    </div>
  `;
}

customElements.define('cocktail-recipe', component(CocktailRecipeComponent, { useShadowDOM: false }));
