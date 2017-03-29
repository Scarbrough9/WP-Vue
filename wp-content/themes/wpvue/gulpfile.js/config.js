module.exports = {
    // Setup the domain to be used by BrowserSync
    browserSync: {
        target: "wpvue.dev",
        host: "localhost"
    },
    pipeline: {
        fonts: {
            src: "source/fonts/**/*",
            dest: "public/fonts"
        },
        images: {
            src: "source/images/**/*.{png,gif,jpg}",
            dest: "public/images"
        },
        svg: {
            src: "source/images/**/*.svg",
            dest: "public/images"
        },
        svgSprite: {
            src: "source/icons/**/*.svg",
            dest: "public/images"
        }
    },
    scripts: {
        dir: {
            src: "source/scripts",
            dest: "public/scripts"
        },
        entries: {
            wpvue: "wpvue.js"
        }
    },
    styles: {
        src: "source/styles",
        dest: "public/styles"
    },
    watch: {
        php: "**/*.php",
        scripts: "source/scripts/**/*.{js,vue}",
        styles: "source/styles/**/*.scss",
        fonts: "source/fonts/**/*",
        images: "source/images/**/*.{png,gif,jpg}",
        svg: "source/images/**/*.svg",
        icons: "source/icons/**/*.svg",
        public: "public/**/*"
    }
}
