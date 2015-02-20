/**
 * Created by Zelada_Torrez on 10/02/2015.
 */
module.exports=function(grunt){
    grunt.initConfig({
        watch:{
            css:{
                options:{livereload:true},
                files:['css/**.css']
            },
            html:{
                options:{livereload:true},
                files:['**.html']
            },
            js:{
                options:{livereload:true},
                files:['js/**.js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default',['watch']);
}
