<?
  header("Access-Control-Allow-Origin: *");
  header('Content-type: text/html; charset=utf-8');
  $uri = explode('/',$_SERVER["REQUEST_URI"]);
  require_once('php/db.php'); // Параметры подключения к БД
    require_once("php/classes/simple_html_dom.php");
  require_once('php/classes/Blog.php');
  if($uri[1]=='getPosts'){
    Blog::getPosts();
  }else if($uri[1]=='getPost'){
    Blog::getPost($_POST['id']);
  }else if($uri[1]=='addCategory'){
    Blog::addCategory($_POST['category']);
  }else if($uri[1]=='getCategory'){
    Blog::getCategory();
  }else if($uri[1]=='addPost'){
    Blog::addPost($_POST['title'],$_POST['text'],$_POST['author'],$_POST['category'],$_POST['newCategory']);
  }
  else{
    require_once("index.html");
  }
  
  
?>