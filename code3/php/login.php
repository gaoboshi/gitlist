<?php

// 接收前台发送过来的数据
$account  = $_POST['account'];
$password = $_POST['password'];


// 检测用户是否登录成功
require_once('Login.class.php');
// 实例化Login对象
$login = new Login();

$bBtn = $login->checkLogin($account, $password);

if($bBtn) {
	$url = 'index.php';
} else {
	$url = 'login.html';
}
?>
<script type="text/javascript">
	//location.href= '<?php echo $url; ?>';
</script>