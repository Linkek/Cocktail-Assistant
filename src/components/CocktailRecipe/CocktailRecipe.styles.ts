/**
 * CocktailRecipe component styles
 * Author: Linus Karlsson
 */

export const cocktailRecipeStyles = `
  .recipe-card {
    background: linear-gradient(135deg, #f8fafc 0%, #edf2f7 100%);
    border-radius: 0.875rem;
    padding: 1.25rem;
    transition: all 0.3s ease;
  }

  .recipe-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
    gap: 1rem;
  }

  .recipe-name {
    font-size: 1.25rem;
    font-weight: 700;
    color: #2d3748;
    margin: 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    flex: 1;
  }

  .recipe-ingredients h4,
  .recipe-instructions h4 {
    font-size: 1rem;
    font-weight: 600;
    color: #4a5568;
    margin: 0 0 0.5rem 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .recipe-ingredients h4::before {
    content: '🥄';
    font-size: 1.1em;
  }

  .recipe-instructions h4::before {
    content: '📋';
    font-size: 1.1em;
  }

  .ingredient-measures {
    list-style: none;
    padding: 0;
    margin: 0 0 1rem 0;
  }

  .ingredient-measures li {
    padding: 0.5rem 0.75rem;
    margin: 0.25rem 0;
    background: white;
    border-radius: 0.5rem;
    font-size: 0.9rem;
    color: #4a5568;
    transition: all 0.2s ease;
  }

  .ingredient-measures li:hover {
    background: #f7fafc;
    border-color: #cbd5e0;
  }

  .recipe-instructions {
    margin-top: 1rem;
  }

  .recipe-instructions p {
    font-size: 0.9rem;
    line-height: 1.6;
    color: #2d3748;
    margin: 0;
    padding: 0.75rem;
    background: white;
    border-radius: 0.5rem;
  }
`;
