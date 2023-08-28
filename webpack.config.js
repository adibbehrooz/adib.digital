/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/
	//___________________________________________
	//
	// 				I. Require
	//___________________________________________

	const webpack				= require('webpack');
	const path					= require('path');
	const BrowserSyncPlugin 	= require('browser-sync-webpack-plugin');


	//___________________________________________
	//
	// 				II. Constants
	//___________________________________________

	const MiniCssExtractPlugin	= require('mini-css-extract-plugin');
	const CssMinimizerPlugin 	= require('css-minimizer-webpack-plugin');
	const TerserPlugin			= require("terser-webpack-plugin");


	//___________________________________________
	//
	// 				III. Exports
	//___________________________________________

	module.exports = {

		// I. BASIC
		watch: true,
		watchOptions: {
			ignored: /node_modules/
		},	
		target: 'web',
		cache: false,

		// II. ENTERY
		entry: {
			build: 	'./assets/js/src/index.js',
			sample: './assets/js/src/sample.js',
		},

		// III. MODE
		mode: 'development',

		// IV. OUTPUT
		output: {
			path: path.resolve(__dirname, './assets/js/dist'),
			publicPath: '/',
			filename: '[name].js',
			chunkFilename: '[name].[chunkhash].chunk.js',
			clean: true, // Clean the output directory before emit.
		},

		// V. Plugins
		plugins: [

			// MiniCssExtractPlugin
			new MiniCssExtractPlugin({
				filename: '../../css/main.min.css',
				chunkFilename: '[id].css',
			}),

			// Browser Sync
			new BrowserSyncPlugin({
				browser: ['google-chrome'],
				ghostMode: {
					scroll: true,
					links: true,
					forms: true
				},
				watchOptions: {
					reloadDelay: 850,
					debounceDelay: 850
				},
				host: 'localhost',
				watchTask: true,
				port: 3000,
				watchEvents : [ 'change', 'add', 'unlink', 'addDir', 'unlinkDir' ],
				files: [
					{
					match: [

						// I. PHP
						'../../../../../../wp-config.php', '../../../../../wp-config.php', '../../../wp-config.php', // Wordpress Root
						'../../../*.php', '*.php' , // Wordpress Theme Root
						'../../../woocommerce/*.php', './woocommerce/*.php', // Wordpress WooCommerce
						'../../../framework/*.php', './framework/*.php', // Wordpress Framework
						'!../../../node_modules',

						// II. JS
						'../src/*.js',
						'../*.js',

						// II. SCSS & CSS
						'../../css/*.*',
						'../../scss/*.*',
					],
					fn: function (event, file) {
						this.reload()
					},
					options: {
						ignored: '*.txt'
					}
				}],
				proxy: 'http://adib.server.com:8000/website',
			}),
		],

		// VI. DEVELOPMENT TOOLS
		devtool:'source-map',

		// VII. MODULES
		module: {
			rules: [{
				// 1. SCSS
				test: /\.(sa|sc|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: path.resolve(__dirname, '../../css'),
						},
					},

					// 1.1. css Loader
					{
						loader: "css-loader",
						options: {
							import: true,
							url: true,
							modules: false,
							sourceMap: false
						}
					},

					// 1.2. PostCss Loader
					{
						loader: "postcss-loader",
					},

					// 1.3. sass Loader
					{
						loader: "sass-loader",
						options: {
							sourceMap: true,
							sassOptions: {
								outputStyle: "expanded",  // "compressed" After Final Version, Default is "expanded" !IMPORTANT
							},
						}
					},
				],
			},{
				// 2. FONTS
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
				// generator: {
					// filename: '[path][name].[ext]',
				// },
			},{
				// 3. IMAGES
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
				// generator: {
					// filename: './assets/images/[name][contenthash][ext]',
				// },
			}, {
				// 4. Babel
				test: /\.(?:js|mjs|cjs)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env', { targets: "defaults" }]
						],
					},
				}
			}
			],
		}, // [END]  MODULES

		// VIII. OPTIMIZATION
		optimization: {
			chunkIds: 'named',
			emitOnErrors: true,
			minimize: false, // "True" After Final Version, Default is "false" !IMPORTANT
			minimizer: [
				new TerserPlugin({
					test: /\.js(\?.*)?$/i,
					parallel: true,
					terserOptions: {
						format: {
							comments: false,
						},
					},
					extractComments: false,
				}),
				new CssMinimizerPlugin({
					minimizerOptions: {
						preset: [
							"advanced",
							{
								discardComments: { removeAll: true },
							},
						],
					},
				}),
			],
		}, // [END] OPTIMIZATION

		// IX. RESOLVE
		resolve: {
			roots: [path.resolve('./assets/js/src')],
			alias: {

				// 1. SCSS & CSS For Wordpress Core
				main: 			path.resolve(__dirname,'./assets/scss/main.scss'), // Import
				slick: 			path.resolve(__dirname,'./node_modules/slick-carousel/slick/slick.scss'),
				slickTheme: 	path.resolve(__dirname,'./node_modules/slick-carousel/slick/slick-theme.css'),
				
				// 2. JS
				SineWaves:		path.resolve(__dirname,'./node_modules/sine-waves/sine-waves.js'),
			},
			extensions: ['.js', '.jsx', '.css', '.scss'],
			extensionAlias: {
				'.js': ['.ts', '.js'],
				'.mjs': ['.mts', '.mjs'],
			  },
		},
	};
