<?php
class Animal {
	public $hair = '毛发';
	private $age = 29;
}
class Person extends Animal{
	public $name;
	public $sex;
	// 构造方法
	public function __construct($name, $sex) {
		$this->name = $name;
		$this->sex  = $sex;
	}
	public function introduce() {
		echo '我叫'.$this->name.'，今年'.$this->age.'，性别'.$this->sex;
	}
}

// 实例化
$xiaoHong = new Person('小红', '女');

print_r($xiaoHong);

$xiaoHong->introduce();

//echo $xiaoHong->age;

