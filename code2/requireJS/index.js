require.config({
	paths: {
		jquery: 'js/libs/third/jquery/jquery',
		sum: 'js/our/sum',
		number: 'js/our/number',
	}
});
// 加载jquery模块
require(['jquery', 'sum'], function ($, sum) {
	console.log(2);
	$(function () {
		$('#btn').click(function () {
			// $('body').css('background', 'red');
			console.log(sum('4', '7'));
		});
	});
});
console.log(1);