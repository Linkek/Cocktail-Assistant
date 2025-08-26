/**
 * Main application component for the Cocktail Assistant
 * Author: Linus Karlsson
 */

import { component, useState } from 'haunted';
import { html } from 'lit-html';
import { Cocktail, Ingredient, ToastMessage, ToastType } from './types/enums';
import { CocktailService } from './services/CocktailService';
import { mainStyles } from './main.styles';

// Import components
import './components/SearchInput/SearchInput';
import './components/CocktailList/CocktailList';
import './components/CocktailCard/CocktailCard';
import './components/ShoppingList/ShoppingList';
import './components/Toast/Toast';

function App() {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [shoppingList, setShoppingList] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState<ToastMessage | null>(null);

  const showToast = (type: ToastType, message: string) => {
    setToastMessage({ type, message });
  };

  const hideToast = () => {
    setToastMessage(null);
  };

  const handleSearch = async (query: string) => {
    setLoading(true);
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
    const newIngredients = CocktailService.extractIngredients(cocktail);
    const updatedList = [...shoppingList, ...newIngredients];
    const deduplicatedList = CocktailService.deduplicateIngredients(updatedList);
    
    setShoppingList(deduplicatedList);
    showToast(ToastType.ADDED, `Ingredients for ${cocktail.strDrink} added to shopping list!`);
  };

  const handleRemoveIngredient = (ingredientName: string) => {
    const updatedList = shoppingList.filter(
      ingredient => ingredient.name.toLowerCase() !== ingredientName.toLowerCase()
    );
    setShoppingList(updatedList);
    showToast(ToastType.REMOVED, `${ingredientName} removed from shopping list.`);
  };

  const handlePrintShoppingList = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      const printContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Shopping List - Cocktail Assistant</title>
        </head>
        <body>
          <h1>Cocktail Shopping List</h1>
          <p>Generated on ${new Date().toLocaleDateString()}</p>
          <ul>
            ${shoppingList.map(ingredient => `
              <li>
                <span class="ingredient-name">${ingredient.name}</span>
                ${ingredient.measure ? `<span class="ingredient-measure">(${ingredient.measure})</span>` : ''}
              </li>
            `).join('')}
          </ul>
          <p><em>Total items: ${shoppingList.length}</em></p>
        </body>
        </html>
      `;
      
      printWindow.document.write(printContent);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
    }
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
            .onAddToShoppingList=${handleAddToShoppingList}
          ></cocktail-list>
        </div>
        
        <div class="sidebar">
          <shopping-list 
            .ingredients=${shoppingList}
            .onRemoveIngredient=${handleRemoveIngredient}
            .onPrint=${handlePrintShoppingList}
          ></shopping-list>
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