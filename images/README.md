# Images

All packages can be installed in a project by running

```bash
npm i -D [package_name]
```

__Legend__

- `>` - CLI Tool
- `{}` - Programmatic Tool (Implemented in a JS file)

## Packages

- [imagemin-cli](https://github.com/imagemin/imagemin-cli) `>` - Minify images
- [sprity-cli](https://github.com/sprity/sprity-cli) `>` - CLI utitlity for Sprity, an image sprite generator.
- [svg-sprite](https://github.com/jkphl/svg-sprite) `>``{}` - A low-level Node.js module that takes a bunch of SVG files, optimizes them and bakes them into SVG sprites of several types along with suitable stylesheet resources (e.g. CSS, Sass, LESS, Stylus, etc.)
- [svgo](https://github.com/svg/svgo) `>``{}` - Nodejs-based tool for optimizing SVG vector graphics files.

## Recipes

*Note:* Recipes use escaped double quotes (`\"`) so that you can easily copy and paste a script into your `package.json` file to use as an NPM script. If you would like to run one of the recipes directly from the command line you may need to remove the escape character (`\`) first.

===

```bash
imagemin -p -o 4 _src/images assets/images
```

- Recursively optimize all images in `_src/images` and write them to `assets/images`
- Use progressive conversion instead of lossless
- Optimize to level 4 (0 - 7 scale)

**Requires:**

- imagemin-cli: ^2.1.0

===

```bash
sprity create \"assets/images/sprites\" \"_src/sprites/images/**/*.png\"
```

- Create a single sprite from all `.png`s in a source folder

**Requires:**

- sprity-cli: ^1.0.1

===

```bash
sprity create \"assets/images/sprites\" \"_src/sprites/images/**/*.png\" --split
```

- Create a sprite for each directory inside of the source folder (`--split`)

**Requires:**

- sprity-cli: ^1.0.1

===

```bash
sprity create \"assets/images/sprites\" \"_src/sprites/images/**/*.png\" --css-path ../images/sprites --split --prefix sprite --dimensions 1:72 -d 2:192 --margin 5 --template _src/sprites/templates/scss.hbs --style ../../../_src/sass/util/_sprites.scss
```

- Create multiple PNG sprites
- Create a `.scss` helper file (`--style`) from a Handlebars template file (`--template`)
- 5 pixel margin around each image in the sprite
- Creates multiple files for regular and high ppi screens
- Uses the `--split` option to create a sprite for each directory inside of the source directory
- Ensures that the paths to the sprites which are written to the `.scss` file are relative to the eventual output stylesheet (`--css-path`)
- Prefixes the name of the output files with `sprite`
- _Note:_ All filepaths are relative to the output path (`assets/images/sprites/`), except `template` which is relative to the current working directory

===

```bash
svg-sprite --dest assets/images/sprites --symbol --symbol-dest \"symbols.svg\" --symbol-sprite . --symbol-inline _src/sprites/svg/**/*.svg
```

- Create an SVG sprite file where each SVG is a `symbol` which can be used inline in markup [Icon System with SVG Sprites](https://css-tricks.com/svg-sprites-use-better-icon-fonts/#article-header-id-6)

**Requires:**

- svg-sprite: ^1.2.19

===

```bash
svgo -f _src/images -o assets/images
```

- Optimize all `.svg`s in `_src/images` and drop them in `assets/images`

**Requires:**

- svgo: ^0.6.4