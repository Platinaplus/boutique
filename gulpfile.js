const { src, dest, watch, parallel, series } = require("gulp");
const scss = require("gulp-sass");
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");
const uglify = require("gulp-uglify");
const browserSync = require("browser-sync").create();
const imagemin = require("gulp-imagemin");
const nunjucksRender = require("gulp-nunjucks-render");
const del = require("del");
// const fileinclude = require('gulp-file-include');
const rename = require('gulp-rename');

function browsersync() {
  browserSync.init({
    server: {
      baseDir: "app/",
    },
    notify: false,
  });
}
function nunjucks(){
  return src('app/*.njk')
  .pipe(nunjucksRender())
  .pipe(dest("app"))
  .pipe(browserSync.stream());
}

// function include() {
//   return src(['app/**/*.shtml', '!app/html/include/*.*'])
//   .pipe(fileinclude({
//     prefix:'@@',
//     basepath: '@file'
//   }))
//   .pipe(rename(function(path) {
//     path.extname = '.html';
//     path.dirname = '';
//   }))
//   .pipe(dest('app/'))
// }

function styles() {
  return src("app/scss/style.scss") //файл, который будем конвертировать
    .pipe(scss({ outputStyle: "compressed" })) //конвертируем в трубе
    .pipe(concat("style.min.css"))
    .pipe(
      autoprefixer({
        overrideBrowsersList: ["last 10 versions"],
        grid: true,
      })
    )
    .pipe(dest("app/css")) //выкидываем файл в папку назначения
    .pipe(browserSync.stream());
}

function scripts() {
  return src(["node_modules/jquery/dist/jquery.js", 
  "node_modules/slick-carousel/slick/slick.js",
  "node_modules/mixitup/dist/mixitup.js",
  "node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js",
  "node_modules/ion-rangeslider/js/ion.rangeSlider.js",
  "node_modules/rateyo/src/jquery.rateyo.js",
  "node_modules/jquery-form-styler/dist/jquery.formstyler.js",
  "app/js/main.js"
])
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(dest("app/js"))
    .pipe(browserSync.stream());
}

function images() {
  return src("app/images/**/*.*")
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest("dist/images"));
}

function cleanDist() {
  return del("dist");
}

function build() {
  return src(["app/**/*.html", "app/css/style.min.css", "app/js/main.min.js"], {
    base: "app",
  }).pipe(dest("dist"));
}

function watching() {
  // возможность галпа следить
  watch(["app/scss/**/*.scss"], styles);
  watch(["app/*.njk"], nunjucks);
  watch(["app/js/**/*.js", "!app/js/main.min.js"], scripts);
  // watch(['app/html/**/*.shtml/'], include);
  watch(["app/**/*.html"]).on("change", browserSync.reload);

}

exports.styles = styles;
exports.scripts = scripts;
exports.browsersync = browsersync;
exports.images = images;
exports.cleanDist = cleanDist;
exports.build = series(cleanDist, images, build); // запускает по очереди!
exports.nunjucks = nunjucks;
// exports.include = include;
exports.watching = watching;
exports.default = parallel(nunjucks, styles, scripts, browsersync, watching);
