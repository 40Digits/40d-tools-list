# Markup

All packages can be installed in a project by running

```bash
npm i -D [package_name]
```

__Legend__

- `>` - CLI Tool
- `{}` - Programmatic Tool (Implemented in a JS file)

## Packages

- [ejs2html](https://www.npmjs.com/package/ejs2html) `>` - A simple CLI for making HTML files from EJS templates.
- [extract-media-queries](https://github.com/chadwatson/extract-media-queries) `>` - Groups css rules by media queries and extracts them to different files.
- [html](https://github.com/maxogden/commonjs-html-prettyprinter) `>` - HTML pretty printer CLI utility (based on jsbeautifier)


## Recipes

*Note:* Recipes use escaped double quotes (`\"`) so that you can easily copy and paste a script into your `package.json` file to use as an NPM script. If you would like to run one of the recipes directly from the command line you may need to remove the escape character (`\`) first.

===

```bash
ejs2html _src/static/config.json .
```

- Delegates configuration to `config.json` inside of the source dir. [Config options](https://github.com/40Digits/ejs2html#config)
- Sets the base output path to the cwd

**Requires:**

- ejs2html: ^1.2.0

===

```bash
extract-mq assets/css/style.css | ejs2html _src/static/config.json -r media_queries | html > index.html
```

- For emails!
- Strips media queries from a css file and passes the string as a variable to `ejs2html` to be used in an EJS template
- Passes compiled HTML to `html` for prettification
- Finally writes to a `.html` file

**Requires:**

- ejs2html: ^1.2.0
- extract-media-queries: ^0.1.0
- html: ^0.0.10