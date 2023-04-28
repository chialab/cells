# Cells

A **strongly** opinionated modular utility-first CSS library.

## Why

**Cells** looks like just any another utility-first CSS library like bootstrap, tailwind and unocss, but it has a slightly different scope. The library is designed to work as a configurable primer for themable components library and frontend skeletons.

Since it does not try to cover the entire styling experience of a project, it does not require build-time optimizations. You can import base custom properties and classes using plain CSS imports and load opinionated rules from the provided presets.

> Please note that **Cells** does not aim to compete in the CSS frameworks market. It will evolve in the only interest of our development teams, but we are happy to share and discuss design choices with other developers.

Implemented modules:

* **Spacing** defines base spacing variables
* **Theming** defines base theming variables such as `primary`, `secondary` and `accent` colors and base text and background colors classes
* **Typography** defines base variables for families, weights and size scale, as well as declinated classes for composition
* **Layout** contains classes for general grid layout, as well as utility classes for flexbox specs
* **Paddings** contains classes to set incremental paddings, from `p-0` to `p-10` and with `px`, `py`, `pt`, `pr`, `pb`, `pl` variants
* **Margins** contains classes to set incremental margins, from `m-0` to `m-10` and with `mx`, `my`, `mt`, `mr`, `mb`, `ml` variants
* **Borders** contains `radius-N` classes for rounded borders
* **Shadows** contains both classes for inset shadows, from `deep-1` to `deep-4`, and drop shadows from `elevation-0` to `elevation-10` plus `elevation-12`, `elevation-186` and `elevation-24`
* **Outline** customizes the global page outline for keyboard navigation
* **Scollbar** contains classes to customize scrollbars

Presets:

* **Website** configures the grid layout for each viewport (mobile 4 columns, tablet portrait 6 columns, tablet landscape 8 columns, desktop 12 columns)

## Usage

[![NPM](https://img.shields.io/npm/v/@chialab/cells.svg)](https://www.npmjs.com/package/@chialab/cells)

You can install and consume **Cells** with [`npm`](https://www.npmjs.com/):

```sh
npm i @chialab/cells
```

```sh
yarn add @chialab/cells
```

and import it in your application/module:

**main.css**
```css
@layer globals, layout, typography, theme, utilities;

@import '@chialab/cells/tokens';
@import '@chialab/cells/classes';
@import '@chialab/cells/globals';
/* OR */
@import '@chialab/cells/website';
```

**main.js**
```js
import '@chialab/cells';
```

---

## License

Cells is released under the [MIT](https://github.com/chialab/cells/blob/main/LICENSE) license.
