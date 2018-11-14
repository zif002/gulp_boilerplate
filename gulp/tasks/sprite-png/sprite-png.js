var gulp = require('gulp');
var notify = require('gulp-notify');
var spritesmith = require('gulp.spritesmith');
var config = require('../../config');
var path = require('path');


gulp.task('sprite:png', function() {
    var spriteData = gulp.src(config.src.icons + '/*.png')
    .pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: '_sprite-png.sass',
        imgPath: '../img/icons.png',
        cssFormat: 'sass',
        padding: 4,
        // algorithm: 'top-down',
        cssTemplate: path.join(__dirname, '/sprite.template.mustache')
    }));
    spriteData.img
        .pipe(gulp.dest(config.dest.img));
    spriteData.css
        .pipe(gulp.dest(config.src.sass+'/generated/'))
        // .pipe(console.log("New sprite created!"));
});

gulp.task('sprite:png:watch', function() {
    gulp.watch(config.src.icons + '/*.png', ['sprite:png']);
});