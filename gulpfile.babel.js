import gulp from 'gulp';
var sass = require('gulp-sass')(require('sass'));

const paths = {
	styles: {
		src: 'assets/scss/styles.scss',
		dest: 'src/static/styles',
		watch: 'assets/scss/**/*.scss',
	},
};

export function styles() {
	return gulp.src(paths.styles.src).pipe(sass()).pipe(gulp.dest(paths.styles.dest));
}

function watchFiles() {
	gulp.watch(paths.styles.watch, styles);
}
