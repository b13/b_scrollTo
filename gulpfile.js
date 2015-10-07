var settings = {
	path : {
		js    : 'src/',
		jsProd: 'dist/'
	}
};

var gulp   = require('gulp'),
	del    = require('del'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify');


//Clean CSS Folder
gulp.task('clean', function(cb){
	del.sync([ settings.path.jsProd + '**/*']);
	cb();
});

gulp.task('js', ['clean'], function(){
	gulp.src(settings.path.js + 'b_scrollTo.js')
		.pipe(gulp.dest(settings.path.jsProd))
		.pipe(uglify())
		.pipe(rename('b_scrollTo.min.js'))
		.pipe(gulp.dest(settings.path.jsProd));
});

gulp.task('build', ['js']);
gulp.task('default', ['build']);
