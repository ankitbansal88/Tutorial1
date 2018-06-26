/*eslint-env node*/
/*global module:false*/
module.exports = function(grunt) {
	"use strict";

	grunt.initConfig({
		dir: {
			webapp: "webapp",
			tests: "webapp/test",
			bower_components: "bower_components"
		},
		port: (process.env.PORT || 5000),
		connect: {
			options: {
				port: "<%= port %>",
				hostname: "*"
			},
			src: { },
			dist: { }
		},
		openui5_preload:{
			component:{
				options:{
					resources:{
						cwd:"<%= dir.webapp %>"	
					},
					dest:"<%= dir.dist %>"
				},
				components:true,
				compress:true
			},
			library:{
				options:{
					resources:{
						cwd:"<%= dir.webapp %>",
						src:[
						'**/*.js',
						'**/*.fragment.html',
						'**/*.fragment.json',
						'**/*.fragment.xml',
						'**/*.view.html',
						'**/*.view.xml',
						'**/*.properties',
						]
					}
				}
			}
		},
		openui5_connect: {
			options: {
				resources: [
					"<%= dir.bower_components %>/openui5-sap.ui.core/resources",
					"<%= dir.bower_components %>/openui5-sap.m/resources",
					"<%= dir.bower_components %>/openui5-sap.ui.layout/resources",
					"<%= dir.bower_components %>/openui5-sap.uxap/resources",
					"<%= dir.bower_components %>/openui5-themelib_sap_belize/resources",
					"<%= dir.webapp %>",

				]
			},
			src: {
				options: {
					appresources:"<%= dir.webapp %>"
				}
			},
			dist: { }
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks("grunt-contrib-connect");
	// grunt.loadNpmTasks("grunt-contrib-clean");
	// grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-openui5");
	// Serve tasks
	grunt.registerTask("serve", function(target) {
		grunt.task.run("openui5_connect:" + (target || "src") + ":keepalive");
		grunt.task.run("openui5_preload");
	});
};