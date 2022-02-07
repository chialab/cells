# Cells

A strongly opinionated modular utility-first CSS library.

## Why

**Cells** looks like just any another utility-first CSS library like bootstrap, tailwind and unocss, but it has a slightly different scope. The library is designed to work as a configurable primer for themable components library and frontend skeletons.

Since it does not try to cover the entire styling experience of a project, it does not require build-time optimizations. You can import base custom properties and classes using plain CSS imports and load opinionated rules from the provided presets.

Please note that **Cells** does not aim to compete in the CSS frameworks market. It will evolve in the only interest of our development teams, but we are happy to share and discuss design choices with other developers.

## Installation

You can install and consume **Cells** with [`npm`](https://www.npmjs.com/):

```sh
$ npm i @chialab/cells
$ yarn add @chialab/cells
```

and import it in your stylesheet:

```css
@import '@chialab/cells';
```

or using the unpkg CDN:

```html
<link rel="stylesheet" href="https://unpkg.com/@chialab/cells/lib/index.css" />
```

```css
@import 'https://unpkg.com/@chialab/cells/lib/index.css';
```

---

## License

RNA is released under the [MIT](https://github.com/chialab/rna/blob/main/LICENSE) license.
