# administradores de tareas

los administradores de tareas o tambien conocidos como task runners. se hace referencia a un programa encargado de automatizar procesos informáticos que, sin su uso, deberían realizarse manualmente, considerándose por este motivo de gran valor en las tareas repetitivas. Al optimizar el flujo de trabajo, se tarda menos en realizar estas tareas y en consecuencia se dispone de más tiempo para dedicárselo a otras. Los dos aspectos básicos que diferencian a las diferentes soluciones son, por un lado, el modo en que se programan y, por otro, la forma de trabajar internamente. Al mismo tiempo, el usuario va a tener siempre el control sobre las fases del trabajo que se quieren automatizar y las que no.

Estas herramientas se consideran de gran utilidad sobre todo en el desarrollo web, pues los programadores de frontend tienen que enfrentarse a diario a procesos simples pero a su vez laboriosos y repetitivos: compilar un preprocesador de hojas de estilo (Less, Sass, SCSS) en un CSS terminado o ejecutar la minificación de códigos JavaScript. Del mismo modo, probar la funcionalidad de módulos individuales exige normalmente más tiempo del que se dispone, motivo que explica por qué son imprescindibles estas soluciones y cómo contribuyen a mejorar el ritmo de trabajo. Entre ellas, los task runner de JavaScript, basados en Node.js, gozan de cierta popularidad. Las opciones de automatización de cada programa se pueden ampliar con un gran número de plugins.

## gulp

Gulp es una herramienta, en forma de script en NodeJS, que te ayuda a automatizar tareas comunes en el desarrollo de una aplicación, como pueden ser: mover archivos de una carpeta a otra, eliminarlos, minificar código, sincronizar el navegador cuando modificas tu código, validar sintáxis y un largo etcétera. En este post te quiero contar cómo empezar a utilizarlo con unos sencillos ejemplos.

``` js
//modules
const gulp = require('gulp')
const pug = require('gulp-pug')
const ts = require('gulp-typescript');
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create();

const tsProject = ts.createProject('tsconfig.json');


//taks
gulp.task('pug', () => {
    return gulp.src('./dev/*.pug')
      .pipe(pug({
        pretty: false
      }))
      .pipe(gulp.dest('./public/'))
  })

  gulp.task('sass', () => {
    return gulp.src("./dev/scss/*.scss")
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest("./public/css/"))
        .pipe(browserSync.stream());
})

gulp.task('scripts', () => {
    return gulp.src('./dev/scripts/*.ts')
        .pipe(tsProject())
        .pipe(gulp.dest('./public/scripts/'));
});
  
  gulp.task('default', () => {
    browserSync.init({
      server: './public'
    })
  
    //PUG
    gulp.watch('./dev/*.pug', gulp.series('pug')).on('change', browserSync.reload)
    //SASS
    gulp.watch("./dev/scss/*.scss", gulp.series('sass')).on('change', browserSync.reload)
    
        gulp.watch('./dev/scripts/*.ts', gulp.series('scripts')).on('change', browserSync.reload)
  })
```

## grunt

El ecosistema Grunt es enorme y crece todos los días. Con literalmente cientos de complementos para elegir, puede usar Grunt para automatizar casi cualquier cosa con un mínimo de esfuerzo. Si alguien aún no ha creado lo que necesita, crear y publicar su propio complemento Grunt en npm es muy sencillo.

``` js
module.exports = (grunt) => {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};
```