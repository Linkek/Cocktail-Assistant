/**
 * SearchInput component styles
 * Author: Linus Karlsson
 */

export const searchInputStyles = `
  .SearchInput {
    margin-bottom: 2.5rem;
    padding: 0 1rem;
  }

  .search-container {
    display: flex;
    gap: 0.75rem;
    max-width: 700px;
    margin: 0 auto;
    background: white;
    padding: 0.5rem;
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
    border: 1px solid rgba(255, 255, 255, 0.8);
  }

  .search-input {
    flex: 1;
    padding: 1rem 1.25rem;
    border: none;
    border-radius: 12px;
    font-size: 1rem;
    background: #f8fafc;
    color: #2d3748;
    transition: all 0.2s ease;
    outline: none;
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

  .search-button {
    padding: 1rem 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    min-width: 140px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  }

  .search-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.6s ease;
  }

  .search-button:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5);
  }

  .search-button:hover:not(:disabled)::before {
    left: 100%;
  }

  .search-button:active:not(:disabled) {
    transform: translateY(-1px);
  }

  .search-button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .search-button:focus {
    outline: 2px solid #764ba2;
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    .SearchInput {
      padding: 0 0.5rem;
      margin-bottom: 2rem;
    }
    
    .search-container {
      flex-direction: column;
      gap: 0.5rem;
      padding: 0.75rem;
    }
    
    .search-input {
      padding: 0.875rem 1rem;
      font-size: 0.9rem;
    }
    
    .search-button {
      padding: 0.875rem 1.5rem;
      min-width: auto;
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    .search-container {
      padding: 0.5rem;
    }
    
    .search-input {
      padding: 0.75rem 0.875rem;
    }
    
    .search-button {
      padding: 0.75rem 1.25rem;
    }
  }
`;
