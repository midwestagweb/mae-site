const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');
const rename = require("gulp-rename");

gulp.task('default', function(){
  gulp.src('./njk/index.html')
      .pipe(nunjucks.compile({
        page_title: "Midwest Ag Enterprises, Inc.",
        meta: {
          description: "Midwest Ag Enterprises, Inc. (MAE) is a privately held company established in 2002. Based in Marshall MN, MAE is an exporter of high quality feed ingredients to end-user customers in the Pacific Rim and China.",
          image: ""
        }
      }))
      .pipe(gulp.dest('./'));
  gulp.src('./njk/prod-ferm-o-tide-xp.html')
      .pipe(nunjucks.compile({
        page_title: "Ferm-O-Tide XP - Midwest Ag Enterprises, Inc.",
        meta: {
          description: "",
          image: ""
        }
      }))
      .pipe(rename('index.html'))
      .pipe(gulp.dest('./products/ferm-o-tide-xp/'));
  gulp.src('./njk/about.html')
      .pipe(nunjucks.compile({
        page_title: "About - Midwest Ag Enterprises, Inc.",
        meta: {
          description: "Learn about Midwest Ag Enterprises, Inc.",
          image: ""
        }
      }))
      .pipe(rename('index.html'))
      .pipe(gulp.dest('./about/'));
  gulp.src('./njk/transloading.html')
      .pipe(nunjucks.compile({
        page_title: "Transloading - Midwest Ag Enterprises, Inc.",
        meta: {
          description: "",
          image: ""
        }
      }))
      .pipe(rename('index.html'))
      .pipe(gulp.dest('./transloading/'));
  gulp.src('./njk/contact.html')
      .pipe(nunjucks.compile({
        page_title: "Contact Us - Stuhr Enterprises",
        meta: {
          description: "Find information on national and international contacts as well as request research.",
          image: ""
        }
      }))
      .pipe(rename('index.html'))
      .pipe(gulp.dest('./contact/'));
  gulp.src('./njk/privacy-policy.html')
      .pipe(nunjucks.compile({
        page_title: "Privacy Policy - Stuhr Enterprises",
        meta: {
          description: "Learn the privacy policy of Stuhr Enterprises, LLC.",
          image: ""
        }
      }))
      .pipe(gulp.dest('./'));
});