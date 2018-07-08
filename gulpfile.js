const gulp = require('gulp');
const nunjucks = require('gulp-nunjucks');
const rename = require("gulp-rename");

gulp.task('default', function(){
  gulp.src('./njk/index.html')
      .pipe(nunjucks.compile({
        page_title: "Stuhr Enterprises",
        meta: {
          description: "Our ANION BOOSTER™ and GLUCOSE BOOSTER™ provide a palatable source of anions and an effective source of glucose precursors to help prevent Hypocalcemia and Ketosis, proven at the University and on the dairy.",
          image: "https://www.stuhrenterprises.com/images/home-hero-cows.jpg"
        }
      }))
      .pipe(gulp.dest('./'));
  gulp.src('./njk/prod-oat-groats.html')
      .pipe(nunjucks.compile({
        page_title: "Glucose Booster - Stuhr Enterprises",
        meta: {
          description: "A unique blend of glucose precursors that help the Transition cow produce enough glucose to help prevent subclinical and clinical ketosis and the resulting health problems.",
          image: "https://www.stuhrenterprises.com/images/anion-glucose-hero.jpg"
        }
      }))
      .pipe(rename('index.html'))
      .pipe(gulp.dest('./products/oat-groats/'));
  gulp.src('./njk/about.html')
      .pipe(nunjucks.compile({
        page_title: "About - Stuhr Enterprises",
        meta: {
          description: "Learn about the history and vision of Stuhr Enterprises, LLC.",
          image: "https://www.stuhrenterprises.com/images/about-hero.jpg"
        }
      }))
      .pipe(rename('index.html'))
      .pipe(gulp.dest('./about/'));
  gulp.src('./njk/transloading.html')
      .pipe(nunjucks.compile({
        page_title: "Transloading - Stuhr Enterprises",
        meta: {
          description: "Find information on national and international contacts as well as request research.",
          image: "https://www.stuhrenterprises.com/images/contact-hero.jpg"
        }
      }))
      .pipe(rename('index.html'))
      .pipe(gulp.dest('./transloading/'));
  gulp.src('./njk/contact.html')
      .pipe(nunjucks.compile({
        page_title: "Contact Us - Stuhr Enterprises",
        meta: {
          description: "Find information on national and international contacts as well as request research.",
          image: "https://www.stuhrenterprises.com/images/contact-hero.jpg"
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