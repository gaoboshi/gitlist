<?php
// 引入数据文件
$aData = require_once('data.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>后台首页</title>
	<style type="text/css">
		* {
			margin: 0;
			padding: 0;
		}
		h2{
			line-height: 60px;
			text-align: center;
		}
		#list li {
			padding-left: 10px;
			line-height: 30px;
			border-top: 1px dashed #ccc;
		}
	</style>
</head>
<body>
	<h2>后台首页</h2>
	<ul id="list">
		<?php foreach($aData as $v){ ?>
		<li><?php echo $v['title']; ?></li>
		<?php } ?>
	</ul>
</body>
</html>