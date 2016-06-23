var gulp = require('gulp');
var yaml = require('gulp-yaml');

gulp.task('default', ['swagger_ui'], function(){
  });

gulp.task('swagger_ui', ['swagger_yaml_to_json'], function(){
  });

gulp.task('swagger_yaml_to_json', function(){
  // https://www.npmjs.com/package/gulp-yaml
  return gulp.src('./api/swagger/swagger.yaml')
    .pipe( yaml({space: 2}) )
    .pipe( gulp.dest('./dist/swagger-ui') )
  });



