var gulp        = require('gulp');
var runSequence = require('run-sequence');
var config      = require('../config');

function buildDev(cb) {
    runSequence(
        'clean',
        'sprite:svg',
        'sprite:png',
        'svgo',
        ['pug','sass'],
        'copy',
        'server',
        cb
    );
}
function build(cb) {
    runSequence(
        'clean',
        'sprite:svg',
        'sprite:png',
        'svgo',
        ['pug','sass'],
        'copy',
        'webpack',
        cb
    );
}

gulp.task('build', function(cb) {
    config.setEnv('production');
    config.logEnv();
    build(cb);
});

gulp.task('build:dev', function(cb) {
    config.setEnv('development');
    config.logEnv();
    buildDev('watch');
});
