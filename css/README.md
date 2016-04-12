# CSS

All packages can be installed in a project by running

```bash
npm i -D [package_name]
```

__Legend__

- `>` - CLI Tool
- `{}` - Programmatic Tool (Implemented in a JS file)

## Packages

- [autoprefixer](https://github.com/postcss/autoprefixer) `>``{}` - PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use.
- [cssnano](https://github.com/ben-eb/cssnano) `>``{}` - PostCSS plugin to minify css.
- [node-sass](https://github.com/sass/node-sass) `>``{}` - Natively compile .scss files to css.
- [postcss](https://github.com/postcss/postcss) `>``{}` - Transforming styles with JS plugins. Used to lint CSS, support variables and mixins, transpile future CSS syntax, inline images, etc.
- [postcss-cli](https://www.npmjs.com/package/postcss-cli) `>` - CLI for PostCSS.
- [postcss-cssnext](https://github.com/MoOx/postcss-cssnext) `>``{}` - PostCSS plugin to use tomorrow's CSS syntax, today.
- [postcss-import](https://github.com/postcss/postcss-import) `>``{}` - PostCSS plugin to transform @import rules by inlining content.
- [precss](https://github.com/jonathantneal/precss) `>``{}` - PostCSS plugin for writing Sass-like CSS syntax.

## Recipes

*Note:* Recipes use escaped double quotes (`\"`) so that you can easily copy and paste a script into your `package.json` file to use as an NPM script. If you would like to run one of the recipes directly from the command line you may need to remove the escape character (`\`) first.

===

```bash
postcss --map -u postcss-import -u postcss-cssnext -u cssnano --no-cssnano.autoprefixer _src/css/index.css -o assets/css/style.css
```

- Compile CSS-Next code to browser-ready css
- Ability to `@import` files from other files
- Minified
- Inline source maps
- Disables autoprefixer inside of cssnano because cssnext already uses it

**Requires:**

- autoprefixer: ^6.3.3
- postcss-cli: ^2.5.1
- postcss-import: ^8.0.2
- postcss-cssnext: ^2.4.0
- cssnano: ^3.5.2

===

```bash
node-sass --source-map true --source-map-embed --output-style compressed --include-path _src/sass _src/sass/style.scss | postcss --use autoprefixer > assets/css/style.css
```

- Compile a single `.scss` entry file to a single `.css` file
- Inline source maps
- Minified
- Autoprefixed
- Ability to `@import` other `.scss` files that are within `_src/sass` (via `--include-path`) from the entry file (`style.scss`)

**Requires:**

- node-sass: ^3.4.2
- autoprefixer: ^6.3.3
- postcss-cli: ^2.5.1

===

```bash
node _src/sass/build.js assets/css
```

- Utilizes globbing to create a compiled `.css` file for each `.scss` file in the root of the `_src/sass` directory
- Autoprefixer utilized
- `_src/sass/build.js` references [this file](./sass-autoprefixer-with-globbing.js)

**Requires:**

- node: >=4.0
- node-sass: ^3.4.2
- autoprefixer: ^6.3.3
- glob: ^7.0.3
- postcss: ^5.0.19