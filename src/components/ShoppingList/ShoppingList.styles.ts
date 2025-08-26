/**
 * ShoppingList component styles
 * Author: Linus Karlsson
 */

export const shoppingListStyles = `
  .ShoppingList {
    background: white;
    border-radius: 1.25rem;
    box-shadow: 0 0.25rem 1.25rem rgba(0, 0, 0, 0.08);
    height: fit-content;
    padding: 1.5rem 1.25rem;
    max-height: calc(100vh - 2.5rem);
    overflow-y: auto;
    margin-bottom: 1.5rem;
  }

  .shopping-list-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1a202c;
    margin: 0 0 1.5rem 0;
    text-align: center;
    border-bottom: 2px solid #f8fafc;
    padding-bottom: 1rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .shopping-list-title::before {
    content: '🛒';
    font-size: 1.25em;
  }

  .empty-message {
    color: #718096;
    text-align: center;
    font-style: italic;
    line-height: 1.6;
    padding: 1.5rem;
    background: #f8fafc;
    border-radius: 16px;
    border: 2px dashed #e2e8f0;
    font-size: 0.9rem;
  }

  .ingredients-list {
    list-style: none;
    margin: 0 0 1.5rem 0;
    padding: 0;
  }

  .ingredient-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    gap: 0.75rem;
    transition: all 0.2s ease;
    border-radius: 8px;
    margin-bottom: 0.5rem;
    background: linear-gradient(135deg, #f8fafc 0%, #edf2f7 100%);
  }

  .ingredient-item:hover {
    background-color: #f1f5f9;
    transform: translateX(2px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }

  .ingredient-item:last-child {
    border-bottom: none;
  }

  .ingredient-text {
    flex: 1;
    color: #2d3748;
    font-size: 0.95rem;
    line-height: 1.4;
    font-weight: 500;
  }

  .ingredient-measure {
    font-size: 0.85rem;
    color: #718096;
    font-weight: 400;
    margin-left: 0.5rem;
  }

  .ingredients-count {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    margin-left: auto;
  }

  @media (max-width: 768px) {
    .ShoppingList {
      margin-top: 1.5rem;
      padding: 1.25rem;
      max-height: none;
    }
    
    .shopping-list-title {
      font-size: 1.375rem;
      margin-bottom: 1.25rem;
    }
    
    .ingredient-item {
      padding: 0.875rem;
      align-items: flex-start;
      gap: 0.5rem;
    }
    
    .ingredient-text {
      width: 100%;
    }
    
    .remove-button {
      align-self: flex-end;
      margin-top: 0.25rem;
    }
    
    .print-button {
      padding: 0.875rem 1rem;
      font-size: 0.95rem;
    }
  }

  @media (max-width: 480px) {
    .ShoppingList {
      padding: 1rem;
    }
    
    .shopping-list-title {
      font-size: 1.25rem;
    }
    
    .ingredient-item {
      padding: 0.75rem;
    }
  }
`;
