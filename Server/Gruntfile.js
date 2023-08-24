module.exports = function(grunt) {
    grunt.initConfig({
      // Configure grunt-express-server task
      express: {
        options: {
          script: 'index.js',  // Path to your Express server file
        },
        dev: {
          options: {
            node_env: 'development',  // Set the Node.js environment
          },
        },
        prod: {
          options: {
            node_env: 'production',  // Set the Node.js environment
          },
        },
      },
  
      // Configure grunt-contrib-copy task
      copy: {
        main: {
          files: [
            { src: ['index.js', 'package.json'], dest: 'dist/' },  // Copy index.js and package.json to dist/
            // Add more files to copy if needed
          ],
        },
      },
    });
  
    // Load Grunt plugins
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-copy');
  
    // Define Grunt tasks
    grunt.registerTask('default', ['express:dev']);  // Run Express server for development
    grunt.registerTask('build', ['copy']);  // Copy necessary files for deployment
    grunt.registerTask('deploy', ['express:prod']);  // Deploy in production environment
  };
  