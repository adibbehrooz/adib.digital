/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

/******************************** LANDSCAPE :: PYRAMIDS ********************************
/***************************************************************************************/


const cameraOffset = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

const sphinx = {

	//____________________ I. DATA ____________________

	data: {
		// Type
		type: 'landscape',

		// WordPress
		backend : {
			ID: 0,
			postType: 'post', // Page or Post
			coverDirection: 'ltr',
		},
		// Camera Offset Positon
		relation: { 
			x: window.innerWidth / 1.1 - window.innerWidth / 2, 
			y: cameraOffset.y - window.innerHeight / 3.4 
		},
		// Constellation Scale 
		scale: { 
			outside: 0, 
			inside: 0 
		},
		lineWidth: { 
			outside: 0, 
			inside: 0 
		},
	},

	//____________________ II. COORDINATION ____________________

	coordination: {
		curve: function(canvaWidth, ctx, cameraOffset) {
			ctx.save();
				ctx.strokeStyle="rgba(0,0,0,0)";
				ctx.miterLimit=4;
				ctx.scale(0.3278688524590164,0.3278688524590164);
				ctx.scale(1.3333333333333333,1.3333333333333333);
				ctx.save();
					ctx.strokeStyle="rgba(0,0,0,0)";
					ctx.translate(0,110);
					ctx.scale(0.1,-0.1);
					ctx.save();
						ctx.strokeStyle="rgba(0,0,0,0)";
						ctx.beginPath();
							ctx.moveTo(815,1076);
							ctx.bezierCurveTo(783,1062,756,1025,765,1010);
							ctx.bezierCurveTo(768,1005,762,996,751,991);
							ctx.bezierCurveTo(733,981,689,884,676,824);
							ctx.bezierCurveTo(667,785,675,778,781,735);
							ctx.lineTo(865,702);
							ctx.lineTo(874,761);
							ctx.bezierCurveTo(882,816,881,822,861,836);
							ctx.bezierCurveTo(843,849,840,861,840,914);
							ctx.bezierCurveTo(840,980,850,1000,886,1000);
							ctx.bezierCurveTo(908,1000,912,1005,924,1063);
							ctx.bezierCurveTo(930,1089,929,1090,888,1090);
							ctx.bezierCurveTo(864,1089,832,1083,815,1076);
						ctx.closePath();
						ctx.fill();
						ctx.stroke();
					ctx.restore();
					ctx.save();
						ctx.strokeStyle="rgba(0,0,0,0)";
						ctx.beginPath();
							ctx.moveTo(956,1053);
							ctx.bezierCurveTo(939,957,941,960,907,963);
							ctx.bezierCurveTo(875,965,875,965,872,912);
							ctx.bezierCurveTo(869,864,871,859,895,850);
							ctx.bezierCurveTo(913,843,920,835,916,822);
							ctx.bezierCurveTo(914,813,909,775,905,738);
							ctx.bezierCurveTo(898,661,894,659,821,685);
							ctx.bezierCurveTo(798,693,781,696,784,691);
							ctx.bezierCurveTo(793,678,771,615,751,593);
							ctx.bezierCurveTo(740,582,733,571,735,569);
							ctx.bezierCurveTo(737,567,729,565,717,564);
							ctx.bezierCurveTo(705,564,579,531,437,492);
							ctx.bezierCurveTo(244,439,171,414,148,395);
							ctx.bezierCurveTo(132,381,115,370,111,370);
							ctx.bezierCurveTo(98,370,79,320,50,208);
							ctx.bezierCurveTo(34,148,26,100,31,100);
							ctx.bezierCurveTo(96,100,461,170,454,181);
							ctx.bezierCurveTo(451,186,456,187,464,184);
							ctx.bezierCurveTo(472,181,514,188,557,201);
							ctx.bezierCurveTo(691,238,779,229,816,172);
							ctx.bezierCurveTo(827,156,835,118,838,73);
							ctx.lineTo(843,0);
							ctx.lineTo(1319,0);
							ctx.bezierCurveTo(1677,0,1799,3,1808,12);
							ctx.bezierCurveTo(1825,29,1823,96,1804,136);
							ctx.bezierCurveTo(1784,177,1798,173,1410,251);
							ctx.bezierCurveTo(1242,285,1101,316,1096,321);
							ctx.bezierCurveTo(1076,339,1103,344,1167,333);
							ctx.bezierCurveTo(1204,326,1235,322,1235,323);
							ctx.bezierCurveTo(1236,324,1221,367,1202,417);
							ctx.bezierCurveTo(1182,473,1164,507,1157,503);
							ctx.bezierCurveTo(1151,500,1150,502,1154,509);
							ctx.bezierCurveTo(1164,524,1141,552,1127,543);
							ctx.bezierCurveTo(1122,540,1120,542,1124,548);
							ctx.bezierCurveTo(1127,554,1119,567,1105,578);
							ctx.bezierCurveTo(1071,605,1050,648,1050,692);
							ctx.bezierCurveTo(1050,712,1047,730,1043,733);
							ctx.bezierCurveTo(1038,735,1041,735,1049,733);
							ctx.bezierCurveTo(1057,731,1060,735,1056,745);
							ctx.bezierCurveTo(1053,754,1054,759,1059,756);
							ctx.bezierCurveTo(1063,753,1089,759,1116,768);
							ctx.bezierCurveTo(1153,782,1166,791,1168,809);
							ctx.bezierCurveTo(1170,822,1167,830,1162,826);
							ctx.bezierCurveTo(1157,823,1155,831,1157,843);
							ctx.bezierCurveTo(1163,872,1112,1032,1100,1025);
							ctx.bezierCurveTo(1094,1022,1093,1026,1096,1034);
							ctx.bezierCurveTo(1104,1054,1065,1077,1009,1085);
							ctx.lineTo(963,1092);
							ctx.lineTo(956,1053);
						ctx.closePath();
						ctx.fill();
						ctx.stroke();
					ctx.restore();
					ctx.save();
						ctx.strokeStyle="rgba(0,0,0,0)";
						ctx.beginPath();
							ctx.moveTo(577,173);
							ctx.bezierCurveTo(534,162,522,155,532,148);
							ctx.bezierCurveTo(542,141,540,140,527,144);
							ctx.bezierCurveTo(517,147,443,137,362,120);
							ctx.bezierCurveTo(281,104,171,85,116,78);
							ctx.bezierCurveTo(9,64,-10,51,29,18);
							ctx.bezierCurveTo(51,1,78,0,426,0);
							ctx.lineTo(800,0);
							ctx.lineTo(800,70);
							ctx.bezierCurveTo(800,132,797,144,775,165);
							ctx.bezierCurveTo(755,186,742,190,693,189);
							ctx.bezierCurveTo(661,188,609,181,577,173);
						ctx.closePath();
						ctx.fill();
						ctx.stroke();
					ctx.restore();
				ctx.restore();
			ctx.restore();
		},
		outside: [
			{ form: 'save' }, 
			{ form: 'restore' }, 
		],
		inside: [
			{ form: 'save' },
			{ form: 'restore'},
		],
		arc: [
			{ form: 'save' },
			{ form: 'restore'},
		],
	},
};

export default { sphinx };