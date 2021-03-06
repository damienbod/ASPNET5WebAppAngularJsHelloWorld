// This file in the main entry point for defining grunt tasks and using grunt plugins.
// Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409

module.exports = function (grunt) {

	// load Grunt plugins from NPM
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({
		bower: {
			install: {
				options: {
					targetDir: "wwwroot/lib",
					layout: "byComponent",
					cleanTargetDir: false
				}
			}
		},
		uglify: {
			my_target: {
				files: { 'wwwroot/myAngularApp.js': ['AngularApp/index.js', 'AngularApp/**/*.js'] }
			}
		},
		watch: {
			scripts: {
				files: ['AngularApp/**/*.js'],
				tasks: ['uglify']
			}
		}
	});

	// This command registers the default task which will install bower packages into wwwroot/lib
	grunt.registerTask("default", ["bower:install"]);

	// define tasks
	grunt.registerTask('default', ['uglify', 'watch']);

	// The following line loads the grunt plugins.
	// This line needs to be at the end of this this file.
	grunt.loadNpmTasks("grunt-bower-task");
};