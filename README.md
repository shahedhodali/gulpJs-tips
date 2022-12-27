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

 ➤ `Sass compiler` : using <b>(gulp-sass)</b> plugin<br>
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

 ➤ `Pug compiler` : to run a webserver using <b>(static-server)</b> plugin<br>
       - link : (https://www.npmjs.com/package/gulp-pug).<br>
       - Install : $ npm install gulp-pug  or  npm i gulp-pug <br>
       - Usage EX:
       
```mark
var gulp = require('gulp');
var pug = require('gulp-pug');
  gulp.task('html' , function(){
    return gulp.src('project/index.pug')
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest('dist'))
  });
  # Going to the Comand Line:
  $ gulp html
```

 ➤ `local server` : using <b>(gulp-pug)</b> plugin<br>
       - EXample plugins: (gulp-webserver , gulp-connect , gulp-live-server , static-server , gulp-serve)
  The most used and the best plugin from my opinion (gulp-connect) run a webserver (with LiveReload) <br>
       - link : (https://www.npmjs.com/package/static-server).<br>
       - Install : $ npm install static-server  or  npm i static-server <br>
       - Make file in the root project name (server.js)<br>
       - Put the below code in (server.js) file<br>
       - Usage EX:
       
```mark
var StaticServer = require('static-server');
var server = new StaticServer({
    rootPath: '.',            // required, the root of the server file tree
    port: 1337,               // required, the port to listen
    name: 'my-http-server',   // optional, will set "X-Powered-by" HTTP header
    host: '10.0.0.100',       // optional, defaults to any interface
    cors: '*',                // optional, defaults to undefined
    followSymlink: true,      // optional, defaults to a 404 error
    templates: {
      index: 'foo.html',      // optional, defaults to 'index.html'
      notFound: '404.html'    // optional, defaults to undefined
    }
  });
  server.start(function () {
    console.log('Server listening to', server.port);
  });
  # Going to the Comand Line:
  $ node server.js or inside task gulp put the code ( require('./server.js'); )
```

 ➤ `Wacth Function` : swatching globs and running a task when a change occurs. 
                      Tasks are handled uniformly with the rest of the task system.<br>
       - Usage EX:

```mark
gulp.task('watch' , function(){
    require('./server.js');
  #Single file path
     gulp.watch('filepath',['task name'])
  #Multi files
     gulp.watch('filepath/folder name /**/*.ext',['task name']) 
  });
  # Going to the Comand Line:
  $ gulp watch
```

 ➤ `Live reload` : will not automatically listen for changes using <b> (gulp-livereload) </b> plugin <br>
       - link : (https://www.npmjs.com/package/gulp-livereload).<br>
       - Install : $ npm install gulp-livereload or npm i gulp-livereload <br>
       - Apply livereload using exitntion chrome or script in html or pug file (<script src="http://localhost:35729/livereload.js?snipver=1"></script>)
       - Usage EX:

```mark
var gulp = require('gulp');
var livereload = require('gulp-livereload');
  gulp.task('html' , function(){
    return gulp.src('project/index.pug')
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
  });
  gulp.task('watch' , function(){
    require('./server.js');
    livereload.listen(); //adding in watch task before watch applied
     gulp.watch('project/index.pug',['html'])
  });
  # Going to the Comand Line:
  $ gulp watch
```

➤ `Gulp source maps` : All plugins between sourcemaps.init() and sourcemaps.write() need to have support for <b>(gulp-sourcemaps)</b> plugin <br>
       - link : (https://www.npmjs.com/package/gulp-sourcemaps).<br>
       - Install : $ npm install gulp-sourcemaps or npm i gulp-sourcemaps <br>
       - Usage EX:

```mark
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
  //pipe(sourcemaps.init()) -> after gulp.src
  //pipe(sourcemaps.write())-> after tasks and packges before gulp.dest

  gulp.task('html' , function(){
    return gulp.src('project/index.pug')
    .pipe(sourcemaps.init())
    .pipe(pug({pretty: true}))
    .pipe(sourcemaps.write('.')) // '.' apply this file beside the same file source mapping
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
  });
  gulp.task('watch' , function(){
    require('./server.js');
    livereload.listen(); //adding in watch task before watch applied
     gulp.watch('project/index.pug',['html']);
  });
  # Going to the Comand Line:
  $ gulp watch
```

➤ `Gulp uglify` : Minify JavaScript with UglifyJS3 using <b>(gulp-uglify)</b> plugin <br>
       - link : (https://www.npmjs.com/package/gulp-uglify).<br>
       - Install : $ npm install gulp-uglify or npm i gulp-uglify <br>
       - Usage EX:

 ```mark
var gulp = require('gulp');
var uglify = require('gulp-uglify');

 gulp.task('js' , function(){
    return gulp.src('project/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(livereload());
 });
 # call script (<script src="js/main.js"></script>) inside file html
 gulp.task('watch' , function(){
    require('./server.js');
    livereload.listen(); //adding in watch task before watch applied
    gulp.watch('project/index.pug',['html']);
    gulp.watch('project/js/*.js',['js']);
 });
  # Going to the Comand Line:
  $ gulp watch
```

➤ `Gulp notify` : Send messages to Mac Notification Center, Linux notifications (using notify-send) or Windows >= 8 (using native toaster) or Growl as fallback <br>
       - link : (https://www.npmjs.com/package/gulp-notify).<br>
       - Install : $ npm install gulp-notify or npm i gulp-notify <br>
       - Usage EX:

 ```mark
  var gulp = require('gulp');
  var notify = require('gulp-notify');

  gulp.task('html' , function(){
    return gulp.src('project/index.pug')
    .pipe(pug())
    .pipe(gulp.dest('dist'))
    .pipe(notify('Html task is Done'))
    .pipe(livereload());
  });
  # Going to the Comand Line:
  $ gulp watch
```

➤ `Gulp zip` : ZIP compress files <br>
       - link : (https://www.npmjs.com/package/gulp-zip).<br>
       - Install : $ npm install gulp-zip or npm i gulp-zip <br>
       - Usage EX:

 ```mark
  var gulp = require('gulp');
  var notify = require('gulp-notify');
  var zip = require('gulp-zip');

  gulp.task('compress' , function(){
    return gulp.src('dist/**/*.*')
    .pipe(zip('design.zip'))
	  .pipe(gulp.dest('.'))
    .pipe(notify('Files is Compressed'))
  });
  gulp.task('watch' , function(){
    require('./server.js');
    livereload.listen();
    gulp.watch('project/index.pug',['html']);
    gulp.watch('project/js/*.js',['js']);
    gulp.watch('dist/**/*.*',['compress']);
   });
  # Going to the Comand Line:
  $ gulp watch
```

➤ `Vinyl ftp` : Supports parallel transfers, conditional transfers, buffered or streamed files, and more.
                 Often performs better than your favorite desktop FTP client<br>
       - link : (https://www.npmjs.com/package/vinyl-ftp).<br>
       - Install : $ npm install vinyl-ftp or  npm i vinyl-ftp <br>
       - Usage EX:

 ```mark
  var gulp = require('gulp');
  var ftp = require( 'vinyl-ftp' );

//Uplode design with FTP
 gulp.task( 'deploy', function () {
 
    var conn = ftp.create({
        host:     'test.net',
        user:     'me',
        password: 'mypass',
        parallel: 10
    });
 
    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance
 
    return gulp.src( ['dist/**/*.*'], { base: '.', buffer: false } )
        .pipe( conn.newer( '/public_html' ) ) // only upload newer files
        .pipe( conn.dest( '/public_html' ) )
        .pipe(livereload());
});
gulp.task('watch' , function(){
    require('./server.js');
    livereload.listen();
    gulp.watch('project/index.pug',['html']);
    gulp.watch('project/js/*.js',['js']);
    gulp.watch('dist/**/*.*',['compress']);
    gulp.watch('dist/**/*.*',['deploy']);
 });
  # Going to the Comand Line:
  $ gulp watch
```

➤ `Exclude Files`: If all files are called and without one file, put [! name file ] in src function<br>
       - Usage EX:

 ```mark
  $ gulp.src(['project/*.js','!project/two.js']);
```

➤ `Setup Default Task`
       - Usage EX:

 ```mark
 //Default Task
 $ gulp.task('default',['watch']);
 # Going to the Comand Line:
 $ gulp watch
```

➤ `Some Useful Plugins`<br><br>
   1- `Gulp Babel`: Use next generation JavaScript, today, with Babel<br>
   link : (https://www.npmjs.com/package/gulp-babel)

   2- `Gulp Replace`: A string replace plugin for gulp<br>
   link : (https://www.npmjs.com/package/gulp-replace)

   3- `Gulp Load Plugins`: Loads gulp plugins from package dependencies and attaches them to an object of your choice.<br>
   link : (https://www.npmjs.com/package/gulp-load-plugins)

   4- `Gulp Rename`: is a gulp plugin to rename files easily.<br>
   link : (https://www.npmjs.com/package/gulp-rename)

   5- `Gulp Plumber`: Prevent pipe breaking caused by errors from gulp plugins<br>
   link : (https://www.npmjs.com/package/gulp-plumber)

 
➤ `Install specific Version`:<br>
    - Usage EX:

```mark
 $ npm i gulp(v)
```
