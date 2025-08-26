/**
 * Search input component for cocktail search
 * Author: Linus Karlsson
 */

import { component, useState } from 'haunted';
import { html } from 'lit-html';
import { searchInputStyles } from './SearchInput.styles';

interface SearchInputProps {
  onSearch: (query: string) => void;
  loading: boolean;
}

function SearchInput({ onSearch, loading }: SearchInputProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    if (query.trim() && !loading) {
      onSearch(query.trim());
    }
  };

  const handleInputChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setQuery(target.value);
  };

  return html`
    <style>
      ${searchInputStyles}
    </style>
    <form class="SearchInput" @submit=${handleSubmit}>
      <div class="search-container">
        <input
          type="text"
          class="search-input"
          placeholder="Search for cocktails (e.g., Margarita)"
          .value=${query}
          @input=${handleInputChange}
          .disabled=${loading}
          aria-label="Search for cocktails"
        />
        <app-button
          .variant=${'primary'}
          .size=${'large'}
          .icon=${'🔍'}
          .loading=${loading}
          .disabled=${loading || !query.trim()}
          .label=${loading ? 'Searching...' : 'Search'}
          .loadingLabel=${'Searching...'}
          .type=${'submit'}
        ></app-button>
      </div>
    </form>
  `;
}

customElements.define('search-input', component(SearchInput, { useShadowDOM: false }));
