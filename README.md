# LitElement+Redux TypeScript Starter

This project is a simple app template using LitElement and Redux written
in Typescript. It makes heavy use of Redux Tool Kit to do a lot of the wiring vs using redux primatives directly.
Routing is provided via [lit-redux-router](https://github.com/fernandopasik/lit-redux-router)

Inspiration for this project comes from [lit-element-starter-ts](https://github.com/PolymerLabs/lit-element-starter-ts) and the [pwa-starter-kit-hn](https://github.com/Polymer/pwa-starter-kit-hn) repositories.

In it's current state, the production build will NOT work with code splitting.
EG: Code that does dynamic improts.

## Setup

Install dependencies:

```bash
npm i
```

## Build

To build for dev

```bash
npm run build
```

To watch files and rebuild when the files are modified, run the following
command in a separate shell:

```bash
npm run build:watch
```

Both the TypeScript compiler and lit-analyzer are configured to be very strict.
You may want to change `tsconfig.json` to make them less strict.

## Testing

This sample uses Karma, Chai, Mocha, and the open-wc test helpers for testing.
See the [open-wc testing documentation](https://open-wc.org/testing/testing.html)
for more information.

Tests can be run with the `test` script:

```bash
npm test
```

## Dev Server

This sample uses open-wc's [es-dev-server](https://github.com/open-wc/open-wc/tree/master/packages/es-dev-server)
for previewing the project without additional build steps. ES dev server handles
resolving Node-style "bare" import specifiers, which aren't supported in
browsers. It also automatically transpiles JavaScript and adds polyfills to
support older browsers.

To run the dev server and open the project in a new browser tab:

```bash
npm run serve
```

There is a development HTML file located at `/dev/index.html` that you can view
at http://localhost:8000/dev/index.html.

## Prod Site

To build the site, run:

```bash
npm run prod
```

To serve the site locally, run:

```bash
npm run prod:serve
```

To watch the site files, and re-build automatically, run:

```bash
npm run prod:watch
```

The site will usually be served at http://localhost:8000.
