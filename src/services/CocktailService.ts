/**
 * Cocktail API service for fetching data from TheCocktailDB
 * Author: Linus Karlsson
 */

import { CocktailSearchResponse, Cocktail, Ingredient } from '../types/enums';

const API_BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

export class CocktailService {
  static async searchCocktails(query: string): Promise<Cocktail[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/search.php?s=${encodeURIComponent(query)}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data: CocktailSearchResponse = await response.json();
      return data.drinks || [];
    } catch (error) {
      console.error('Error fetching cocktails:', error);
      throw error;
    }
  }
  
  static extractIngredients(cocktail: Cocktail): Ingredient[] {
    const ingredients: Ingredient[] = [];
    
    for (let i = 1; i <= 15; i++) {
      const ingredient = cocktail[`strIngredient${i}` as keyof Cocktail] as string;
      const measure = cocktail[`strMeasure${i}` as keyof Cocktail] as string;
      
      if (ingredient && ingredient.trim()) {
        ingredients.push({
          name: ingredient.trim(),
          measure: measure?.trim() || undefined
        });
      }
    }
    
    return ingredients;
  }

  static deduplicateIngredients(ingredients: Ingredient[]): Ingredient[] {
    const uniqueIngredients = new Map<string, Ingredient>();
    
    ingredients.forEach(ingredient => {
      const key = ingredient.name.toLowerCase();
      if (!uniqueIngredients.has(key)) {
        uniqueIngredients.set(key, ingredient);
      }
    });
    
    return Array.from(uniqueIngredients.values());
  }
}
