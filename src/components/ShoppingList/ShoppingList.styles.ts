/**
 * ShoppingList component styles
 * Author: Linus Karlsson
 */

export const shoppingListStyles = `
  .ShoppingList {
    background: white;
    border-radius: 20px;
    padding: 1.5rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    height: fit-content;
    position: sticky;
    top: 1.25rem;
    border: 1px solid #f1f5f9;
    max-height: calc(100vh - 2.5rem);
    overflow-y: auto;
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

  .shopping-list-content {
    min-height: 150px;
  }

  .empty-message {
    color: #718096;
    text-align: center;
    font-style: italic;
    line-height: 1.6;
    margin: 2.5rem 0;
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
    border-bottom: 1px solid #f1f5f9;
    gap: 0.75rem;
    transition: all 0.2s ease;
    border-radius: 8px;
    margin-bottom: 0.5rem;
    background: #fafbfc;
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

  .remove-button {
    background: #e53e3e;
    color: white;
    border: none;
    border-radius: 50%;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    line-height: 1;
    transition: all 0.2s ease;
    flex-shrink: 0;
  }

  .remove-button:hover {
    background-color: #c53030;
    transform: scale(1.1);
  }

  .remove-button:focus {
    outline: 2px solid #c53030;
    outline-offset: 2px;
  }

  .print-button {
    width: 100%;
    padding: 1rem 1.25rem;
    background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(56, 161, 105, 0.3);
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .print-button::before {
    content: '🖨️';
    font-size: 1.1em;
  }

  .print-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(56, 161, 105, 0.4);
  }

  .print-button:focus {
    outline: 2px solid #2f855a;
    outline-offset: 2px;
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
      position: static;
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
      flex-direction: column;
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
    
    .print-button {
      padding: 0.75rem;
      font-size: 0.9rem;
    }
  }
`;
