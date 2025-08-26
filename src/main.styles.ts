/**
 * Main application styles
 * Author: Linus Karlsson
 */

export const mainStyles = `
  .App {
    max-width: 100%;
    margin: 0;
    padding: 0;
    min-height: auto;
  }

  .main-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
    align-items: start;
    margin-top: 1.5rem;
  }

  .results-section {
    min-width: 0;
    width: 100%;
  }

  .sidebar {
    min-width: 320px;
  }

  /* Responsive design */
  @media (max-width: 1024px) {
    .main-content {
      grid-template-columns: 1fr 300px;
      gap: 1.75rem;
    }
    
    .sidebar {
      min-width: 280px;
    }
  }

  @media (max-width: 768px) {
    .main-content {
        grid-template-columns: 1fr;
        gap: 1.75rem;
        display: flex;
        flex-direction: column-reverse;
        margin-top: 1.75rem;
    }
    
    .sidebar {
        width: 100%;
    }
  }

  @media (max-width: 480px) {
    .main-content {
      gap: 1.5rem;
      margin-top: 1.5rem;
    }
  }

  /* Better visual hierarchy */
  .App > * + * {
    margin-top: 0;
  }

  /* Print styles */
  @media print {
    .App {
      padding: 0;
      max-width: none;
      box-shadow: none;
    }
    
    .main-content {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
    
    .sidebar {
      order: -1;
    }
    
    button,
    .Toast {
      display: none !important;
    }
  }
`;
