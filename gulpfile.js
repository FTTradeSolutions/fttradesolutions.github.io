import { src, dest, watch, series } from 'gulp'
import gulpSass from 'gulp-sass'
import * as dartSass from 'sass' // Cambiado a import * as sass from 'sass'
import rename from 'gulp-rename'

const sass = gulpSass(dartSass)

// Compilar JS
export function js() {
  return src('js/**/*.js', { allowEmpty: true }).pipe(dest('build/js'))
}

// Compilar SCSS ignorando parciales (_archivo.scss)
export function css() {
  return src(['scss/**/*.scss', '!scss/**/_*.scss'], {
    sourcemaps: true,
    allowEmpty: true
  })
    .pipe(sass().on('error', sass.logError))
    .pipe(rename({ dirname: '' }))
    .pipe(dest('build/css', { sourcemaps: true }))
}

// Watch para desarrollo
export function dev() {
  watch('scss/**/*.scss', css)
  watch('src/js/**/*.js', js)
}

// Tarea por defecto
export default series(js, css, dev)
