/**
 * Reusable Button component with different variants
 * Author: Linus Karlsson
 */

import { component } from 'haunted';
import { html } from 'lit-html';
import { buttonStyles } from './Button.styles';

export type ButtonVariant = 'primary' | 'success' | 'danger' | 'secondary';
export type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  icon?: string;
  label?: string;
  loadingLabel?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
}

function ButtonComponent({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  fullWidth = false,
  icon,
  label = 'Click Me',
  loadingLabel = 'Loading...',
  onClick,
  type = 'button',
  ariaLabel
}: ButtonProps) {
  const handleClick = () => {
    if (!disabled && !loading && onClick) {
      onClick();
    }
  };

  const classes = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth && 'btn--full-width',
    loading && 'btn--loading',
    disabled && 'btn--disabled'
  ]
    .filter(Boolean)
    .join(' ');

  return html`
    <style>
      ${buttonStyles}
    </style>
    <button
      class=${classes}
      type=${type}
      ?disabled=${disabled || loading}
      @click=${handleClick}
      aria-label=${ariaLabel || label}
      title=${label}
    >
      ${loading
        ? html`
            <span class="btn__loading-spinner"></span>
            ${loadingLabel}
          `
        : html`
            ${icon ? html`<span class="btn__icon">${icon}</span>` : ''}
            ${label}
          `}
    </button>
  `;
}

customElements.define('app-button', component(ButtonComponent, { useShadowDOM: false }));
