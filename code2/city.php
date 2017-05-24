<?php
$id = $_GET['id'];
$city = array(
	'1' => array(
		array(
			"id" => 1,
			"name" => '郑州'
		),
		array(
			"id" => 2,
			"name" => '安阳'
		)
	),
	'2' => array(
		array(
			"id" => 3,
			"name" => '石家庄'
		),
		array(
			"id" => 4,
			"name" => '保定'
		)
	)
);

echo json_encode($city[$id]);