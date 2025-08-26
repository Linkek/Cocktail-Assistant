/**
 * Button component styles
 * Author: Linus Karlsson
 */

export const buttonStyles = `
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border: none;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    font-family: inherit;
    line-height: 1.2;
    white-space: nowrap;
    box-sizing: border-box;
    vertical-align: middle;
  }

  .btn:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  .btn:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  /* Sizes */
  .btn--small {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    border-radius: 8px;
  }

  .btn--medium {
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
  }

  .btn--large {
    padding: 1rem 2rem;
    font-size: 1.1rem;
  }

  .btn--full-width {
    width: 100%;
  }

  /* Variants */
  .btn--primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  }

  .btn--primary:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5);
  }

  .btn--primary:focus {
    outline-color: #667eea;
  }

  .btn--primary:active:not(:disabled) {
    transform: translateY(0);
  }

  .btn--success {
    background: linear-gradient(135deg, #38a169 0%, #2f855a 100%);
    color: white;
    box-shadow: 0 4px 12px rgba(56, 161, 105, 0.3);
  }

  .btn--success:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(56, 161, 105, 0.4);
  }

  .btn--success:focus {
    outline-color: #2f855a;
  }

  .btn--success:active:not(:disabled) {
    transform: translateY(0);
  }

  .btn--danger {
    background: linear-gradient(135deg, #e53e3e 0%, #c53030 100%);
    color: white;
    border-radius: 100rem;
    box-shadow: 0 4px 12px rgba(229, 62, 62, 0.3);
  }

  .btn--danger:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(229, 62, 62, 0.4);
  }

  .btn--danger:focus {
    outline-color: #c53030;
  }

  .btn--danger:active:not(:disabled) {
    transform: translateY(0);
  }

  .btn--secondary {
    background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
    color: #4a5568;
    border: 2px solid #e2e8f0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .btn--secondary:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    background: linear-gradient(135deg, #edf2f7 0%, #e2e8f0 100%);
  }

  .btn--secondary:focus {
    outline-color: #4a5568;
  }

  .btn--secondary:active:not(:disabled) {
    transform: translateY(0);
  }

  /* Shimmer effect for primary and success buttons */
  .btn--primary::before,
  .btn--success::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.6s ease;
  }

  .btn--primary:hover:not(:disabled)::before,
  .btn--success:hover:not(:disabled)::before {
    left: 100%;
  }

  /* Loading state */
  .btn--loading {
    color: transparent;
    position: relative;
  }

  .btn__loading-spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1.25rem;
    height: 1.25rem;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top: 2px solid white;
    border-radius: 50%;
    animation: btn-spin 1s linear infinite;
  }

  .btn__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1em;
    line-height: 1;
  }

  @keyframes btn-spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Remove button styles */
  .btn--danger.btn--small {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.625rem;
    line-height: 1;
    height: 1.25rem;
    width: 1.25rem;
    border-radius: 50%;
    color: #fff;
    box-shadow: none;
    padding: 0;
    gap: 0;
    font-family: Arial, sans-serif;
    font-weight: bold;
    text-align: center;
  }

  .btn--danger.btn--small:hover:not(:disabled) {
    opacity: 0.8;
    transform: none;
    box-shadow: none;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .btn--large {
      padding: 0.875rem 1.5rem;
      font-size: 1rem;
    }

    .btn--medium {
      padding: 0.75rem 1.25rem;
      font-size: 0.95rem;
    }
  }

  @media (max-width: 480px) {
    .btn--large, .btn--medium {
      width: 100%;
    }
  }
`;
