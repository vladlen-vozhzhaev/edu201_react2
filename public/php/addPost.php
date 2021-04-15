<?
  header("Access-Control-Allow-Origin: *");
  require_once("classes/simple_html_dom.php");
  $html = new simple_html_dom();
  $mysqli = new mysqli('localhost','vladle43_0201','8O&Zjowm','vladle43_0201');
  $title = $_POST['title'];
  $text = $_POST['text'];
  $author = $_POST['author'];
  $html->load($text);
  $element = $html->find("img",0);
  echo $element->src;

  /*$mysqli->query("INSERT INTO `blog`(`title`, `text`, `author`) VALUES ('$title','$text','$author')");
  echo json_encode(['result'=>'success']);*/
?>