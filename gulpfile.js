const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin');

function comprimeImagens(){
    return gulp.src('./images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}

function compilaSass(){
    return gulp.src('./source/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build'));
}

function comprimeJAvaScript(){
    return gulp.src('./source/*js')
    .pipe(uglify())
    .pipe(gulp.dest('./build'));
}


exports.sass = compilaSass;
exports.javascript = comprimeJAvaScript;
exports.images = comprimeImagens;