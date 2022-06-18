import webpack from 'webpack';

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
            base: '/e-shop/'
        }
    }
    : {};

export default {
    mode: 'spa',
    /*
     ** Headers of the page
     */
    head: {
        title: 'E Shop',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }]
    },
    ...routerBase,
    /*
     ** Source directory
     */
    srcDir: 'src',
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#000000' },
    /*
     ** Global CSS
     */
    css: ['~/assets/css/main.css','~/assets/scss/styles.scss'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [{ src: '~/plugins/sayHello', ssr: false }],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        '@nuxt/postcss8',
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/vuetify',
        [
            'nuxt-compress',
            {
                gzip: {
                    cache: true
                },
                brotli: {
                    threshold: 10240
                }
            }
        ]
    ],
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        //analyze: true,
        postcss: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
            },
        },
        extend(config, ctx) {
            // if (ctx.isClient){
            //     config.optimization.splitChunks.maxSize = 200000;
            // }
            config.plugins.push(new webpack.ProvidePlugin({
                THREE: 'three'
            }));

            // Run ESLint on save
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                    // options: {
                    //     fix: true
                    // }
                });
            }
        }
    }
};
