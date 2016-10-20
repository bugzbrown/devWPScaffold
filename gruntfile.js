module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        ts: {
            options: {
                compile: true,
                target: 'es5',
                module: 'amd',
                sourceMap: false
            },
            dist: {
                src: ["./dev/**/*.ts"],
                out: "<%= pkg.dests %><%= pkg.jsFileName %>.js",
                options:{
                    comments: false
                }
            }
        },
        uglify:{
            options: {
                // the banner is inserted at the top of the output
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: [
                    {'<%= pkg.dests %><%= pkg.jsFileName %>.min.js': ['<%= pkg.dests %><%= pkg.jsFileName %>.js']}
                ]
            }
        },
        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                files: {                         // Dictionary of files
                    '<%= pkg.dests %><%= pkg.cssFileName %>.css': './dev/sass/base.scss'
                }
            }
        },
        cssmin:{
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            dist: {
                files: {
                    '<%= pkg.dests %><%= pkg.cssFileName %>.min.css': ['<%= pkg.dests %><%= pkg.cssFileName %>.css']
                }
            }
        },
        watch: {
            ts: {
                files: ['./dev/**/*.ts'],
                tasks: ['ts:dist'],
                options: {
                    interrupt: true,
                },
            },
            sass: {
                files: ['./dev/**/*.scss'],
                tasks: ['sass'],
                options: {
                interrupt: true,
                },
            },
        },
        typedoc: {
            build: {
                options: {
                    module: 'commonjs',
                    target: 'es5',
                    out: './docs/',
                    name: 'Tema Blog da Bolsa',
                    includeDeclarations: true,
                    excludeExternals: true,
                    mode: "modules",
                    theme: "minimal"
                },
                src: ['./dev/**/*.ts','./typings/seleads/**/*.ts']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("grunt-typedoc");
    grunt.loadNpmTasks("grunt-ts");
    // Establish tasks we can run from the terminal.

    grunt.registerTask('distMin', ['ts:dist', 'uglify', 'sass', 'cssmin']);
    grunt.registerTask('w', ['ts:distMin', 'watch']);
    grunt.registerTask('docs', ['typedoc']);
    grunt.registerTask('default', ['w']);
}
