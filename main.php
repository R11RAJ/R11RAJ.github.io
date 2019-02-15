<html>
<body>
<?php
$name = $_POST['firstname'];
$email = $_POST['email'];
$subject = $_POST['subject'];
echo $name
if($action = 'Submit') {
  $myfile = fopen('responses.txt', 'w') or die('Unable to open file!');
fwrite($myfile, $firstname);
fwrite($myfile, $email);
fwrite($myfile, $subject);
}
?>
</body>
</html>
