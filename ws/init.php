<?php
session_start();

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers:Content-Type');
header("Content-Type:application/json");

require 'php-activerecord/ActiveRecord.php';

$rootDir=dirname(__FILE__);

$db = ActiveRecord\Config::instance();
$db->set_model_directory($rootDir.'/model');
        
$input = json_decode(file_get_contents("php://input"));
$func = $_GET['func'];

$current_id=isset($_GET['code'])?$_GET['code']:session_id();

// Change the password
$password = "pass";

if(($_GET['pass']!=md5($password) && $func!="try")){
    echo '{ "status" : "error" }';
    exit(1);
}  elseif(($func=="try" && $_GET['pass']==$password)) {
    echo '{ "status" : "ok" , "password" : "'.md5($password).'"}';
    exit(1);
}

$db->set_connections(array('development' => "sqlite://elephant.db"));
$db->set_default_connection('development');