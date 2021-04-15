<?
  header("Access-Control-Allow-Origin: *");
  $mysqli = new mysqli('localhost','vladle43_0201','8O&Zjowm','vladle43_0201');
  $id = $_POST['id'];
  $mysqli->query("DELETE FROM `blog` WHERE id=$id;");
  echo json_encode(['result'=>'success']);
?>