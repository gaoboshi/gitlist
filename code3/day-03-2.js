window.onload = function () {
	var
		oBox = document.getElementById('box');

	// console.dir(oBox);
	oBox.onclick = function () {

		/*console.log('输出普通信息');
		console.warn('输出警告信息');
		console.info('输出提示性的信息');
		console.error('输出错误信息');
		console.debug('输出调试信息');*/

		/*console.group();
		console.log('这是第一条信息！');
		console.info('这是第二条信息！');
		console.groupEnd();*/

		/*console.time('count');
		for(var i = 0; i < 1000000; i++) {}
		console.timeEnd('count');*/

	 	// console.assert(2 == 1, '表达式错误！');
		/*for(var i = 0; i < 4; i++) {
			alert(i);
		}*/

		/*var bBtn = false;

		if(bBtn) {
			alert(1);
		} else {
			console.error('程序出现致命的错误！');
		}*/


		/*function a() {
			console.count();
			console.log('a');
		}


		a();
		a();
		a();*/

		// document.write、alert、console
		// document.write 将信息输出到页面上去，如果是在window.onload以后执行该方法，那么会覆盖页面原有的内容
		// alert 以一个弹出框的形式显示内容
		// console 将信息显示在调试面板
	};
};