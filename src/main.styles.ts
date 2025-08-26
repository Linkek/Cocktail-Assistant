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
    min-width: 0; /* Prevents grid overflow */
  }

  .sidebar {
    min-width: 320px;
  }

  /* Responsive design */
  @media (max-width: 1024px) {
    .App {
      padding: 1.75rem;
    }
    
    .main-content {
      grid-template-columns: 1fr 300px;
      gap: 1.75rem;
    }
    
    .sidebar {
      min-width: 280px;
    }
  }

  @media (max-width: 768px) {
    .App {
      padding: 1.5rem;
    }
    
    .main-content {
      grid-template-columns: 1fr;
      gap: 1.75rem;
      margin-top: 1.75rem;
    }
    
    .sidebar {
      min-width: auto;
    }
  }

  @media (max-width: 480px) {
    .App {
      padding: 1rem;
    }
    
    .main-content {
      gap: 1.5rem;
      margin-top: 1.5rem;
    }
  }

  /* Global styles for better accessibility and typography */
  * {
    box-sizing: border-box;
  }

  button:focus,
  input:focus,
  [tabindex]:focus {
    outline: 2px solid #667eea;
    outline-offset: 2px;
  }

  /* Ensure text is readable */
  body {
    line-height: 1.6;
    color: #2d3748;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  }

  /* Better visual hierarchy */
  .App > * + * {
    margin-top: 0;
  }

  /* Custom scrollbar for webkit browsers */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
  }

  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* Loading animation for images */
  img {
    transition: opacity 0.3s ease;
  }

  img:not([src]) {
    opacity: 0;
  }

  /* Focus styles for better accessibility */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    button:focus,
    input:focus,
    [tabindex]:focus {
      outline: 3px solid;
      outline-offset: 2px;
    }
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
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
