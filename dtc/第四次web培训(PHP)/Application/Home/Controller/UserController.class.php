<?php
namespace Home\Controller;
use Think\Controller;
class UserController extends Controller {
    public function index(){
		$this->assign('username',$_SESSION['username']);
		$this->display();
    }
	public function login(){
		session_start();
		if($_POST){
			$uname = $_POST['username'];
			$pwd = $_POST['password'];
			$model = new \Home\Model\UserModel();
			$data = $model->login($uname,$pwd);
			if($data){
				echo '欢迎您，'.$data['username'];
				$_SESSION['username']=$data['username'];
			}
			else echo '登陆失败';
		}
		else $this->display();
	}
	public function register(){
		if($_POST){
			$uname = $_POST['username'];
			$pwd = $_POST['password'];
			$model = new \Home\Model\UserModel();
			$data = $model->register($uname,$pwd);
			if($data) echo '注册成功';
			else echo '注册失败';
		}
		else $this->display();
	}
}
