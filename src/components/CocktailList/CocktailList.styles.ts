/**
 * CocktailList component styles
 * Author: Linus Karlsson
 */

export const cocktailListStyles = `
  .CocktailList {
    margin-bottom: 1.5rem;
  }

  .CocktailList.empty {
    text-align: center;
    padding: 3rem 1.5rem;
    background: white;
    border-radius: 20px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid #f1f5f9;
  }

  .empty-message {
    color: #718096;
    font-size: 1.125rem;
    font-style: italic;
    margin: 0;
    line-height: 1.6;
    padding: 2.5rem 1.5rem;
    background: #f8fafc;
    border-radius: 16px;
    border: 2px dashed #e2e8f0;
    position: relative;
  }

  .empty-message::before {
    content: '🔍';
    display: block;
    font-size: 3rem;
    margin-bottom: 1rem;
    opacity: 0.6;
    filter: grayscale(0.3);
  }

  .results-title {
    font-size: 1.75rem;
    font-weight: 700;
    color: #1a202c;
    margin: 0 0 1.5rem 0;
    padding: 1.5rem 1.5rem 1rem 1.5rem;
    border-bottom: 2px solid #f1f5f9;
    background: white;
    border-radius: 20px 20px 0 0;
    margin-bottom: 0;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .results-title::before {
    content: '🍹';
    font-size: 1.5rem;
  }

  .results-count {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.875rem;
    font-weight: 600;
    margin-left: auto;
  }

  .cocktails-grid {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: white;
    border-radius: 0 0 20px 20px;
    padding: 0 1.5rem 1.5rem 1.5rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid #f1f5f9;
    border-top: none;
  }

  @media (max-width: 768px) {
    .CocktailList.empty {
      padding: 2.5rem 1rem;
    }
    
    .empty-message {
      font-size: 1rem;
      padding: 2rem 1rem;
    }
    
    .empty-message::before {
      font-size: 2.5rem;
      margin-bottom: 0.75rem;
    }
    
    .results-title {
      font-size: 1.5rem;
      padding: 1.25rem 1.25rem 0.875rem 1.25rem;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }
    
    .results-count {
      margin-left: 0;
      align-self: flex-end;
    }
    
    .cocktails-grid {
      padding: 0 1.25rem 1.25rem 1.25rem;
      gap: 0.875rem;
    }
  }

  @media (max-width: 480px) {
    .CocktailList.empty {
      padding: 2rem 0.75rem;
    }
    
    .empty-message {
      padding: 1.5rem 0.75rem;
      font-size: 0.9rem;
    }
    
    .results-title {
      font-size: 1.375rem;
      padding: 1rem 1rem 0.75rem 1rem;
    }
    
    .cocktails-grid {
      padding: 0 1rem 1rem 1rem;
    }
  }
`;
