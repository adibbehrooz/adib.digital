/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

/******************************** CONSTELLATION :: APACHE *****************************
/**************************************************************************************/

const cameraOffset = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

const apache = {

	//____________________ I. DATA ____________________

	data: {
		// Type
		type: 'constellations',

		// WordPress
		backend : {
			ID: 86,
			postType: 'post', // Page or Post
			postTitle: 'Apache',
			postSlug: 'apache',
			coverDirection: '--ltr',
		},
		// Camera Offset Positon
		relation: { 
			x: window.innerWidth / 1.6 - window.innerWidth / 2, 
			y: cameraOffset.y * 2 - window.innerHeight / 3.4 
		},
		// Constellation Scale 
		scale: { 
			outside: .4, 
			inside: 4,
			boundary: 1
		},
		lineWidth: { 
			outside: .1, 
			inside: .1, 
			boundary: 1 
		},
	},

	//____________________ II. COORDINATION ____________________

	coordination: {
		curve: function(ctx) {
			ctx.save();
			ctx.restore();
		},
		outside: [
				{ form: 'save' }, 
				{ form: 'strokeStyle', value: "rgba(255, 255, 255, 0)" }, 
				{ form: 'miterLimit', value: 4 }, 
				{ form: 'save' }, 
				{ form: 'save' }, 
				{ form: 'beginPath' }, 
				{ form: 'fillStyle', value: "rgba(255, 255, 255, 0)" },  // .1

				{ x0: 218.048249, x1: 2.88871595,  form: 'moveTo' },
				{ x0: 210.079377, x1: 7.57042802, x2: 196.731518, x3: 21.0178988, x4: 180.793774, x5: 40.4420233,  form: 'bezierCurveTo' },
				{ x0: 180.793774, x1: 41.6373541,  form: 'lineTo' },
				{ x0: 194.7393, x1: 67.4365759,  form: 'lineTo' },
				{ x0: 195.436576, x1: 67.9346304,  form: 'lineTo' },
				{ x0: 205.696498, x1: 53.2918288, x2: 216.056031, x3: 40.0435798, x4: 226.614786, x5: 28.7875486,  form: 'bezierCurveTo' },
				{ x0: 227.411673, x1: 27.8910506, x2: 227.810117, x3: 27.492607, x4: 227.810117, x5: 27.492607,  form: 'bezierCurveTo' },
				{ x0: 227.411673, x1: 27.8910506, x2: 227.01323, x3: 28.3891051, x4: 226.614786, x5: 28.7875486,  form: 'bezierCurveTo' },
				{ x0: 223.228016, x1: 32.5727626, x2: 212.868482, x3: 44.52607, x4: 197.329183, x5: 68.4326848,  form: 'bezierCurveTo' },
				{ x0: 199.122179, x1: 68.8311284,  form: 'lineTo' },
				{ x0: 199.122179, x1: 68.8311284, x2: 235.480156, x3: 65.2451362, x4: 253.011673, x5: 62.2568093,  form: 'bezierCurveTo' },
				{ x0: 254.007782, x1: 61.3603113,  form: 'lineTo' },
				{ x0: 259.585992, x1: 30.0824903, x2: 248.529183, x3: 15.7385214, x4: 248.529183, x5: 15.7385214,  form: 'bezierCurveTo' },
				{ x0: 248.529183, x1: 15.7385214, x2: 234.583658, x3: -6.77354086, x4: 218.048249, x5: 2.88871595,  form: 'bezierCurveTo' },
				{ form: 'closePath' }, 
				{ form: 'fill' }, 
				{ form: 'stroke' }, 
				{ form: 'restore' }, 
				{ form: 'save' }, 
				
				{ form: 'beginPath' }, 
				{ form: 'fillStyle', value: "rgba(255, 255, 255, 0)" },  // .1

				{ x0: 152.404669, x1: 139.15642,  form: 'moveTo' },
				{ x0: 156.88716, x1: 130.888716, x2: 161.36965, x3: 122.720623, x4: 165.85214, x5: 114.851362,  form: 'bezierCurveTo' },
				{ x0: 170.533852, x1: 106.683268, x2: 175.315175, x3: 98.7143969, x4: 180.196109, x5: 91.044358,  form: 'bezierCurveTo' },
				{ x0: 180.494942, x1: 90.6459144, x2: 180.793774, x3: 90.1478599, x4: 180.992996, x5: 89.6498054,  form: 'bezierCurveTo' },
				{ x0: 185.774319, x1: 82.0793774, x2: 190.555642, x3: 74.907393, x4: 195.436576, x5: 67.9346304,  form: 'bezierCurveTo' },
				{ x0: 180.793774, x1: 40.3424125,  form: 'lineTo' },
				{ x0: 179.698054, x1: 41.6373541, x2: 178.602335, x3: 43.0319066, x4: 177.506615, x5: 44.4264591,  form: 'bezierCurveTo' },
				{ x0: 173.322957, x1: 49.7058366, x2: 168.940078, x3: 55.2840467, x4: 164.457588, x5: 61.2607004,  form: 'bezierCurveTo' },
				{ x0: 159.377432, x1: 68.0342412, x2: 154.197665, x3: 75.2062257, x4: 148.918288, x5: 82.7766537,  form: 'bezierCurveTo' },
				{ x0: 144.037354, x1: 89.7494163, x2: 139.056809, x3: 97.1206226, x4: 134.175875, x5: 104.59144,  form: 'bezierCurveTo' },
				{ x0: 129.992218, x1: 111.066148, x2: 125.708949, x3: 117.640467, x4: 121.525292, x5: 124.513619,  form: 'bezierCurveTo' },
				{ x0: 121.32607, x1: 124.812451, x2: 121.226459, x3: 125.011673, x4: 121.027237, x5: 125.310506,  form: 'bezierCurveTo' },
				{ x0: 121.027237, x1: 126.406226,  form: 'lineTo' },
				{ x0: 139.256031, x1: 162.564981,  form: 'lineTo' },
				{ x0: 140.052918, x1: 162.863813,  form: 'lineTo' },
				{ x0: 144.136965, x1: 154.894942, x2: 148.221012, x3: 146.92607, x4: 152.404669, x5: 139.15642,  form: 'bezierCurveTo' },
				{ form: 'closePath' }, 
				{ form: 'fill' }, 
				{ form: 'stroke' }, 
				{ form: 'restore' }, 
				{ form: 'save' }, 
				
				{ form: 'beginPath' }, 
				{ form: 'fillStyle', value: "rgba(255, 255, 255, 0)" },  // .1

				{ x0: 73.014786, x1: 316.164981,  form: 'moveTo' },
				{ x0: 76.3019455, x1: 307.598444, x2: 79.7883268, x3: 298.932296, x4: 83.2747082, x5: 290.166537,  form: 'bezierCurveTo' },
				{ x0: 86.6614786, x1: 281.799222, x2: 90.048249, x3: 273.332296, x4: 93.6342412, x5: 264.86537,  form: 'bezierCurveTo' },
				{ x0: 97.1206226, x1: 256.398444, x2: 100.806226, x3: 247.931518, x4: 104.491829, x5: 239.364981,  form: 'bezierCurveTo' },
				{ x0: 108.277043, x1: 230.698833, x2: 112.062257, x3: 222.032685, x4: 115.947082, x5: 213.466148,  form: 'bezierCurveTo' },
				{ x0: 119.831907, x1: 204.999222, x2: 123.716732, x3: 196.532296, x4: 127.701167, x5: 188.164981,  form: 'bezierCurveTo' },
				{ x0: 129.09572, x1: 185.176654, x2: 130.589883, x3: 182.088716, x4: 132.084047, x5: 179.100389,  form: 'bezierCurveTo' },
				{ x0: 134.574319, x1: 173.920623, x2: 137.164202, x3: 168.740856, x4: 139.654475, x5: 163.6607,  form: 'bezierCurveTo' },
				{ x0: 139.754086, x1: 163.361868, x2: 139.953307, x3: 163.162646, x4: 140.052918, x5: 162.863813,  form: 'bezierCurveTo' },
				{ x0: 121.027237, x1: 125.310506,  form: 'lineTo' },
				{ x0: 120.728405, x1: 125.80856, x2: 120.429572, x3: 126.306615, x4: 120.130739, x5: 126.804669,  form: 'bezierCurveTo' },
				{ x0: 115.74786, x1: 134.076265, x2: 111.26537, x3: 141.447471, x4: 106.982101, x5: 149.017899,  form: 'bezierCurveTo' },
				{ x0: 102.599222, x1: 156.687938, x2: 98.3159533, x3: 164.457588, x4: 94.1322957, x5: 172.326848,  form: 'bezierCurveTo' },
				{ x0: 90.5463035, x1: 179.000778, x2: 87.1595331, x3: 185.674708, x4: 83.7727626, x5: 192.448249,  form: 'bezierCurveTo' },
				{ x0: 83.0754864, x1: 193.842802, x2: 82.477821, x3: 195.137743, x4: 81.7805447, x5: 196.532296,  form: 'bezierCurveTo' },
				{ x0: 77.5968872, x1: 205.098833, x2: 73.911284, x3: 213.266926, x4: 70.5245136, x5: 221.235798,  form: 'bezierCurveTo' },
				{ x0: 66.7392996, x1: 230.200778, x2: 63.3525292, x3: 238.767315, x4: 60.3642023, x5: 246.935409,  form: 'bezierCurveTo' },
				{ x0: 58.3719844, x1: 252.314397, x2: 56.6785992, x3: 257.394553, x4: 54.985214, x5: 262.375097,  form: 'bezierCurveTo' },
				{ x0: 53.6902724, x1: 266.558755, x2: 52.3953307, x3: 270.842023, x4: 51.2, x5: 275.025681,  form: 'bezierCurveTo' },
				{ x0: 48.311284, x1: 284.98677, x2: 45.9206226, x3: 294.848249, x4: 43.9284047, x5: 304.809339,  form: 'bezierCurveTo' },
				{ x0: 44.2272374, x1: 306.004669,  form: 'lineTo' },
				{ x0: 62.4560311, x1: 342.263035,  form: 'lineTo' },
				{ x0: 63.0536965, x1: 342.561868,  form: 'lineTo' },
				{ x0: 65.5439689, x1: 335.788327, x2: 68.1338521, x3: 329.014786, x4: 70.8233463, x5: 322.042023,  form: 'bezierCurveTo' },
				{ x0: 71.5206226, x1: 320.049805, x2: 72.3175097, x3: 318.157198, x4: 73.014786, x5: 316.164981,  form: 'bezierCurveTo' },
				{ form: 'closePath' }, 
				{ form: 'fill' }, 
				{ form: 'stroke' }, 
				{ form: 'restore' }, 
				{ form: 'save' }, 
				
				{ form: 'beginPath' }, 
				{ form: 'fillStyle', value: "rgba(255, 255, 255, 0)" },  // .1

				{ x0: 43.7291829, x1: 306.10428,  form: 'moveTo' },
				{ x0: 41.3385214, x1: 318.157198, x2: 39.6451362, x3: 330.210117, x4: 38.7486381, x5: 342.163424,  form: 'bezierCurveTo' },
				{ x0: 38.7486381, x1: 342.561868, x2: 38.6490272, x3: 342.960311, x4: 38.6490272, x5: 343.458366,  form: 'bezierCurveTo' },
				{ x0: 32.6723735, x1: 333.89572, x2: 16.7346304, x3: 324.631907, x4: 16.7346304, x5: 324.631907,  form: 'bezierCurveTo' },
				{ x0: 28.1898833, x1: 341.167315, x2: 36.8560311, x3: 357.603113, x4: 38.1509728, x5: 373.740078,  form: 'bezierCurveTo' },
				{ x0: 32.0747082, x1: 375.035019, x2: 23.707393, x3: 373.142412, x4: 13.9455253, x5: 369.656031,  form: 'bezierCurveTo' },
				{ x0: 24.0062257, x1: 378.919844, x2: 31.5766537, x3: 381.509728, x4: 34.5649805, x5: 382.207004,  form: 'bezierCurveTo' },
				{ x0: 25.3011673, x1: 382.804669, x2: 15.6389105, x3: 389.179767, x4: 5.8770428, x5: 396.451362,  form: 'bezierCurveTo' },
				{ x0: 20.1214008, x1: 390.67393, x2: 31.5766537, x3: 388.382879, x4: 39.844358, x5: 390.175875,  form: 'bezierCurveTo' },
				{ x0: 26.7953307, x1: 427.131518, x2: 13.7463035, x3: 467.971984, x4: 0.59766537, x5: 511.203113,  form: 'bezierCurveTo' },
				{ x0: 4.58210117, x1: 510.007782, x2: 6.97276265, x3: 507.318288, x4: 8.36731518, x5: 503.632685,  form: 'bezierCurveTo' },
				{ x0: 10.6583658, x1: 495.763424, x2: 26.1976654, x3: 444.364202, x4: 50.4031128, x5: 376.728405,  form: 'bezierCurveTo' },
				{ x0: 51.1003891, x1: 374.835798, x2: 51.7976654, x3: 372.84358, x4: 52.4949416, x5: 370.950973,  form: 'bezierCurveTo' },
				{ x0: 52.6941634, x1: 370.452918, x2: 52.8933852, x3: 369.855253, x4: 53.092607, x5: 369.357198,  form: 'bezierCurveTo' },
				{ x0: 55.6824903, x1: 362.284825, x2: 58.2723735, x3: 355.01323, x4: 61.0614786, x5: 347.642023,  form: 'bezierCurveTo' },
				{ x0: 61.659144, x1: 345.948638, x2: 62.3564202, x3: 344.255253, x4: 62.9540856, x5: 342.561868,  form: 'bezierCurveTo' },
				{ x0: 62.9540856, x1: 342.561868, x2: 62.9540856, x3: 342.462257, x4: 62.9540856, x5: 342.462257,  form: 'bezierCurveTo' },
				{ x0: 43.9284047, x1: 304.809339,  form: 'lineTo' },
				{ x0: 43.9284047, x1: 305.307393, x2: 43.8287938, x3: 305.705837, x4: 43.7291829, x5: 306.10428,  form: 'bezierCurveTo' },
				{ form: 'closePath' }, 
				{ form: 'fill' }, 
				{ form: 'stroke' }, 
				{ form: 'restore' }, 
				{ form: 'save' }, 
				
				{ form: 'beginPath' }, 
				{ form: 'fillStyle', value: "rgba(255, 255, 255, 0)" },  // .1

				{ x0: 197.329183, x1: 68.5322957,  form: 'moveTo' },
				{ x0: 193.045914, x1: 75.1066148, x2: 188.364202, x3: 82.5774319, x4: 183.284047, x5: 91.044358,  form: 'bezierCurveTo' },
				{ x0: 182.985214, x1: 91.4428016, x2: 182.785992, x3: 91.940856, x4: 182.48716, x5: 92.3392996,  form: 'bezierCurveTo' },
				{ x0: 178.10428, x1: 99.7105058, x2: 173.522179, x3: 107.679377, x4: 168.641245, x5: 116.544747,  form: 'bezierCurveTo' },
				{ x0: 164.457588, x1: 124.115175, x2: 160.074708, x3: 132.283268, x4: 155.492607, x5: 141.148638,  form: 'bezierCurveTo' },
				{ x0: 151.508171, x1: 148.818677, x2: 147.424125, x3: 156.88716, x4: 143.240467, x5: 165.553307,  form: 'bezierCurveTo' },
				{ x0: 144.136965, x1: 165.951751,  form: 'lineTo' },
				{ x0: 190.456031, x1: 160.971206,  form: 'lineTo' },
				{ x0: 191.551751, x1: 160.174319,  form: 'lineTo' },
				{ x0: 205.596887, x1: 153.699611, x2: 211.872374, x3: 147.822568, x4: 217.948638, x5: 139.355642,  form: 'bezierCurveTo' },
				{ x0: 219.542412, x1: 137.064591, x2: 221.235798, x3: 134.574319, x4: 222.829572, x5: 132.084047,  form: 'bezierCurveTo' },
				{ x0: 227.810117, x1: 124.314397, x2: 232.691051, x3: 115.847471, x4: 236.974319, x5: 107.380545,  form: 'bezierCurveTo' },
				{ x0: 241.157977, x1: 99.2124514, x2: 244.84358, x3: 91.044358, x4: 247.732296, x5: 83.7727626,  form: 'bezierCurveTo' },
				{ x0: 249.525292, x1: 79.0910506, x2: 251.019455, x3: 74.8077821, x4: 252.015564, x5: 71.0225681,  form: 'bezierCurveTo' },
				{ x0: 252.912062, x1: 67.6357977, x2: 253.609339, x3: 64.448249, x4: 254.107393, x5: 61.4599222,  form: 'bezierCurveTo' },
				{ x0: 235.380545, x1: 64.7470817, x2: 212.370428, x3: 67.8350195, x4: 197.329183, x5: 68.5322957,  form: 'bezierCurveTo' },
				{ form: 'closePath' }, 
				{ form: 'fill' }, 
				{ form: 'stroke' }, 
				{ form: 'restore' }, 
				{ form: 'save' }, 
				
				{ form: 'beginPath' }, 
				{ form: 'fillStyle', value: "rgba(255, 255, 255, 0)" },  // .1

				{ x0: 141.447471, x1: 169.438132,  form: 'moveTo' },
				{ x0: 139.853696, x1: 172.824903, x2: 138.160311, x3: 176.311284, x4: 136.466926, x5: 179.797665,  form: 'bezierCurveTo' },
				{ x0: 134.67393, x1: 183.582879, x2: 132.781323, x3: 187.567315, x4: 130.988327, x5: 191.551751,  form: 'bezierCurveTo' },
				{ x0: 130.091829, x1: 193.543969, x2: 129.09572, x3: 195.635798, x4: 128.199222, x5: 197.628016,  form: 'bezierCurveTo' },
				{ x0: 125.310506, x1: 203.803891, x2: 122.521401, x3: 210.178988, x4: 119.533074, x5: 216.753307,  form: 'bezierCurveTo' },
				{ x0: 115.947082, x1: 224.82179, x2: 112.261479, x3: 233.288716, x4: 108.575875, x5: 241.954864,  form: 'bezierCurveTo' },
				{ x0: 104.989883, x1: 250.322179, x2: 101.403891, x3: 258.888716, x4: 97.8178988, x5: 267.853696,  form: 'bezierCurveTo' },
				{ x0: 94.3315175, x1: 276.320623, x2: 90.8451362, x3: 285.086381, x4: 87.3587549, x5: 294.051362,  form: 'bezierCurveTo' },
				{ x0: 84.1712062, x1: 302.119844, x2: 80.9836576, x3: 310.287938, x4: 77.7961089, x5: 318.854475,  form: 'bezierCurveTo' },
				{ x0: 77.5968872, x1: 319.252918, x2: 77.4972763, x3: 319.651362, x4: 77.2980545, x5: 320.049805,  form: 'bezierCurveTo' },
				{ x0: 74.1105058, x1: 328.516732, x2: 71.0015321, x3: 337.13001, x4: 67.7143726, x5: 345.995379,  form: 'bezierCurveTo' },
				{ x0: 67.6147617, x1: 346.194601, x2: 67.4368555, x3: 346.713047, x4: 67.3372446, x5: 346.912269,  form: 'bezierCurveTo' },
				{ x0: 68.025231, x1: 347.064993,  form: 'lineTo' },
				{ x0: 81.8801556, x1: 345.574599,  form: 'lineTo' },
				{ x0: 82.6623298, x1: 345.251362,  form: 'lineTo' },
				{ x0: 82.3634971, x1: 345.151751, x2: 82.1789883, x3: 344.753307, x4: 81.8801556, x5: 344.653696,  form: 'bezierCurveTo' },
				{ x0: 100.20856, x1: 342.362646, x2: 124.61323, x3: 328.616342, x4: 140.451362, x5: 311.68249,  form: 'bezierCurveTo' },
				{ x0: 147.722957, x1: 303.91284, x2: 154.297276, x3: 294.649027, x4: 160.473152, x5: 283.891051,  form: 'bezierCurveTo' },
				{ x0: 165.055253, x1: 275.822568, x2: 169.238911, x3: 266.957198, x4: 173.322957, x5: 257.09572,  form: 'bezierCurveTo' },
				{ x0: 176.908949, x1: 248.529183, x2: 180.29572, x3: 239.165759, x4: 183.582879, x5: 229.105058,  form: 'bezierCurveTo' },
				{ x0: 179.399222, x1: 231.296498, x2: 174.518288, x3: 232.989883, x4: 169.238911, x5: 234.085603,  form: 'bezierCurveTo' },
				{ x0: 168.342412, x1: 234.284825, x2: 167.346304, x3: 234.484047, x4: 166.350195, x5: 234.683268,  form: 'bezierCurveTo' },
				{ x0: 165.354086, x1: 234.88249, x2: 164.357977, x3: 234.982101, x4: 163.461479, x5: 235.181323,  form: 'bezierCurveTo' },
				{ x0: 180.594553, x1: 228.607004, x2: 191.352529, x3: 215.856809, x4: 199.22179, x5: 200.31751,  form: 'bezierCurveTo' },
				{ x0: 194.7393, x1: 203.405447, x2: 187.368093, x3: 207.389883, x4: 178.602335, x5: 209.382101,  form: 'bezierCurveTo' },
				{ x0: 177.407004, x1: 209.680934, x2: 176.211673, x3: 209.880156, x4: 174.916732, x5: 210.079377,  form: 'bezierCurveTo' },
				{ x0: 174.617899, x1: 210.079377, x2: 174.319066, x3: 210.178988, x4: 174.020233, x5: 210.178988,  form: 'bezierCurveTo' },
				{ x0: 179.996887, x1: 207.688716, x2: 184.977432, x3: 204.899611, x4: 189.360311, x5: 201.612451,  form: 'bezierCurveTo' },
				{ x0: 190.256809, x1: 200.915175, x2: 191.153307, x3: 200.217899, x4: 192.049805, x5: 199.421012,  form: 'bezierCurveTo' },
				{ x0: 193.344747, x1: 198.225681, x2: 194.639689, x3: 197.03035, x4: 195.835019, x5: 195.835019,  form: 'bezierCurveTo' },
				{ x0: 196.631907, x1: 195.038132, x2: 197.329183, x3: 194.241245, x4: 198.12607, x5: 193.344747,  form: 'bezierCurveTo' },
				{ x0: 199.819455, x1: 191.352529, x2: 201.41323, x3: 189.161089, x4: 202.907393, x5: 186.770428,  form: 'bezierCurveTo' },
				{ x0: 203.405447, x1: 186.073152, x2: 203.803891, x3: 185.276265, x4: 204.301946, x5: 184.578988,  form: 'bezierCurveTo' },
				{ x0: 204.899611, x1: 183.483268, x2: 205.397665, x3: 182.387549, x4: 205.89572, x5: 181.291829,  form: 'bezierCurveTo' },
				{ x0: 208.286381, x1: 176.510506, x2: 210.178988, x3: 172.227237, x4: 211.673152, x5: 168.442023,  form: 'bezierCurveTo' },
				{ x0: 212.470039, x1: 166.549416, x2: 213.067704, x3: 164.856031, x4: 213.66537, x5: 163.162646,  form: 'bezierCurveTo' },
				{ x0: 213.864591, x1: 162.564981, x2: 214.063813, x3: 161.867704, x4: 214.362646, x5: 161.270039,  form: 'bezierCurveTo' },
				{ x0: 214.960311, x1: 159.477043, x2: 215.458366, x3: 157.883268, x4: 215.856809, x5: 156.389105,  form: 'bezierCurveTo' },
				{ x0: 216.454475, x1: 154.297276, x2: 216.753307, x3: 152.603891, x4: 216.952529, x5: 151.40856,  form: 'bezierCurveTo' },
				{ x0: 216.354864, x1: 151.906615, x2: 215.757198, x3: 152.305058, x4: 214.960311, x5: 152.803113,  form: 'bezierCurveTo' },
				{ x0: 209.780545, x1: 155.891051, x2: 200.915175, x3: 158.680156, x4: 193.743191, x5: 159.975097,  form: 'bezierCurveTo' },
				{ x0: 207.887938, x1: 158.381323,  form: 'lineTo' },
				{ x0: 193.743191, x1: 159.975097,  form: 'lineTo' },
				{ x0: 192.747082, x1: 160.174319, x2: 192.049805, x3: 160.27393, x4: 191.252918, x5: 160.473152,  form: 'bezierCurveTo' },
				{ x0: 191.319326, x1: 160.406744, x2: 175.343888, x3: 162.095858, x4: 143.326605, x5: 165.540491,  form: 'bezierCurveTo' },
				{ x0: 143.127383, x1: 165.739713, x2: 141.945525, x3: 168.242802, x4: 141.447471, x5: 169.438132,  form: 'bezierCurveTo' },
				{ form: 'closePath' }, 
				{ form: 'fill' }, 
				{ form: 'stroke' }, 
				{ form: 'restore' }, 
				{ form: 'save' }, 
				
				{ form: 'beginPath' }, 
				{ form: 'fillStyle', value: "rgba(255, 255, 255, 0)" },  // .1

				{ x0: 65.8428016, x1: 350.63035,  form: 'moveTo' },
				{ x0: 63.3525292, x1: 357.503502, x2: 60.7626459, x3: 364.575875, x4: 58.2723735, x5: 371.74786,  form: 'bezierCurveTo' },
				{ x0: 58.2723735, x1: 371.847471, x2: 58.1727626, x3: 371.947082, x4: 58.1727626, x5: 372.046693,  form: 'bezierCurveTo' },
				{ x0: 57.7743191, x1: 373.042802, x2: 57.4754864, x3: 374.038911, x4: 57.0770428, x5: 375.13463,  form: 'bezierCurveTo' },
				{ x0: 55.3836576, x1: 380.015564, x2: 53.8894942, x3: 384.298833, x4: 50.5027237, x5: 394.259922,  form: 'bezierCurveTo' },
				{ x0: 56.0809339, x1: 396.849805, x2: 60.5634241, x3: 403.523735, x4: 64.8466926, x5: 411.193774,  form: 'bezierCurveTo' },
				{ x0: 64.448249, x1: 403.324514, x2: 61.1610895, x3: 395.853696, x4: 54.8856031, x5: 390.175875,  form: 'bezierCurveTo' },
				{ x0: 82.477821, x1: 391.371206, x2: 106.284825, x3: 384.398444, x4: 118.536965, x5: 364.277043,  form: 'bezierCurveTo' },
				{ x0: 119.632685, x1: 362.484047, x2: 120.628794, x3: 360.59144, x4: 121.525292, x5: 358.599222,  form: 'bezierCurveTo' },
				{ x0: 115.947082, x1: 365.671595, x2: 108.974319, x3: 368.659922, x4: 96.0249027, x5: 367.962646,  form: 'bezierCurveTo' },
				{ x0: 96.0249027, x1: 367.962646, x2: 95.9252918, x3: 367.962646, x4: 95.9252918, x5: 367.962646,  form: 'bezierCurveTo' },
				{ x0: 95.9252918, x1: 367.962646, x2: 96.0249027, x3: 367.962646, x4: 96.0249027, x5: 367.962646,  form: 'bezierCurveTo' },
				{ x0: 115.249805, x1: 359.396109, x2: 124.812451, x3: 351.128405, x4: 133.378988, x5: 337.481712,  form: 'bezierCurveTo' },
				{ x0: 135.371206, x1: 334.194553, x2: 137.363424, x3: 330.708171, x4: 139.355642, x5: 326.823346,  form: 'bezierCurveTo' },
				{ x0: 122.521401, x1: 344.056031, x2: 103.097276, x3: 348.936965, x4: 82.6770428, x5: 345.251362,  form: 'bezierCurveTo' },
				{ x0: 67.336965, x1: 346.944747,  form: 'lineTo' },
				{ x0: 66.8389105, x1: 348.040467, x2: 66.340856, x3: 349.335409, x4: 65.8428016, x5: 350.63035,  form: 'bezierCurveTo' },
				{ form: 'closePath' }, 
				{ form: 'fill' }, 
				{ form: 'stroke' }, 
				{ form: 'restore' }, 
				{ form: 'restore' }, 
				{ form: 'restore' }, 
		],
		inside: [
			{ form: 'save' },
				{ x0: 1.000,      x1: 50.7500, form: 'moveTo' }, 
				{ x0: 4.000,      x1: 40.7500, form: 'lineTo' }, 
				{ x0: 8.000,      x1: 30.7500, form: 'lineTo' }, 
				{ x0: 12.500,      x1: 20.7500, form: 'lineTo' }, 
				{ x0: 15.500,      x1: 14.7500, form: 'lineTo' }, 
				{ x0: 17.500,      x1: 10.7500, form: 'lineTo' }, 
				{ x0: 21.500,      x1: 3.7500, form: 'lineTo' }, 
				// Stroke
				{ form: 'lineWidth', value: '.2' },
				{ form: 'strokeStyle',	value: 'rgba(255, 255, 255, .5)' },
				{ form: 'stroke'}, 
				// Fill
				{ form: 'fillStyle', 	value: 'rgba(255, 255, 255, .2)' },
			{ form: 'restore'},
		],
        boundary: [
			{ form: 'save' },
                { form: 'beginPath' }, 
				{ x0: 50.000,      x1: 5.000, form: 'moveTo' }, 
				{ x0: 110.000,     x1: 5.000, form: 'lineTo' }, 
				{ x0: 30.000,      x1: 220.000, form: 'lineTo' }, 
				{ x0: -30.000,      x1: 220.000, form: 'lineTo' }, 
				{ x0: 50.000,      x1: 5.000, form: 'lineTo' }, 
                { form: 'closePath' },
				// Stroke
				{ form: 'lineWidth', value: '1' },
				{ form: 'strokeStyle',	value: 'rgba(255, 255, 255, 0)' },
				{ form: 'stroke'}, 
				// Fill
				{ form: 'fillStyle', 	value: 'rgba(255, 255, 255, 0)' },
			{ form: 'restore'},
        ],
		arc: [
			{ form: 'save' },
				{ x0: 1.000,      x1: 50.7500 },  
				{ x0: 4.000,      x1: 40.7500 },  
				{ x0: 8.000,      x1: 30.7500 },  
				{ x0: 12.500,      x1: 20.7500 },  
				{ x0: 15.500,      x1: 14.7500 },  
				{ x0: 17.500,      x1: 10.7500 },  
				{ x0: 21.500,      x1: 3.7500  },  
			{ form: 'restore'},
		],
	},
};

export default { apache };