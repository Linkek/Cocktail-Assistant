# Cocktail Assistant

Build a tiny app that helps you gather a shopping list for multiple cocktails.

## UI Mockup

```
           ┌───────────────────────────────────────────────────────────────┬──────┐
           │ Margarita                                                     │Search│
           └───────────────────────────────────────────────────────────────┴──────┘

┌─────────────────────────────────────────────────────────────┐ ┌──────────────────────────────┐
│                                                             │ │                              │
│ ┌────────────┐  ────────────────────────────────────        │ │ Shopping List                │
│ │            │                                              │ │ ──────────────────────────── │
│ │            │  ───────────────                             │ │                              │
│ │            │                                              │ │  ─────────────────           │
│ │            │  ───────────────                             │ │                              │
│ │            │                                        ┌───┐ │ │  ─────────────────           │
│ │            │  ───────────────                       │ + │ │ │                              │
│ └────────────┘                                        └───┘ │ │  ─────────────────           │
│                                                             │ │                              │
└─────────────────────────────────────────────────────────────┘ │                              │
                                                                │                              │
                                                                │                              │
┌─────────────────────────────────────────────────────────────┐ │                              │
│                                                             │ │                              │
│ ┌────────────┐  ────────────────────────────────────        │ │                              │
│ │            │                                              │ │                              │
│ │            │  ───────────────                             │ │                              │
│ │            │                                              │ │                              │
│ │            │  ───────────────                             │ │                              │
│ │            │                                        ┌───┐ │ │ ┌─────┐                      │
│ │            │  ───────────────                       │ + │ │ │ │Print│                      │
│ └────────────┘                                        └───┘ │ │ └─────┘                      │
│                                                             │ │                              │
└─────────────────────────────────────────────────────────────┘ └──────────────────────────────┘


┌─────────────────────────────────────────────────────────────┐
│                                                             │
│ ┌────────────┐  ────────────────────────────────────        │
│ │            │                                              │
│ │            │  ───────────────                             │
│ │            │                                              │
│ │            │  ───────────────                             │
│ │            │                                        ┌───┐ │      ┌─────────────────────────┐
│ │            │  ───────────────                       │ + │ │      │        Searching...     │
│ └────────────┘                                        └───┘ │      │                         │
│                                                             │      └─────────────────────────┘
└─────────────────────────────────────────────────────────────┘
```

## Features

- _search input_ with query submit button
- _query results listing_ with thumbnail, name, instructions and "add to
  shopping list" button for each
- _shopping list_ that collects all of the ingredients for the cocktails
  that the user adds
- _print shopping list_ button that opens up a browser dialog to print
  the ingredients list
- _toaster_ that displays various messages: "Searching...", "Here are the
  results.", "No results found.", "Ingredients added to shopping list.",
  "Ingredient removed from shopping list."

NOTE: the shopping list deduplicates the items (if two cocktails contain
Tequila, you only need to buy a single bottle of Tequila)

## Requirements

- all code is committed to a public github repository, that you create
- cocktails are fetched using TheCocktailDB`s open API:
  https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
- fetch queries are made using the native fetch api:
  https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
- you have to use the haunted hooks library:
  https://github.com/matthewp/haunted
- the only UI libraries allowed are haunted and lit-html
- the code should be written in Typescript
- the app can be started locally by running these commands:
  `git clone <repo url>`, `npm install`, `npm start`
- Types per components. so. one css file same name as the component. All components writen with Capitilized names. Like SearchButton.tsx and SearchButton.css. Then in the component the first classname should be SearchButton to keeep it all consistent.
- Add header page comments.
- Auther is Linus Karlsson.
- Clean and human reading code.
- use accessible HTML or a11y.

### About haunted

Haunted is a library inspired by [React hooks](https://reactjs.org/docs/hooks-intro.html).
It enables you to create native web components using hooks and lit-html.
At Neovici we use it extensively, so familiarity with it is very important.
