<?php
// 接收密码
$password = $_POST['password'];

if($password === 'admin777') {
	$result = array('status'=>200, 'info'=>'密码验证成功');
} else {
	$result = array('status'=>400, 'info'=>'密码验证失败');
}
echo json_encode($result);