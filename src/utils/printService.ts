/**
 * Print service for generating printable shopping lists and recipes
 * Author: Linus Karlsson
 */

import { CocktailRecipe, ShoppingItem } from '../types/index.js';

export class PrintService {
  static printShoppingList(shoppingList: ShoppingItem[], cocktailRecipes: CocktailRecipe[]): void {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      const printContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <title>Shopping List - Cocktail Assistant</title>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            /* Reset and base styles */
            * {
              box-sizing: border-box;
            }

            body {
              margin: 0;
              padding: 2rem;
              line-height: 1.6;
              color: #2d3748;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
              background: white;
            }

            .print-container {
              max-width: 800px;
              margin: 0 auto;
              background: white;
            }

            /* Header styling */
            .print-header {
              text-align: center;
              margin-bottom: 2rem;
              padding-bottom: 1.5rem;
            }

            .print-title {
              font-size: 2.5rem;
              font-weight: 700;
              margin: 0 0 0.5rem 0;
              color: #667eea;
            }

            .print-subtitle {
              font-size: 1.1rem;
              color: #64748b;
              margin: 0 0 1rem 0;
            }

            .print-date {
              font-size: 0.9rem;
              color: #718096;
              font-style: italic;
            }

            /* Section styling */
            .print-section {
              margin-bottom: 2.5rem;
              page-break-inside: avoid;
            }

            .section-title {
              font-size: 1.75rem;
              font-weight: 700;
              color: #1a202c;
              margin: 0 0 1.5rem 0;
              padding-bottom: 0.5rem;
              border-bottom: 2px solid #f8fafc;
              display: flex;
              align-items: center;
              gap: 0.75rem;
            }

            .section-title.recipes::before {
              content: '📝';
              font-size: 1.25em;
            }

            .section-title.shopping::before {
              content: '🛒';
              font-size: 1.25em;
            }

            /* Recipe card styling */
            .recipe-card {
              background: linear-gradient(135deg, #f8fafc 0%, #edf2f7 100%);
              border-radius: 0.875rem;
              padding: 1.5rem;
              border: 2px solid #e2e8f0;
              page-break-inside: avoid;
            }

            .recipe-name {
              font-size: 1.5rem;
              font-weight: 700;
              color: #2d3748;
              margin: 0 0 1rem 0;
              color: #667eea;
            }

            .recipe-subsection {
              margin-bottom: 1.25rem;
            }

            .recipe-subsection h4 {
              font-size: 1.1rem;
              font-weight: 600;
              color: #4a5568;
              margin: 0 0 0.75rem 0;
              display: flex;
              align-items: center;
              gap: 0.5rem;
            }

            .recipe-subsection h4.ingredients::before {
              content: '🥄';
              font-size: 1.1em;
            }

            .recipe-subsection h4.instructions::before {
              content: '📋';
              font-size: 1.1em;
            }

            .ingredient-list {
              list-style: none;
              padding: 0;
              margin: 0;
            }

            .ingredient-list li {
              padding: 0.75rem;
              margin: 0.25rem 0;
              background: white;
              border-radius: 0.5rem;
              border: 1px solid #e2e8f0;
              font-size: 0.95rem;
              color: #4a5568;
            }

            .recipe-instructions {
              font-size: 0.95rem;
              line-height: 1.7;
              color: #2d3748;
              padding: 1rem;
              background: white;
              border-radius: 0.5rem;
              border: 1px solid #e2e8f0;
              margin: 0;
            }

            /* Shopping list styling */
            .shopping-list {
              list-style: none;
              padding: 0;
              margin: 0;
            }

            .shopping-item {
              padding: 1rem 1.25rem;
              margin: 0.5rem 0;
              background: linear-gradient(135deg, #f8fafc 0%, #edf2f7 100%);
              border-radius: 0.75rem;
              border: 1px solid #e2e8f0;
              font-size: 1.1rem;
              color: #2d3748;
              font-weight: 500;
              display: flex;
              align-items: center;
              gap: 0.75rem;
            }

            .shopping-item::before {
              content: '✓';
              width: 1.5rem;
              height: 1.5rem;
              border: 2px solid #cbd5e0;
              border-radius: 0.25rem;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 0.75rem;
              color: transparent;
              flex-shrink: 0;
            }

            /* Summary styling */
            .print-summary {
              text-align: center;
              margin-top: 2rem;
              padding: 1.5rem;
              background: linear-gradient(135deg, #f8fafc 0%, #edf2f7 100%);
              border-radius: 1rem;
              border: 2px solid #e2e8f0;
            }

            .summary-text {
              font-size: 1.1rem;
              font-weight: 600;
              color: #4a5568;
              margin: 0;
            }

            /* Print-specific styles */
            @media print {
              body {
                padding: 1rem;
                font-size: 12pt;
              }

              .print-title {
                font-size: 24pt;
                color: #667eea !important;
              }

              .section-title {
                font-size: 18pt;
              }

              .recipe-name {
                font-size: 16pt;
                color: #667eea !important;
              }

              .recipe-card {
                break-inside: avoid;
                background: #f8fafc !important;
              }

              .shopping-item {
                background: #f8fafc !important;
              }
            }
          </style>
        </head>
        <body>
          <div class="print-container">
            <header class="print-header">
              <p class="print-date">Generated on ${new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</p>
            </header>
            
            <section class="print-section">
              <h2 class="section-title shopping">Shopping List</h2>
              <ul class="shopping-list">
                ${shoppingList.map(item => `
                  <li class="shopping-item">
                    ${item.quantity}x ${item.name}
                  </li>
                `).join('')}
              </ul>
            </section>

            ${cocktailRecipes.length > 0 ? `
              <section class="print-section">
                <h2 class="section-title recipes">Cocktail Recipes</h2>
                ${cocktailRecipes.map(recipe => `
                  <div class="recipe-card">
                    <h3 class="recipe-name">${recipe.name}</h3>
                    <div class="recipe-subsection">
                      <h4 class="ingredients">Ingredients</h4>
                      <ul class="ingredient-list">
                        ${recipe.ingredients.map(ing => `
                          <li>${ing.measure ? ing.measure + ' ' : ''}${ing.name}</li>
                        `).join('')}
                      </ul>
                    </div>
                    <div class="recipe-subsection">
                      <h4 class="instructions">Instructions</h4>
                      <p class="recipe-instructions">${recipe.instructions}</p>
                    </div>
                  </div>
                `).join('')}
              </section>
            ` : ''}

                <footer class="print-summary">
                <p class="summary-text">
                    Total Items: ${shoppingList.length} • Recipes: ${cocktailRecipes.length}
                </p>
                </footer>
              </div>
        </body>
        </html>
      `;
      
      printWindow.document.write(printContent);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
    }
  }
}
