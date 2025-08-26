/**
 * Main application component for the Cocktail Assistant
 * Author: Linus Karlsson
 */

import { component, useState } from 'haunted';
import { html } from 'lit-html';
import { Cocktail, Ingredient, ToastMessage, ToastType, CocktailRecipe, ShoppingItem } from './types/index.js';
import { CocktailService } from './services/CocktailService';
import { PrintService } from './utils';
import { config } from './config';
import { mainStyles } from './main.styles';

// Import components
import './components/SearchInput/SearchInput';
import './components/CocktailList/CocktailList';
import './components/CocktailCard/CocktailCard';
import './components/RecipeList/RecipeList';
import './components/CocktailRecipe/CocktailRecipe';
import './components/ShoppingList/ShoppingList';
import './components/Toast/Toast';
import './components/Button/Button';

function App() {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [shoppingList, setShoppingList] = useState<ShoppingItem[]>([]);
  const [cocktailRecipes, setCocktailRecipes] = useState<CocktailRecipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [toastMessage, setToastMessage] = useState<ToastMessage | null>(null);

  const showToast = (type: ToastType, message: string) => {
    setToastMessage({ type, message });
  };

  const hideToast = () => {
    setToastMessage(null);
  };

  const handleSearch = async (query: string) => {
    setLoading(true);
    setHasSearched(true);
    showToast(ToastType.SEARCHING, 'Searching...');
    
    try {
      const results = await CocktailService.searchCocktails(query);
      setCocktails(results);
      
      if (results.length > 0) {
        showToast(ToastType.RESULTS, `Found ${results.length} cocktail${results.length === 1 ? '' : 's'}!`);
      } else {
        showToast(ToastType.NO_RESULTS, 'No results found. Try a different search term.');
      }
    } catch (error) {
      console.error('Search failed:', error);
      showToast(ToastType.NO_RESULTS, 'Search failed. Please try again.');
      setCocktails([]);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToShoppingList = (cocktail: Cocktail) => {
    // Add to recipes
    const newRecipe = CocktailService.createCocktailRecipe(cocktail);
    const updatedRecipes = [...cocktailRecipes];
    
    // Check if recipe already exists
    const existingRecipeIndex = updatedRecipes.findIndex(recipe => recipe.id === newRecipe.id);
    if (existingRecipeIndex === -1) {
      updatedRecipes.push(newRecipe);
      setCocktailRecipes(updatedRecipes);
    }
    
    // Add to shopping list
    const allIngredients = updatedRecipes.flatMap(recipe => recipe.ingredients);
    const shoppingItems = CocktailService.convertToShoppingItems(allIngredients);
    setShoppingList(shoppingItems);
    
    showToast(ToastType.ADDED, `Ingredients for ${cocktail.strDrink} added to shopping list!`);
  };

  const handleRemoveIngredient = (ingredientName: string) => {
    const updatedList = shoppingList.filter(
      item => item.name.toLowerCase() !== ingredientName.toLowerCase()
    );
    setShoppingList(updatedList);
    showToast(ToastType.REMOVED, `${ingredientName} removed from shopping list.`);

    // Check if any recipes are now broken (missing ingredients)
    checkAndRemoveBrokenRecipes(updatedList);
  };

  const handleRemoveRecipe = (recipeId: string) => {
    const updatedRecipes = cocktailRecipes.filter(recipe => recipe.id !== recipeId);
    setCocktailRecipes(updatedRecipes);
    
    // Recalculate shopping list without the removed recipe
    const allIngredients = updatedRecipes.flatMap(recipe => recipe.ingredients);
    const shoppingItems = CocktailService.convertToShoppingItems(allIngredients);
    setShoppingList(shoppingItems);
    
    const removedRecipe = cocktailRecipes.find(recipe => recipe.id === recipeId);
    showToast(ToastType.REMOVED, `${removedRecipe?.name || 'Recipe'} removed!`);
  };

  const checkAndRemoveBrokenRecipes = (currentShoppingList: ShoppingItem[]) => {
    const availableIngredients = currentShoppingList.map(item => item.name.toLowerCase());
    const brokenRecipes: CocktailRecipe[] = [];
    
    cocktailRecipes.forEach(recipe => {
      const hasAllIngredients = recipe.ingredients.every(ingredient => 
        availableIngredients.includes(ingredient.name.toLowerCase())
      );
      
      if (!hasAllIngredients) {
        brokenRecipes.push(recipe);
      }
    });

    if (brokenRecipes.length > 0) {
      const updatedRecipes = cocktailRecipes.filter(recipe => 
        !brokenRecipes.some(broken => broken.id === recipe.id)
      );
      setCocktailRecipes(updatedRecipes);
      
      brokenRecipes.forEach(recipe => {
        showToast(ToastType.REMOVED, `${recipe.name} removed (missing ingredients)`);
      });
    }
  };

  const handlePrintShoppingList = () => {
    PrintService.printShoppingList(shoppingList, cocktailRecipes);
  };

  return html`
    <style>${mainStyles}</style>
    <div class="App">
      <search-input 
        .onSearch=${handleSearch}
        .loading=${loading}
      ></search-input>
      
      <div class="main-content">
        <div class="results-section">
          <cocktail-list 
            .cocktails=${cocktails}
            .hasSearched=${hasSearched}
            .onAddToShoppingList=${handleAddToShoppingList}
          ></cocktail-list>
        </div>
        
        <div class="sidebar">
          <shopping-list 
          .ingredients=${shoppingList}
          .onRemoveIngredient=${handleRemoveIngredient}
          .onPrint=${handlePrintShoppingList}
          ></shopping-list>
          ${config.showRecipeInstructions ? html`
            <recipe-list 
              .recipes=${cocktailRecipes}
              .onRemoveRecipe=${handleRemoveRecipe}
            ></recipe-list>
          ` : ''}
        </div>
      </div>
      
      <toast-notification 
        .message=${toastMessage}
        .onClose=${hideToast}
      ></toast-notification>
    </div>
  `;
}

customElements.define('cocktail-app', component(App));