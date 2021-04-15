<?
  header("Access-Control-Allow-Origin: *");
  $mysqli = new mysqli('localhost','root','root','vladle43_0201');
  $result = $mysqli->query("SELECT * FROM blog"); // Запрашиваем все посты из БД
  // NULL == false
  // Наличие чего либо это всегда TRUE
  $posts = [];
  while($row = $result->fetch_assoc()){
    $posts[] = $row;
  }
  echo json_encode($posts);
?>