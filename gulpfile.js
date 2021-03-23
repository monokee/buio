const {task, src, dest, series, parallel} = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

exports.build = series(

  function buildCSS() {
    return src('scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer('last 2 versions'))
      .pipe(rename('buio.css'))
      .pipe(dest('css'));
  },

  function minifyCSS() {
    return src('css/buio.css')
      .pipe(cleanCSS({
        level: {
          1: {
            specialComments: 'none',
          }
        }
      }))
      .pipe(rename('buio.min.css'))
      .pipe(dest('css'));
  }

);