/*
 After you have changed the settings under responsive_images
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            /* Change these */
            width: 1200,
            suffix: '_large',
            quality: 30
          },{
            width: 600,
            suffix: '_small',
            quality: 30
          },{
            width: 100,
            suffix: '_thumbnail',
            quality: 30
          }]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'assets/images_src/',
          dest: 'assets/images/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['assets/images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images']);

};
