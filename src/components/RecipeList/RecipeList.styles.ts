/**
 * RecipeList component styles
 * Author: Linus Karlsson
 */

export const recipeListStyles = `
  .recipes-section {
    background: white;
    border-radius: 1.25rem;
    box-shadow: 0 0.25rem 1.25rem rgba(0, 0, 0, 0.08);
    padding: 1.5rem 1.25rem;
    margin-bottom: 2rem;
  }

  .recipes-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1a202c;
    margin: 0 0 1.5rem 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-bottom: 2px solid #f8fafc;
    padding-bottom: 1rem;
  }

  .recipes-title::before {
    content: '📝';
    font-size: 1.25em;
  }

  .recipes-count {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.025em;
    margin-left: auto;
    }

  .recipes-list {
    font-size: 1.375rem;
    margin-bottom: 1.25rem;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .recipes-section {
      padding: 1.25rem 1rem;
      margin-bottom: 1.5rem;
    }

    .recipes-title {
      font-size: 1.25rem;
    }
  }
`;
