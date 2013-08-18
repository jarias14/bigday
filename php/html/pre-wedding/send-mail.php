<?php

/* ==============================================
Variables you can change
============================================== */

$mailto = 'jarias14@gmail.com'; // Enter your mail addres here. 
$subject = 'The Big Day'; // Enter the subject here.

$error_message = 'Error sending your message'; // Message displayed if an error occurs
$success_message = 'Message Sent'; // Message displayed id the email has been sent successfully


/* ==============================================
Do not modify anything below
============================================== */
$_POST['email'] = "rsvp@laurenthandjorge.com";
$name = stripcslashes($_POST['name']);
$emailAddr = stripcslashes($_POST['email']);
$message = stripcslashes($_POST['message']);
$headers = "From: $name <$emailAddr>" . "\r\n" . "Reply-To: $emailAddr" . "\r\n" . "X-Mailer: PHP/" . phpversion();

function validateEmail($email) {
   if(preg_match("/^[_\.0-9a-zA-Z-]+@([0-9a-zA-Z][0-9a-zA-Z-]+\.)+[a-zA-Z]{2,6}$/i", $email))
	  return true;
   else
	  return false;
}

if((strlen($name) < 1 ) || (strlen($emailAddr) < 1 ) || (strlen($message) < 1 ) || validateEmail($emailAddr) == FALSE ) {

	echo($error_message);

} else {

	if( mail($mailto, $subject, $message, $headers) ) {
		
		echo($success_message);

	} else {

		echo($error_message);

	}
	

}

?>