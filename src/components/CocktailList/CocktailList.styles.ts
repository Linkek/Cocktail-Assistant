/**
 * CocktailList component styles
 * Author: Linus Karlsson
 */

export const cocktailListStyles = `
  .CocktailList {
    margin-bottom: 1.5rem;
  }

  .CocktailList.welcome {
    text-align: center;
    background: white;
    border-radius: 20px;
  }

  .welcome-message {
    padding: 3rem 2rem;
    background: linear-gradient(135deg, #f8fafc 0%, #edf2f7 100%);
    border-radius: 20px;
    border: 2px solid #e2e8f0;
  }

  .welcome-message h2 {
    font-size: 2rem;
    font-weight: 700;
    margin: 0 0 1rem 0;
    color: #667eea;
  }

  .welcome-message p {
    color: #4a5568;
    font-size: 1.125rem;
    line-height: 1.6;
    margin: 0.75rem 0;
  }

  .CocktailList.empty {
    text-align: center;
    background: white;
    border-radius: 20px;
  }

  .empty-message {
    color: #718096;
    font-size: 1.125rem;
    font-style: italic;
    margin: 0;
    line-height: 1.6;
    padding: 1.5rem 1.5rem;
    background: #f8fafc;
    border-radius: 16px;
    border: 2px dashed #e2e8f0;
    position: relative;
  }

  .results-title {
    font-size: 1.75rem;
    font-weight: 700;
    color: #1a202c;
    margin: 0 0 1.5rem 0;
    padding: 0 0 1rem 0;
    background: white;
    border-radius: 20px 20px 0 0;
    margin-bottom: 0;
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
    border-radius: 1rem;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.025em;
    margin-left: auto;
  }

  .cocktails-grid {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: white;
    border-radius: 0 0 20px 20px;
    padding: 0 0 1.5rem 0;
    border-top: none;
  }

  @media (max-width: 768px) {
    .welcome-message {
        padding: 2rem 1.5rem;
    }

    .welcome-message h2 {
        font-size: 1.75rem;
    }

    .welcome-message p {
        font-size: 1rem;
    }

    .CocktailList.empty {
        padding: 2.5rem 1rem;
    }
    
    .empty-message {
        font-size: 1rem;
        padding: 2rem 1rem;
    }
    
    .results-title {
        font-size: 1.25rem;
        justify-content: space-between;
        gap: 0rem;
    }
    
    .cocktails-grid {
        gap: 0.875rem;
    }
  }

  @media (max-width: 480px) {
    .CocktailList.empty {
        padding: 2rem 0.75rem;
    }
    
    .empty-message {
        padding: 0 0.75rem;
        font-size: 0.9rem;
    }
    
    .results-title {
        font-size: 1.375rem;
    }
  }
`;
