<?php
// 单行注释
#  单行注释
/*
	多行注释
*/
//声明变量
// $name;

// 接收来自前台的数据
// print_r($_POST);
// print_r($_GET);
// print_r($_REQUEST);
// print_r($_COOKIE);


// 数据类型
/*$name = array();
echo getType($name);*/
// 运算符
/*$name = '张三';
$age = 28;

echo $name . $age;*/
// 包含文件
// include 'day-21-2.php';
//include_once 'day-21-1.php';
/*require 'day-21-1.php';
require_once 'day-21-1.php';*/
// echo 'hehehe';
// 自定函数
/*function sayName($name) {
	echo $name;
}
sayName('张三');*/

/*$name = '李四';
function sayName() {
	$name = '张三';
	echo $name;
}
sayName();*/

// $name = '王武';
// $students = array('哈哈', '呵呵', '嘿嘿');
// print_r($students);
// var_dump($students);
// echo strlen($students[0]);
// 数组
// $aArr = array('张安', '李四', '无奈噶哈');
$aArr = array();
/*$aArr[0] = '张三';
$aArr['age'] = 28;*/
array_push($aArr, '李四', '张武');
/*$aArr[0] = '李六';

unset($aArr[1]);*/
foreach($aArr as $k => $v){
	echo $k.$v.'、';
}
// print_r($aArr);
?>