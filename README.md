# Astro + pnpm + prism Problem

For some reason, `@astrojs/prism`. I have a hunch that's related to `prismjs` vs how `pnpm` resolves the dependencies. Anyhow, this repository contains 3 projects:

1. `astro-npm` -> created via `npm create astro@latest` with: TS + empty + `@astrojs/prism` + `npm`
2. `astro-pnpm` -> created via `pnpm create astro@latest` with: TS + empty + `@astrojs/prism` + `pnpm`
3. `vanilla-prism` -> created via `pnpm create vite vanilla-prism --template vanilla` with: vanilla JS + vanilla `prismjs` handling + `pnpm`

Projects 1 and 3 works just fine.

Project 2 throws the following error:

```
const components = require('../components.js');
^
const getLoader = require('../dependencies');


/**
 * The set of all languages which have been loaded using the below function.
 *
 * @type {Set<string>}
 */
const loadedLanguages = new Set();
```

## Getting started

Check the README for each project.
