/**
 * Cocktail search response interface for TheCocktailDB API
 * Author: Linus Karlsson
 */

import { Cocktail } from './Cocktail.js';

export interface CocktailSearchResponse {
  drinks: Cocktail[] | null;
}
