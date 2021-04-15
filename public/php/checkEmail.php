<?
  header("Access-Control-Allow-Origin: *");
  $mysqli = new mysqli('localhost','vladle43_0201','8O&Zjowm','vladle43_0201');
  $email = trim(mb_strtolower($_POST['email']));
  if($result->num_rows){
    echo json_encode(['result'=>'exist']);
  }else{
    echo json_encode(['result'=>'not found']);
  }