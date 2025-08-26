/**
 * RecipeList component for displaying cocktail recipes
 * Author: Linus Karlsson
 */

import { component } from 'haunted';
import { html } from 'lit-html';
import { CocktailRecipe } from '../../types/index.js';
import { recipeListStyles } from './RecipeList.styles.js';

interface RecipeListProps {
  recipes: CocktailRecipe[];
  onRemoveRecipe: (recipeId: string) => void;
}

function RecipeListComponent({ recipes, onRemoveRecipe }: RecipeListProps) {
  if (recipes.length === 0) {
    return html``;
  }

  return html`
    <style>
      ${recipeListStyles}
    </style>
    <div class="recipes-section">
      <h2 class="recipes-title">
        Cocktail Recipes
        <span class="recipes-count">${recipes.length} recipe${recipes.length === 1 ? '' : 's'}</span>
      </h2>
      <div class="recipes-list">
        ${recipes.map(recipe => html`
          <cocktail-recipe 
            .recipe=${recipe}
            .onRemoveRecipe=${onRemoveRecipe}
          ></cocktail-recipe>
        `)}
      </div>
    </div>
  `;
}

customElements.define('recipe-list', component(RecipeListComponent, { useShadowDOM: false }));
