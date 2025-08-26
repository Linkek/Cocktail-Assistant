/**
 * Cocktail interface for TheCocktailDB API response
 * Author: Linus Karlsson
 */

type Range15 = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;

export type Cocktail = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
  strInstructionsES?: string;
  strInstructionsDE?: string;
  strInstructionsFR?: string;
  strInstructionsIT?: string;
  strInstructionsZHHANS?: string;
  strInstructionsZHHANT?: string;
} & {
  [K in `strIngredient${Range15}`]?: string;
} & {
  [K in `strMeasure${Range15}`]?: string;
};