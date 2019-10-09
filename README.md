# neuroml-ts

A javascript library with typescript interfaces for interacting with the [NeuroML](https://www.neuroml.org/) computational neuroscience model description language.

## Steps

1. Generate bindings using [cxsd](https://github.com/charto/cxsd)
2. Replace generated CommonJS `require` with ES6 `import` using [replace-require-with-import](https://www.npmjs.com/package/replace-require-with-import)
3. Format code with [prettier](https://prettier.io/)

These are all handled by npm scripts.
The current version of the NeuroML spec being v2beta4, do `npm run v2beta4`.
