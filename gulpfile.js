var gulp = require('gulp'), 
    concat = require('gulp-concat'),
    prefixe = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug'),
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    notify = require('gulp-notify'),
    zip = require('gulp-zip'),
    ftp = require( 'vinyl-ftp' );

//write the first task
gulp.task('fisrtTask' , function(){
   console.log("Grates for your first task");
   return gulp.src('project/*.*')
   .pipe(gulp.dest('dist'))
});

//Html task
gulp.task('html' , function(){
    return gulp.src('project/index.pug')
    .pipe(pug())
    .pipe(gulp.dest('dist'))
    .pipe(notify("Html task is Done"))
    .pipe(livereload());
  });

//Compress task
gulp.task('compress' , function(){
    return gulp.src('dist/**/*.*')
    .pipe(zip('design.zip'))
	.pipe(gulp.dest('.'))
    .pipe(notify('Files is Compressed'))
  });

//Uplode design with FTP
  gulp.task( 'deploy', function () {
 
    var conn = ftp.create({
        host:     'test.net',
        user:     'me',
        password: 'mypass',
        parallel: 10
    });
 
    return gulp.src( ['dist/**/*.*'], { base: '.', buffer: false } )
        .pipe( conn.newer( '/public_html' ) ) // only upload newer files
        .pipe( conn.dest( '/public_html' ) )
        .pipe(livereload());
 
});

//Css task
gulp.task('css' , function(){
    return gulp.src('project/css/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(prefixe('last 2 versions'))
    .pipe(concat('style.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload());
 });

//Js task
gulp.task('scripts' , function(){
    return gulp.src(['project/*.js','!project/two.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
 });

 //Js task
 gulp.task('js' , function(){
    return gulp.src('project/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(livereload());
  });

//Watch task
gulp.task('watch' , function(){
    require('./server.js');
    livereload.listen();
    gulp.watch('project/index.pug',['html']);
    gulp.watch('project/js/*.js',['js']);
    gulp.watch('dist/**/*.*',['compress']);
    gulp.watch('dist/**/*.*',['deploy']);
 });

 //Default Task
 gulp.task('default',['watch']);