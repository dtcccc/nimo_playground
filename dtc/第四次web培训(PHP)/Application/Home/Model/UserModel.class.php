<?php
namespace Home\Model;
use Think\Model;
class UserModel extends Model {
	function register($uname,$pwd){
		return $this->add(['username' => $uname, 'password' => $pwd]);
	}
	function login($uname,$pwd){
		return $this->where(['username' => $uname, 'password' => $pwd])->find();
	}
}