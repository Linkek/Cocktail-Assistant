# 🍹 Cocktail Assistant

A modern web application that helps you discover cocktails and generate shopping lists for ingredients. Built with TypeScript, Haunted hooks, and lit-html for a fast and responsive user experience.

## ✨ Features

- **🔍 Smart Search**: Search for cocktails by name using TheCocktailDB API
- **📋 Shopping List**: Automatically generate ingredient lists with smart deduplication
- **🎨 Modern UI**: Clean, responsive design with smooth animations
- **📱 Mobile Friendly**: Fully responsive across all device sizes
- **🖨️ Print Support**: Print-optimized shopping lists
- **♿ Accessible**: Built with accessibility in mind
- **🎯 Real-time Feedback**: Toast notifications for user actions

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Linkek/Cocktail-Assistant.git
   cd Cocktail-Assistant
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:8000`

## 🏗️ Project Structure

```text
cocktail-assistant/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── SearchInput/      # Search input with loading states
│   │   ├── CocktailCard/     # Individual cocktail display
│   │   ├── CocktailList/     # Search results container
│   │   ├── ShoppingList/     # Ingredient list management
│   │   └── Toast/            # Notification system
│   ├── services/             # API and business logic
│   │   └── CocktailService.ts
│   ├── types/                # TypeScript type definitions
│   │   └── enums.ts
│   ├── main.tsx              # Application entry point
│   └── main.styles.ts        # Component-scoped styles
├── index.html                # Main HTML file with global styles
├── package.json
├── tsconfig.json
└── README.md
```

## 🛠️ Technology Stack

- **Frontend Framework**: [Haunted](https://github.com/matthewp/haunted) v6.1.0 - React-like hooks for web components
- **Templating**: [lit-html](https://lit.dev/docs/libraries/lit-html/) v3.3.1 - Fast HTML templating
- **Language**: TypeScript v5.9.2 - Type safety and better developer experience
- **Build Tool**: esbuild v0.25.9 - Fast bundling and development server
- **API**: [TheCocktailDB](https://www.thecocktaildb.com/) - Free cocktail database
- **Styling**: CSS-in-JS with TypeScript template literals

## 📱 Component Architecture

Each component follows a consistent pattern:

- `ComponentName.tsx` - Component logic and template
- `ComponentName.styles.ts` - Component-specific styles exported as template literals

## 🔧 Development

### Available Scripts

- `npm start` - Start development server with hot reload
- `npm run build` - Build for production (when implemented)

### Code Style

- TypeScript strict mode enabled
- Component-based architecture
- Functional programming with hooks
- CSS-in-JS for component encapsulation

## 🌐 API Integration

The app integrates with TheCocktailDB API:

- **Search Endpoint**: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s={query}`
- **Rate Limiting**: Handles API rate limits gracefully

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast mode compatibility
- Screen reader friendly
- Focus management

## 📱 Responsive Design

- **Desktop**: Full grid layout with sidebar
- **Tablet**: Adjusted grid proportions
- **Mobile**: Stacked layout with shopping list on top

## 🚀 Performance

- **Fast Bundling**: esbuild for rapid development
- **Efficient Updates**: Haunted hooks minimize re-renders
- **Optimized Images**: Lazy loading and smooth transitions
- **Small Bundle**: Minimal dependencies for fast loading

## ⚙️ Configuration

The Cocktail Assistant includes a configuration system that allows you to customize the app's behavior. All configuration options are located in [`src/config.ts`](src/config.ts).

### Configuration Options

```typescript
export const config: AppConfig = {
  // Toggle recipe instructions display in sidebar
  showRecipeInstructions: true,
  
  // Set preferred language for cocktail instructions
  language: 'en',
};
```

### Available Settings

#### 🍹 **Recipe Instructions Display**

- **Property**: `showRecipeInstructions`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Controls whether cocktail recipe cards are shown in the sidebar. The shopping list is always visible.

**Examples:**

```typescript
showRecipeInstructions: true,  // Show recipe cards with ingredients and instructions
showRecipeInstructions: false, // Hide recipe cards, show only shopping list
```

#### 🌍 **Language Support**

- **Property**: `language`
- **Type**: `string`
- **Default**: `'en'`
- **Description**: Sets the preferred language for cocktail instructions. Falls back to English if the selected language isn't available for a specific cocktail.

**Supported Languages:**

- `'en'` - **English** (Default)
- `'es'` - **Español** (Spanish)
- `'de'` - **Deutsch** (German)
- `'fr'` - **Français** (French)
- `'it'` - **Italiano** (Italian)
- `'zh-hans'` - **中文 (简体)** (Chinese Simplified)
- `'zh-hant'` - **中文 (繁體)** (Chinese Traditional)

**Examples:**

```typescript
language: 'es',      // Spanish instructions
language: 'de',      // German instructions
language: 'fr',      // French instructions
```

### How to Modify Configuration

1. **Open the config file**: Navigate to [`src/config.ts`](src/config.ts)
2. **Edit the values**: Change the properties to your preferred settings
3. **Save the file**: The changes will take effect immediately in development mode
4. **Restart if needed**: In some cases, you may need to restart the development server

### Configuration Examples

#### Minimal Setup (Shopping List Only)

```typescript
export const config: AppConfig = {
  showRecipeInstructions: false,
  language: 'en',
};
```

#### Spanish Language with Recipes

```typescript
export const config: AppConfig = {
  showRecipeInstructions: true,
  language: 'es',
};
```

#### German Language, Shopping List Only

```typescript
export const config: AppConfig = {
  showRecipeInstructions: false,
  language: 'de',
};
```

### Features Affected by Configuration

#### Recipe Instructions (`showRecipeInstructions`)

- ✅ **Enabled**: Shows recipe cards in sidebar with ingredients and instructions
- ❌ **Disabled**: Hides recipe section, shows only shopping list
- 📱 **Always**: Shopping list remains visible in both modes

#### Language Setting (`language`)

- 🎯 **Instructions**: Cocktail mixing instructions display in selected language
- 🛒 **Shopping List**: Always shows ingredient names in English (API limitation)
- 🖨️ **Print Feature**: Printed recipes use the configured language
- 🔄 **Fallback**: Automatically uses English if selected language unavailable

---

**Author**: Linus Karlsson  
**Repository**: [Cocktail-Assistant](https://github.com/Linkek/Cocktail-Assistant)
