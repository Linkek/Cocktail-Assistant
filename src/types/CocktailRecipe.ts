/**
 * Cocktail recipe interface for recipe management
 * Author: Linus Karlsson
 */

import { Ingredient } from './Ingredient.js';

export interface CocktailRecipe {
  id: string;
  name: string;
  instructions: string;
  ingredients: Ingredient[];
}
