<?php
if(isset($_POST['submit'])){
    $name = $_POST['firstname'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $myfile = file_put_contents('responses.txt', $name.PHP_EOL , FILE_APPEND | LOCK_EX);
    $myfile = file_put_contents('responses.txt', $email.PHP_EOL , FILE_APPEND | LOCK_EX);
    $myfile = file_put_contents('responses.txt', $subject.PHP_EOL , FILE_APPEND | LOCK_EX);
    echo "<script>alert('Feedback submitted Successfully..Thank you for valuable feedback')</script>";
    header("Location:main.html");
}
?>