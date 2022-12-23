<h1 align="center">
  <img align="center" src="https://user-images.githubusercontent.com/19249620/209399115-8b4b0ccc-4d68-46ca-b1d0-5ea657a65aef.png" alt="gulp" width="120"/>
  <br>
  <br>
  Gulp Js Tips
  <br>
</h1>


<h6 align="center">Gulp is an open source toolkit built on Node.js and npm. It is used for automating and streamlining repetitive tasks in front-end web development.</h6>

<!--
<p align="center">
  <a href="#what-you-need-learn">What You Need</a> •
  <a href="#what-is-gulp">What is Gulp</a> •
  <a href="#why-use-gulp">Why Use Gulp</a> •
  <a href="#Init package and install gulp">Install</a> •
  <a href="#related">Related</a> •
  <a href="#license">License</a>
  <br>
  <br>
</p>
-->

## :dart: What You Need To Learn Gulp

* You Need to Be A Good Front-End Developer
* You Need A Very Good Knowledge in JavaScript
* You Need To Know Information About,Preprocessor + Template Engine 

## :dart: What is Gulp Js

* Toolkit to Automate Repeated Tasks in Your Development Environment.
* Gulp Js Built On Node.js
* Example of Tasks. [ Minify CSS, Compile Sass Or Less, Compress Images, Upload Files ]
* Other Task Runners: [ Grunt.js, Feri ]

## :dart: Why Should I Use Gulp Js?

* More Than 4252 Plugins and Tasks at Date Of This Rebo.
* You Can Create Your Own Defined Tasks.
* Save Your Time and Make You Focus On Code.
* Give You fast Builds Because its Use Power Of NodeJs.
* Has 32.7K Star On Github At Date Of This Rebo Means a Very Large Community Using and Updating It.
* By Using a Task Runner all Your Work Will Be Standard and With One Pattern.

## :checkered_flag: Init package and install gulp ##

```bash
# Check for node, npm, and npx:
$ node --version or node -v
$ npm --version or npm -v
$ npx --version or npx -v

# Creating a package.json file:
$ npm init

# Setup the gulp using command line:

# (globaly)
$ npm install --global gulp-cli  or  npm i gulp -g
# (localy)
$ npm install --save-dev gulp    or  npm i --save-dev gulp

# Verify your gulp versions
$ gulp --version   or gulp -v

# Note : Create folder inside project (name folder)->(dist)

```

## :white_check_mark: Requirements ##
Before starting, gulpfile Js must be created
- create a file named -> (gulpfile.js) in your project root with these contents
### Usage EX

```markdown
var gulp = require('gulp');
  //write the first task
  gulp.task('task name' , function(){});

# Going to the Comand Line:
$ gulp (task name)
```


## :rocket: Main Functions in gulp js task
 * Retrieve file : <b> src </b>('file path/') -> [detrmine files names using obj],file name,*.file exitntion, *.*
 * Apply plugins : <b>pipe</b>('plugin to make somthing')
 * Send files to client : <b>gulp.dest</b>('dist') -> all files from complies for client



## :video_game: Scripts & Plugins
 ➤ `Concatenation Plugin` : concat files in one file using <b> (gulp-concat) </b> plugin<br>
       - link : (https://www.npmjs.com/package/gulp-concat).<br>
       - Install : $ npm install --save-dev gulp-concat or npm i --save-dev gulp-concat.<br>
       - Usage EX:
       
```mark
var gulp = require('gulp');
var concat = require('gulp-concat');
  gulp.task('task name' , function(){
    return gulp.src('files')
    .pipe(concat('file name concat.ext'))
    .pipe(gulp.dest('dist'))
  });
  # Going to the Comand Line:
  $ gulp (task name) 
```

 ➤ `AutoPrefixer for css3 properties` : Prefix CSS with <b> Autoprefixer </b>plugin<br>
       - link : (https://www.npmjs.com/package/gulp-autoprefixer).<br>
       - Install : $ npm install --save-dev gulp-autoprefixer or npm i --save-dev gulp-autoprefixer<br>
       - Usage EX:
       
```mark
var gulp = require('gulp');
var prefixe = require('gulp-autoprefixer');
  gulp.task('css' , function(){
    return gulp.src('project/*.css')
    .pipe(prefixe('last 2 versions'))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('dist'))
  });
  # Going to the Comand Line:
  $ gulp css
```

 ➤ `Sass compiler` : sing <b>(gulp-sass)</b> plugin<br>
       - link : (https://www.npmjs.com/package/gulp-sass).<br>
       - Install : $ npm install sass gulp-sass --save-dev or npm i sass gulp-sass --save-dev<br>
       - Usage EX:
       
```mark
var gulp = require('gulp');
var sass = require('gulp-sass');
  gulp.task('css' , function(){
    return gulp.src('project/css/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(prefixe('last 2 versions'))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('dist/css'))
  });
  # Going to the Comand Line:
  $ gulp css
```

    
