/**
 * CocktailCard component styles
 * Author: Linus Karlsson
 */

export const cocktailCardStyles = `
  .CocktailCard {
    display: flex;
    gap: 1.5rem;
    padding: 1.5rem;
    background: white;
    border-radius: 20px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    margin-bottom: 1rem;
    transition: all 0.3s ease;
    border: 1px solid #f1f5f9;
    position: relative;
    overflow: hidden;
  }

  .CocktailCard::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .CocktailCard:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    border-color: #e2e8f0;
  }

  .CocktailCard:hover::before {
    opacity: 1;
  }

  .cocktail-image {
    flex-shrink: 0;
    position: relative;
    overflow: hidden;
    border-radius: 16px;
  }

  .cocktail-image img {
    width: 160px;
    height: 160px;
    object-fit: cover;
    border-radius: 16px;
    transition: transform 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .CocktailCard:hover .cocktail-image img {
    transform: scale(1.05);
  }

  .cocktail-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: 0;
  }

  .cocktail-name {
    font-size: 1.75rem;
    font-weight: 700;
    color: #1a202c;
    margin: 0;
    line-height: 1.2;
    letter-spacing: -0.025em;
  }

  .cocktail-instructions {
    flex: 1;
    color: #4a5568;
    line-height: 1.6;
    margin: 0;
    font-size: 0.95rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  .add-button {
    align-self: flex-start;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.875rem 1.5rem;
    background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(56, 161, 105, 0.3);
    position: relative;
    overflow: hidden;
  }

  .add-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.6s ease;
  }

  .add-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(56, 161, 105, 0.4);
  }

  .add-button:hover::before {
    left: 100%;
  }

  .add-button:active {
    transform: translateY(-1px);
  }

  .add-button:focus {
    outline: 2px solid #2f855a;
    outline-offset: 2px;
  }

  .plus-icon {
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 1;
  }

  @media (max-width: 768px) {
    .CocktailCard {
      flex-direction: column;
      text-align: center;
      padding: 1.25rem;
      gap: 1.25rem;
    }
    
    .cocktail-image {
      align-self: center;
    }
    
    .cocktail-image img {
      width: 140px;
      height: 140px;
    }
    
    .cocktail-name {
      font-size: 1.5rem;
      text-align: center;
    }
    
    .cocktail-instructions {
      text-align: left;
      -webkit-line-clamp: 3;
      line-clamp: 3;
      font-size: 0.9rem;
    }
    
    .add-button {
      align-self: center;
      padding: 0.75rem 1.25rem;
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    .CocktailCard {
      padding: 1rem;
      gap: 1rem;
    }
    
    .cocktail-image img {
      width: 120px;
      height: 120px;
    }
    
    .cocktail-name {
      font-size: 1.375rem;
    }
    
    .cocktail-instructions {
      font-size: 0.875rem;
    }
    
    .add-button {
      padding: 0.625rem 1rem;
      font-size: 0.875rem;
    }
  }
`;
