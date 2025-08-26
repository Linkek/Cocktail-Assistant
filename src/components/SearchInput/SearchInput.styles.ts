/**
 * SearchInput component styles
 * Author: Linus Karlsson
 */

export const searchInputStyles = `
  .SearchInput {
    margin-bottom: 2.5rem;
  }

  .search-container {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    max-width: 700px;
    margin: 0 auto;
    background: white;
    padding: 0.5rem;
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  }

  .search-container app-button {
    flex-shrink: 0;
    height: fit-content;
    align-self: center;
  }

  .search-container app-button .btn {
    height: auto;
    min-height: unset;
  }

  .search-input {
    flex: 1;
    padding-left: 1rem;
    width: 100%;
    border: none;
    border-radius: 12px;
    font-size: 1rem;
    background: #f8fafc;
    color: #2d3748;
    transition: all 0.2s ease;
    outline: none;
    height: -webkit-fill-available;
  }

  .search-input:focus {
    background: white;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    transform: translateY(-1px);
  }

  .search-input::placeholder {
    color: #a0aec0;
  }

  .search-input:disabled {
    background-color: #edf2f7;
    cursor: not-allowed;
    color: #a0aec0;
  }

  @media (max-width: 768px) {
    .SearchInput {
      margin-bottom: 2rem;
    }
    
    .search-container {
      gap: 0.5;
      padding: 0.75rem;
    }
    
    .search-input {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    .search-input {
        height: 2.5rem;
        flex: unset;
        width: -webkit-fill-available;
    }

    .search-container app-button {
        width: 100%;
    }

    .search-container {
        padding: 0.5rem;
        flex-direction: column;
    }
  }
`;
