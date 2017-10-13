import cleanCss from 'gulp-clean-css';
import gulp from 'gulp';
import replace from 'gulp-replace';

const builtIndexPath = 'build/web/index.html';
const normalizeCssPath = 'node_modules/normalize.css/normalize.css';

/**
 * Using the `yarn run build` command, this function replaces local and remote resources
 * with the relative paths on the deployed site (https://anthony.codes).
 */
export function replaceIndexResourceTags() {
  return gulp.src(builtIndexPath, { base: '.' })
    .pipe(replace('http://localhost:5000/normalize.css/', ''))
    .pipe(replace('http://localhost:5000/firebase/', '/__/firebase/4.5.1/'))
    .pipe(replace('https://anthony.codes/__/', '/__/'))
    .pipe(gulp.dest('.'));
}

/**
 * Using the `yarn run build` command, this function minifies the `normalize.css` package
 * and copies it to the `build/web` directory in advance of deployment.
 */
export function compressCss() {
  return gulp.src(normalizeCssPath)
    .pipe(cleanCss())
    .pipe(gulp.dest('build/web'));
}