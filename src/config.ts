/**
 * Application configuration settings
 * Author: Linus Karlsson
 */

export interface AppConfig {
  /** 
   * Show/hide the recipe list in the sidebar
   * Set to false to hide only the recipe instructions
   * Set to true to show the recipe list alongside the shopping list
   * Note: Shopping list is always visible
   */
  showRecipeInstructions: boolean;

  /**
   * Language preference for cocktail instructions
   * Supported languages: 'en', 'es', 'de', 'fr', 'it', 'zh-hans', 'zh-hant'
   * Falls back to English if selected language is not available for a recipe
   */
  language: 'en' | 'es' | 'de' | 'fr' | 'it' | 'zh-hans' | 'zh-hant';
}

export const config: AppConfig = {
  // Set to false to disable the recipe list (shopping list will always show)
  showRecipeInstructions: true,
  
  // Set your preferred language for cocktail instructions
  // Supported: 'en' (English), 'es' (Spanish), 'de' (German), 
  //           'fr' (French), 'it' (Italian), 'zh-hans' (Chinese Simplified), 'zh-hant' (Chinese Traditional)
  // Falls back to English if the selected language is not available for a specific cocktail
  language: 'en',
};
