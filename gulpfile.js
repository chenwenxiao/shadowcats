// 引入 gulp
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha  = require('gulp-mocha');

// 引入组件
var bower = require('gulp-bower');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// gulp-bower-task
gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('./public/libs/'))
});

// 编译Sass
gulp.task('sass', function() {
    gulp.src('./public/stylesheets/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/stylesheets'));
});

// 合并，压缩文件
gulp.task('scripts', function() {
    gulp.src('./public/javascripts/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

// 检查脚本
gulp.task('lint', function() {
  return gulp
    .src(['gulpfile.js', 'public/javascripts/*.js', 'test/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('test', function() {
  return gulp
    .src('test/*.js')
    .pipe(mocha());
});

// 默认任务
gulp.task('default', function(){
    gulp.run('lint', 'sass', 'scripts');

    // 监听文件变化
    gulp.watch(['public/javascripts/*.js', 'test/*.js'], function(){
        gulp.run('lint', 'sass', 'test');
    });
});
