<?php
/*
	登录的类
*/
class Login{
	// 帐号列表
	private $accounts = array(
		array(
			'account' => 'admin888',
			'password' => 'admin888',
		),
		array(
			'account' => 'admin777',
			'password' => 'admin777',
		),
		array(
			'account' => 'admin666',
			'password' => 'admin666',
		)
	);
	// 检测用户是否登录成功
	public function checkLogin($account, $password) {
		foreach($this->accounts as $v) {
			// 判断帐号和密码是否正确
			if($v['account'] === $account && $v['password'] === $password) {
				return true;
			}
		}
		return false;
	}
}