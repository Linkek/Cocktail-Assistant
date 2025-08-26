/**
 * Toast notification component for user feedback
 * Author: Linus Karlsson
 */

import { component, useEffect, useState } from 'haunted';
import { html } from 'lit-html';
import { ToastMessage, ToastType } from '../../types/enums';
import { toastStyles } from './Toast.styles';

interface ToastProps {
  message: ToastMessage | null;
  onClose: () => void;
}

function Toast({ message, onClose }: ToastProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      
      // Auto-hide toast after 3 seconds, except for searching state
      if (message.type !== ToastType.SEARCHING) {
        const timer = setTimeout(() => {
          setVisible(false);
          setTimeout(onClose, 300); // Wait for fade out animation
        }, 3000);
        
        return () => clearTimeout(timer);
      }
    } else {
      setVisible(false);
    }
  }, [message]);

  if (!message) {
    return html``;
  }

  const getToastClass = () => {
    let baseClass = 'Toast';
    if (visible) baseClass += ' show';
    
    switch (message.type) {
      case ToastType.SEARCHING:
        return `${baseClass} info`;
      case ToastType.RESULTS:
      case ToastType.ADDED:
        return `${baseClass} success`;
      case ToastType.NO_RESULTS:
        return `${baseClass} warning`;
      case ToastType.REMOVED:
        return `${baseClass} info`;
      default:
        return baseClass;
    }
  };

  const getIcon = () => {
    switch (message.type) {
      case ToastType.SEARCHING:
        return '🔍';
      case ToastType.RESULTS:
        return '🍹';
      case ToastType.ADDED:
        return '✅';
      case ToastType.NO_RESULTS:
        return '❌';
      case ToastType.REMOVED:
        return '🗑️';
      default:
        return 'ℹ️';
    }
  };

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  return html`
    <style>
      ${toastStyles}
    </style>
    <div class=${getToastClass()} role="alert" aria-live="polite">
      <span class="toast-icon">${getIcon()}</span>
      <span class="toast-message">${message.message}</span>
      ${message.type !== ToastType.SEARCHING ? html`
        <button 
          class="close-button"
          @click=${handleClose}
          aria-label="Close notification"
        >
          ×
        </button>
      ` : ''}
    </div>
  `;
}

customElements.define('toast-notification', component(Toast, { useShadowDOM: false }));
