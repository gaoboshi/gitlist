<?php
// 接收用户名
$account = $_POST['account'];

if($account === 'admin888') {
	$result = array('status'=>200, 'info'=>'帐号验证成功');
} else {
	$result = array('status'=>400, 'info'=>'帐号验证失败');
}
echo json_encode($result);