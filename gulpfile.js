var gulp = require('gulp'),
  livereload = require('gulp-livereload');
var sass = require('gulp-sass');

var baseUrl = '/Users/ywj/myReact/';
gulp.task('sass', function() {
    gulp.src(baseUrl+'src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(baseUrl+'/dist/css/'))
      .pipe(livereload());

    console.log("compiled sass to css");
});
// 默认任务
gulp.task('default', function(){
    gulp.run('sass');

    var server = livereload();

    // 监听文件变化
    gulp.watch(baseUrl+'/src/sass/*.scss', function(file){
        gulp.run('sass');
    });
});
