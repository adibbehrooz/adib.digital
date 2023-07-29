/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/
	//______________________
	//
	// 		I. Require
	//______________________

	const webpack 			= require('webpack');
	const path 				= require('path');


	//________________________
	//
	// 		II. Constants
	//________________________

	// 1. Plugins
	const MiniCssExtractPlugin 		= require('mini-css-extract-plugin');
	const CssMinimizerPlugin 		= require('css-minimizer-webpack-plugin');
	const TerserPlugin 				= require("terser-webpack-plugin");
	const HtmlWebpackPlugin			= require('html-webpack-plugin');


	// 2. Misc

	//______________________
	//
	// 		III. Variables
	//______________________


	//______________________
	//
	// 		IV. Exports
	//______________________

	module.exports = {
		
		// 0. Basic
		watch: true,
		target: 'web',
		cache: true,	
		
		// 1. Entry
		entry: {
			index: 	'./assets/js/src/index.js',
		},

		// 2. Mode
		mode: 'development',

		// 3. Output
		output: {
			path: path.resolve(__dirname, './assets/js/dist'),
			publicPath: '/',
			filename: 'index.js',
			chunkFilename: '[name].[chunkhash].chunk.js',
			clean: true, // Clean the output directory before emit.
		},

		// 4. Plugins
		plugins: [
			new MiniCssExtractPlugin({
				filename: '../../css/[name].min.css',
				chunkFilename: '[id].css',
			}),
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery',
			}),
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, 'assets/js/src/index.php'),
				chunks: ['index'],
				filename: 'index.php',
			}),
		],

		// 5. Development Tools
		devtool:'source-map',

		// 6. Development Server
		devServer: {
            static: false,
			host: 'adib.server.com',
			allowedHosts: [
				'adib.server.com',
			],
			hot: false,
			watchFiles: ['./*.php','./framework/*.php', 'assets/js/**/*.js', 'assets/scss/*.scss'],
			client: {
				logging: 'info',
				overlay: true,
			},
			devMiddleware: {
				publicPath: path.resolve(__dirname, 'dist'),
				writeToDisk: true,
			},
			port: 8149,
			proxy: {
				'*': {
				  target: `http://adib.server.com/website/`,
				  changeOrigin: true
				},
			},
		},

		// 7. Modules
		module: {
			rules: [{
				// 6.1. SCSS
				test: /\.(sa|sc|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: path.resolve(__dirname, '../../css'),
						},
					},

					// 6.1.1. css Loader
					{ 	
						loader: "css-loader", 
						options: { 
							import: true, 
							url: true,
							modules: true,
							sourceMap: true 
						} 
					},	

					// 6.1.2. PostCss Loader
					{
						loader: "postcss-loader", 
					},

					// 6.1.3. sass Loader
					{ 	
						loader: "sass-loader", 
						options: { 
							sourceMap: true, 
							sassOptions: {
								outputStyle: "compressed",  // "compressed" After Final Version, Default is "expanded" !IMPORTANT
							},
						} 
					},
				],
			},{
				// 6.2. FONTS
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
				// generator: {
					// filename: '[path][name].[ext]',
				// },				
			},{
				// 6.3. IMAGES
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
				// generator: {
					// filename: './assets/images/[name][contenthash][ext]',
				// },
			}, {
				// 6.4. Babel
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
		}, // [END] 6. Modules

		// 8. Optimization
		optimization: {
			chunkIds: 'named',
			minimize: true, // "True" After Final Version, Default is "false" !IMPORTANT
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
							"default",
							{
								discardComments: { removeAll: true },
							},
						],
					},
				}),
			],
		}, // [END] 7. Optimization

		// 9. Resolve
		resolve: {
			alias: {

				// 1. SCSS & CSS For Wordpress Core
				index: 		path.resolve(__dirname,'./assets/scss/index.scss'), // Import
				slick: 		path.resolve(__dirname,'./node_modules/slick-carousel/slick/slick.scss'),
				slickTheme: path.resolve(__dirname,'./node_modules/slick-carousel/slick/slick-theme.css'),

				// 2. JS
				
			},
			extensions: ['.js', '.jsx', '.css', '.scss']
		},
	};