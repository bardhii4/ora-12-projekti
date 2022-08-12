const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileSass(done) {
    gulp.src('./scsss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
    done();
}

exports.sass = gulp.parallel(compileSass);
exports.default = gulp.parallel(compileSass);