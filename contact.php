<?php
$name= $_POST['name'];
$mail= $_POST['mail'];
$message= $_POST['message'];

$to 			= "jeremy.lecoz@hotmail.fr";
$subject 		= "mail from my website";
$body 			= "Information Mail:";

$body .= "\r\n Nom: " . $name;
$body .= "\r\n mail: " . $mail;
$body .= "\r\n Message: " . $message;
mail($to, $subject, $body);
?>