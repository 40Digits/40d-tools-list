# Helpers

All packages can be installed in a project by running

```bash
npm i -D [package_name]
```

__Legend__

- `>` - CLI Tool
- `{}` - Programmatic Tool (Implemented in a JS file)

## Packages

- [browser-sync](https://github.com/Browsersync/browser-sync) `>``{}` - Keep multiple browsers & devices in sync when building websites.
- [chokidar-cli](https://github.com/kimmobrunfeldt/chokidar-cli) `>` - File system watcher that passes event names and filepath to given commands.
- [opener](https://github.com/domenic/opener) `>``{}` - Opens stuff, like webpages and files and executables, cross-platform.
- [parallelshell](https://github.com/keithamus/parallelshell) `>` - Runs shell commands in parallel. Cross-platform `&`.

## Recipes

*Note:* Recipes use escaped double quotes (`\"`) so that you can easily copy and paste a script into your `package.json` file to use as an NPM script. If you would like to run one of the recipes directly from the command line you may need to remove the escape character (`\`) first.

===

```bash
browser-sync start --files=\"assets/**/*, index.html\" --server --no-notify
```

- Browser-sync server which loads html files
- No notification by browser-sync when the localhost in opend in the browser

**Requires:**

- browser-sync: ^2.11.0

===

```bash
browser-sync start --files=\"assets/**/*, **/*.php, !node_modules/\" --proxy l.my-site --no-notify
```

- Use Browser-sync to proxy an existing vhost
- Useful for non-html projects
- **Be sure to change `l.my-site` to the vhost url that you want to proxy**

**Requires:**

- browser-sync: ^2.11.0

===

```bash
chokidar \"_src/js/**/*.js\" -c \"npm run build:js\"
```

- Watch some files
- Run a command when a matched file changes

**Requires:**

- chokidar-cli: ^1.2.0

===

```bash
opener https://mysite.dev01.40digits.net
```

- Opens the dev url for the project in your browser

**Requires:**

- opener: ^1.4.1

===

```bash
parallelshell \"npm run watch:css\" \"npm run watch:js\"
```

- Run some commands in parallel

**Requires:**

- parallelshell: ^2.0.0