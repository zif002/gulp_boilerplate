const gulp = require('gulp');
const webpack = require('webpack-stream');
const webpackConfig = require('../../webpack.config');
const config   = require('../config');
const named = require('vinyl-named');
const uglify = require('gulp-uglify');

gulp.task('webpack', function() {
    return gulp.src(config.src.js)
        .pipe(named())
        .pipe(webpack(webpackConfig))
        // .pipe(!config.production ? '' : uglify())
        .pipe(gulp.dest(config.dest.js));
});

