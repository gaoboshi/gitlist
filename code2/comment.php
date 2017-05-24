<?php
$data = array(
	array(
		"id" => 1,
		"username" => '马晓华',
		"content"  => '这件衣服不错，我很喜欢！',
		"date"     => '2017-04-12 12:25',
	),
	array(
		"id" => 2,
		"username" => '马德华',
		"content"  => '我不去！',
		"date"     => '2016-04-24 02:25',
	),
	array(
		"id" => 3,
		"username" => '马冬梅',
		"content"  => '你讨厌我吗？',
		"date"     => '2016-08-15 09:36',
	),
	array(
		"id" => 4,
		"username" => '马云',
		"content"  => '梦想还是要有的，万一实现了呢！',
		"date"     => '2017-11-23 14:22',
	),
	array(
		"id" => 5,
		"username" => '马化腾',
		"content"  => '游戏玩的不够爽？',
		"date"     => '2017-11-23 21:19',
	),
	array(
		"id" => 6,
		"username" => '马伊俐',
		"content"  => '且行且珍惜！',
		"date"     => '2017-09-11 14:35',
	),
	array(
		"id" => 7,
		"username" => '码农',
		"content"  => '-------！',
		"date"     => '2017-08-24 18:39',
	)
);

$data = array_chunk($data, 2);
// 每页显示两条数据
$page = $_GET['page'];

echo json_encode($data[$page-1]);