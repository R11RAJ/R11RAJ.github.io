<?php
$action = $_GET["action"];
$myText = $_POST["mytext"];

if($action = "save") {
  $targetFolder = "/";
  file_put_contents($targetFolder."responses.txt", $myText);
}
?>
