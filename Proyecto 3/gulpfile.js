const {src,dest,watch,series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');


//imagenes
const imagemin = require('gulp-imagemin')

function css(done){

    //ideptificamos el archivo de .scss
    src('src/scss/app.scss')

    

    //compilamos el archivo
    .pipe(sass({outpuyStyle: 'compressed'}))//compressed optimiza la hoja del css

     //pipe del autoprefixer
    .pipe(postcss([autoprefixer()]))
    //guardamos el archivo
    .pipe(dest('build/css'))




    done();
}

function script(done){
    //identificamos el archivo JS
    src('src/js/app.js')
    //guardamos el Archivo JS
    .pipe(dest('build/js/'))



    done();
}

function imagenes(done){
    src('src/img/**/*')
    .pipe(imagemin({optimizationLevel: 3}))
    .pipe(dest('build/img'))



    done();
}
function dev(done){
    watch('src/scss/**/*',css)
    watch('src/js/**/*',script)
    watch('src/img/**/*',imagenes)


    done();
}
exports.css = css;
exports.script = script;
exports.imagenes = imagenes;
exports.dev = dev;

exports.default = series(css,script,imagenes,dev);