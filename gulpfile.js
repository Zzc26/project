const {src,dest,watch} = require('gulp')

const sass = require('gulp-sass');

const cssnano = require("gulp-cssnano")

const rename = require('gulp-rename')

const uglify = require('gulp-uglify')

const concat = require('gulp-concat')

const htmlmin = require('gulp-htmlmin')

const imagemin = require('gulp-imagemin')

function copyIndex(){
    return src('./src/index.html')
            .pipe(dest('./dist'))
}

function css(){
    return src('./src/sass/*.scss')
            .pipe(sass({outputStyle: 'expanded'}))
            // .pipe(cssnano())
            .pipe(rename({suffix : '.min'}))
            .pipe(dest('./dist/css'))
}

function js(){
    return src('./src/js/*.js')
            // .pipe(concat('main.min.js'))
            // .pipe(uglify())
            .pipe(dest('./dist/js'))
}

function html(){
    return src('./src/pages/*.html')
            .pipe(htmlmin())
            .pipe(dest('./dist/pages'))
           
}

function img(){
    return src('./src/img/*')
            // .pipe(imagemin()) 
            .pipe(dest('./dist/img'))
}

function fnWatch(){
    watch('./src/index.html',copyIndex)
    watch('./src/sass/*.scss',css)
    watch('./src/js/*.js',js)
    watch('.src/pages/*.html',html)
}


exports.index = copyIndex;
exports.css = css;
exports.js = js;
exports.html = html;
exports.img = img;
exports.default = fnWatch