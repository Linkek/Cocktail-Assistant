/**
 * Language utilities for internationalization
 * Author: Linus Karlsson
 */

import { Cocktail } from '../types/index.js';
import { config } from '../config.js';

export type SupportedLanguage = 'en' | 'es' | 'de' | 'fr' | 'it' | 'zh-hans' | 'zh-hant';

export class LanguageService {
  /**
   * Get cocktail instructions in the preferred language
   * Falls back to English if the preferred language is not available
   */
  static getLocalizedInstructions(cocktail: Cocktail, language?: SupportedLanguage): string {
    const preferredLanguage = language || config.language;
    
    switch (preferredLanguage) {
      case 'es':
        return cocktail.strInstructionsES || cocktail.strInstructions;
      case 'de':
        return cocktail.strInstructionsDE || cocktail.strInstructions;
      case 'fr':
        return cocktail.strInstructionsFR || cocktail.strInstructions;
      case 'it':
        return cocktail.strInstructionsIT || cocktail.strInstructions;
      case 'zh-hans':
        return cocktail.strInstructionsZHHANS || cocktail.strInstructions;
      case 'zh-hant':
        return cocktail.strInstructionsZHHANT || cocktail.strInstructions;
      case 'en':
      default:
        return cocktail.strInstructions;
    }
  }

  /**
   * Get language display name
   */
  static getLanguageName(language: SupportedLanguage): string {
    const languageNames: Record<SupportedLanguage, string> = {
      'en': 'English',
      'es': 'Español',
      'de': 'Deutsch',
      'fr': 'Français',
      'it': 'Italiano',
      'zh-hans': '中文 (简体)',
      'zh-hant': '中文 (繁體)',
    };
    
    return languageNames[language];
  }
}
