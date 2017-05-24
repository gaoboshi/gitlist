/**
定义求和的模块
*/
define(['number'], function (num) {
	return function (x,y) {
		return num(x) + num(y);
	};
});