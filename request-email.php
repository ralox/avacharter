<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$description = $_POST['description'];
	$startDate = $_POST['start-date'];
	$endDate = $_POST['end-date'];
	$errors = array();
	
	if (empty($description)) {
		$errors['description'] = "We need a description to know what your charter will require.";
	}
	
	if (empty($name)) {
		$errors['name'] = "We need a name so that we know whom we are contacting.";
	}
	
	if (empty($email)) {
		$errors['email'] = "We need an email in order to reach you.";
	}
	
	if(empty($errors)) {
		$to      = 'barne1dr@gmail.com';
		$subject = 'Ava Charter Inquiry';
		$message ="
			<html>
				<body style='font-family:sans-serif;font-size:16px;color:#333;padding:50px'>
					<div style='padding:10px 30px 30px;background:#444;color:#fff'>
						<h1 style='font-weight:normal;font-size:35px;color:#999'>Charter Inquiry</h1>
						<div style='color:#f5c37d;letter-spacing:1px'> $name </div>
						<div style='color:#f5c37d;letter-spacing:1px'> $email </div>
					</div>
					<div style='height:10px;width:100%;background:#F5C37D'></div>
					<div style='padding:30px'>
						<h4 style='font-weight:normal;font-size:20px;color:#999'>Request Details</h4>
						<div>
							$description
						</div>
						<h4 style='font-weight:normal;font-size:20px;color:#999'>Dates</h4>
						<div style='display:inline-block,margin-right:20px'>
							Start: $startDate
						</div>
						<div style='display:inline-block'>
							End: $endDate
						</div>
					</div>
				</body>
			</html>
		";
		
		$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
		
		$headers = 'From: webmaster@pearl-yachting.mc' . "\r\n" .
			"Reply-To: $email" . "\r\n" .
			'Content-Type: text/plain; charset=utf-8' . "\r\n" .
			'X-Mailer: PHP/' . phpversion();
		$success = mail($to, $subject, $message, $headers, '-fjpearlman@pearl-yachting.mc');
	}
	
	if (isset($success) && $success == true) {
		$responseStatus = 'success';
		$response = 'Request Sent.  Thank you for your interest in chartering the Ava.';
	} else {
		$responseStatus = 'failure';
		if (!empty($errors)) {
			$response = implode("<br>",$errors);
		} else {
			$response = "We couldn't get your message through.<br>You can email the captain directly at jpearlman@pearl-yachting.mc";
		}
		
		echo '<div class="feedback ' . $responseStatus . '">' . $response . '</div>';
	}
?>