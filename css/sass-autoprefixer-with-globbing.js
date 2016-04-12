'use strict';

const fs = require('fs');
const path = require('path');
const sass = require('node-sass');
const autoprefixer = require('autoprefixer');
const postcss = require('postcss');
const glob = require('glob');

const src = path.resolve(__dirname, './*.scss');
const destDir = process.argv[2] || process.cwd();

glob(src, (err, files) => {
  if (err) {
    return console.log(err);
  }

  files.forEach(file => {
    const dest = path.resolve(destDir, `${path.basename(file, '.scss')}.css`);

    sass.render({
      file: file,
      includePath: __dirname
    }, (err, result) => {
      if (err) {
        return console.log(err);
      }

      postcss([autoprefixer]).process(result.css).then(result => {
        fs.writeFile(dest, result.css, err => {
          if (err) {
            return console.log(err);
          }

          const srcRelative = path.relative(process.cwd(), file);
          const destRelative = path.relative(process.cwd(), dest);

          console.log(`Sass compiled! ${srcRelative} => ${destRelative}`);
        })
      });
    });
  });
});
