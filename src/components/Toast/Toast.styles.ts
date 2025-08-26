/**
 * Toast component styles
 * Author: Linus Karlsson
 */

export const toastStyles = `
  .Toast {
    position: fixed;
    bottom: 1.25rem;
    right: 1.25rem;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    color: white;
    font-weight: 600;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
    z-index: 1000;
    transform: translateX(calc(100% + 1.25rem));
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    max-width: 400px;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    backdrop-filter: blur(10px);
  }

  .Toast.show {
    transform: translateX(0);
  }

  .Toast.info {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
  }

  .Toast.success {
    background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
    box-shadow: 0 8px 32px rgba(56, 161, 105, 0.3);
  }

  .Toast.error {
    background: linear-gradient(135deg, #e53e3e 0%, #c53030 100%);
    box-shadow: 0 8px 32px rgba(229, 62, 62, 0.3);
  }

  .Toast.warning {
    background: linear-gradient(135deg, #d69e2e 0%, #b7791f 100%);
    box-shadow: 0 8px 32px rgba(214, 158, 46, 0.3);
  }

  .toast-icon {
    font-size: 1.25rem;
    flex-shrink: 0;
    animation: bounce 0.6s ease-in-out;
  }

  .toast-message {
    flex: 1;
    font-size: 0.9rem;
    line-height: 1.4;
    font-weight: 500;
  }

  @keyframes bounce {
    0%, 20%, 53%, 80%, 100% {
      transform: translate3d(0, 0, 0);
    }
    40%, 43% {
      transform: translate3d(0, -8px, 0);
    }
    70% {
      transform: translate3d(0, -4px, 0);
    }
    90% {
      transform: translate3d(0, -2px, 0);
    }
  }

  @media (max-width: 768px) {
    .Toast {
      bottom: 1rem;
      right: 1rem;
      max-width: none;
      transform: translateX(100%);
    }
    
    .Toast.show {
      transform: translateX(0);
    }
    
    .toast-message {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 480px) {
    .Toast {
      padding: 0.875rem 1.25rem;
      gap: 0.5rem;
    }
    
    .toast-icon {
      font-size: 1.1rem;
    }
    
    .toast-message {
      font-size: 0.8rem;
    }
  }
`;
