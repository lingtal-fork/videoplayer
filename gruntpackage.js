module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            videoplayer:{
                src:[
                    'src/js/vp_header.js',
                    'src/js/vp_exports.js',
                    'src/js/vp_videoplayer.js',
                    'src/js/vp_videoinit.js',
                    'src/js/vp_canplaytype.js',
                    'src/js/vp_rendersource.js',
                    'src/js/vp_controlsbar.js',
                    'src/js/vp_play.js',
                    'src/js/vp_next.js',
                    'src/js/vp_fullscreen.js',
                    'src/js/vp_muted.js',
                    'src?js/vp_progress.js',
                    'src?js/vp_contunue.js',
                    'src?js/vp_playerror.js',
                    'src?js/vps_mousemove.js',
                    'src?js/vps_fullscreen.js',
                    'src?js/vp_end.js'
                ],
                dest:'build/videoplayer.js'
            }
        },
        uglify: {
            videoplayer:{
                src:['build/videoplayer.js'],
                dest:'build/videoplayer.min.js',
                banner:'src/js/vp_header.js'
            }
        },
        cssmin: {
            build: {
                src  : ['src/css/videoplayer.css'],
                dest : 'build/css/videoplayer.min.css'
            }
        },
        copy: {
            build: {
                expand  : true,
                cwd     : 'src/',
                src     : ['font/*.*','images/*.*'],
                dest    : 'build/',
                flatten : true,
                filter  : 'isFile'
            }
        }
    });


    grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'copy']);

};