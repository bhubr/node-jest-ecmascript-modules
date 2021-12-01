# Jest setup with ESM

Simple demo of Jest using EcmaScript Modules.

## Use it

`npm install` the dependencies, then run tests using `npm test`.

## Info

* To run the code with Node, `"type": "module"` must be added to `package.json`.
* Jest must be run with `--experimental-vm-modules` flag. A good way to do it is to set the `NODE_OPTIONS` environment variable, containing this flag, upon invoking Jest.

In this example, we set the `NODE_OPTIONS` variable in a reliable, cross-platform way, using [cross-env](https://www.npmjs.com/package/cross-env) (Windows doesn't support the `VAR=value node index` syntax).

