<?
  header("Access-Control-Allow-Origin: *");
  $mysqli = new mysqli('localhost','vladle43_0201','8O&Zjowm','vladle43_0201');
  $id = $_POST['id']; // Получаем идентификатор поста от клиента
  $result = $mysqli->query("SELECT * FROM blog WHERE id=$id"); // Выбор поста из БД по ID
  echo json_encode($result->fetch_assoc());
?>