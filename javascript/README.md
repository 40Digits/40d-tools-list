# JavaScript

All packages can be installed in a project by running

```bash
npm i -D [package_name]
```

__Legend__

- `>` - CLI Tool
- `{}` - Programmatic Tool (Implemented in a JS file)

## Packages

- [babel-loader](https://github.com/babel/babel-loader) `>``{}` - Webpack plugin for Babel.
- [babel-preset-es2015](https://github.com/babel/babel/tree/master/packages/babel-preset-es2015) `>``{}` - Babel preset for all es2015 plugins.
- [babel-preset-react](https://github.com/babel/babel/tree/master/packages/babel-preset-react) `>``{}` - Babel preset for all React plugins.
- [babelify](https://github.com/babel/babelify) `>``{}` - Babel transform for Browserify. Needs to be used in tandem with Babel presets & plugins.
- [browserify](https://github.com/substack/node-browserify) `>``{}` - Bundle CommonJS modules.
- [browserify-ejs](https://github.com/unfold/browserify-ejs) `>``{}` - Browserify transform plugin for EJS templates
- [browserify-shim](https://github.com/thlorenz/browserify-shim) `>``{}` - Makes CommonJS incompatible files browserifyable.
- [envify](https://github.com/hughsk/envify) `>``{}` - Selectively replace Node-style environment variables with plain strings. Available as a standalone CLI tool and a Browserify v2 transform.
- [ejs-compiled-loader](https://github.com/bazilio91/ejs-compiled-loader) `>``{}` - EJS loader for webpack. Uses ejs function to compile templates.
- [errorify](https://github.com/zertosh/errorify) `>``{}` - Browserify plugin that writes the error message of a failed build to the output file, rendering it in the browser.
- [minifyify](https://github.com/ben-ng/minifyify) `>``{}` - Minify your browserify bundle without losing the sourcemap.
- [reactify](https://github.com/andreypopp/reactify) `>``{}` - Browserify transform for JSX (superset of JavaScript used in React library by Facebook)
- [webpack](https://github.com/webpack/webpack) `>``{}` - Bundle JavaScript files for usage in a browser. Also capable of transforming, bundling, or packaging just about any resource or asset.

## Recipes

*Note:* Recipes use escaped double quotes (`\"`) so that you can easily copy and paste a script into your `package.json` file to use as an NPM script. If you would like to run one of the recipes directly from the command line you may need to remove the escape character (`\`) first.

===

```bash
browserify -t [ babelify --presets [ es2015 ] ] -p [ minifyify --map bundle.js.map --output assets/js/bundle.js.map ] -d _src/js/main.js > assets/js/main.js
```

- Transforms ES2015 to browser-friendly js
- External source map and compression with minifyify

**Requires:**

- babel-preset-es2015: ^6.6.0
- babelify: ^7.2.0
- browserify: ^13.0.0
- minifyify: ^7.3.3

===

```bash
browserify -t [ babelify --presets [ es2015 ] ] -t browserify-shim -t browserify-ejs -p [ minifyify --map bundle.js.map --output assets/js/bundle.js.map ] -d _src/js/main.js -o assets/js/main.js
```

- Transforms ES2015 to browser-friendly js
- External source map and compression with minifyify
- Transform EJS templates
- Browserify-shim to shim in globals and work with non-CommonJS modules

**Requires:**

- babel-preset-es2015: ^6.6.0
- babelify: ^7.2.0
- browserify: ^13.0.0
- browserify-shim: ^3.8.12
- browserify-ejs: ^0.0.2
- minifyify: ^7.3.3

===

```bash
webpack -d --optimize-minimize _src/js/main.js assets/js/main.js
```

- Bundle a single entry file to a single bundle file
- External source map (`-d`)
- Minify (`--optimize-minimize`)

**Requires:**

- babel-preset-es2015: ^6.6.0
- babel-loader: ^6.2.4

===

```bash
webpack -d --optimize-minimize --module-bind \"js=babel-loader?presets[]=es2015\" _src/js/main.js assets/js/main.js
```

- Bundle a single entry file to a single bundle file
- External source map (`-d`)
- Minify (`--optimize-minimize`)
- Transform ES2015 into browser-ready js (`--module-bind \"js=babel-loader?presets[]=es2015\"`)

**Requires:**

- babel-preset-es2015: ^6.6.0
- babel-loader: ^6.2.4
- webpack: ^1.12.14

===

```bash
webpack -d --optimize-minimize --module-bind \"js=babel-loader?presets[]=es2015\" --module-bind \"ejs=ejs-compiled-loader\" _src/js/main.js assets/js/main.js
```

- Bundle a single entry file to a single bundle file
- External source map (`-d`)
- Minify (`--optimize-minimize`)
- Transform ES2015 into browser-ready js (`--module-bind \"js=babel-loader?presets[]=es2015\"`)
- EJS loader to use EJS templates (`--module-bind \"ejs=ejs-compiled-loader\"`)

**Requires:**

- babel-preset-es2015: ^6.6.0
- babel-loader: ^6.2.4
- ejs-compiled-loader: ^2.1.1
- webpack: ^1.12.14

===

```bash
webpack -d --optimize-minimize --module-bind \"js=babel-loader?presets[]=es2015&presets[]=react\" _src/js/main.js assets/js/main.js
```

- Bundle a single entry file to a single bundle file
- External source map (`-d`)
- Minify (`--optimize-minimize`)
- Transform ES2015 into browser-ready js (the `presets[]=es2015` part of `--module-bind \"js=babel-loader?presets[]=es2015&presets[]=react\"`)
- Transform JSX/React into browser-ready js (the `&presets[]=react` part of `--module-bind \"js=babel-loader?presets[]=es2015&presets[]=react\"`)

**Requires:**

- babel-preset-es2015: ^6.6.0
- babel-preset-react: ^6.5.0
- babel-loader: ^6.2.4
- webpack: ^1.12.14