// alert('欢迎来到郑州H5-1701班！！！');
// window 浏览器窗口对象
// onload 是window对象身上的一个方法（事件） 当页面加载完毕以后才会执行
// function 是一个没有名字的函数
/*
	多行注释
*/
/**
	文档注释
*/
window.onload = function () {
	document.write('这是通过document.write输出的内容');
	document.write('这是第二句&lt;br/>');
	document.write('这是第三句');

	var class1701, class1702;
	class1701 = 'H5-1701班级';

	// 输入变量到界面上去
	document.write(class1701);

	//驼峰命名法
	var beautifulGirlAndHandsomeBoy;
	// 帕斯卡命名法
	var BeautifulGirlAndHandsomeBoy;
	// 匈牙利命名法
	var sBeautifulGirlAndHandsomeBoy;


	// 定义字符串类型的数据
	var sString = "字符串";
	// 定义数值类型的数据
	var iNum = 1701;
	// 定义布尔类型
	var bBool = true;

	// 定义undefined类型
	var unEmplty;

	// 定义null类型
	var oNull = null;

	// 引用对象类型
	var oPerson = {};

	// 定义函数类型
	var fnFunc = function () {};

	//alert(typeof fnFunc);


	// 算数运算符
	var
		a = '12.3px',
		b = 3;

	/*alert(a + b);
	alert(a);
	alert(b);*/

	// alert(a % b);

	/*alert(a++);
	alert(a);*/

	alert(parseInt(a) + b);

	//alert(Math.round(a / b));

}