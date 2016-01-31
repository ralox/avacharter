<div class="request-dialog">
	<div class="overlay-action-bar">
		<button class="close overlay-action">close</button>
	</div>
	<div class="request-dialog-content">
		<div class="request-dialog-title">
			<h2>Request a Charter</h2>
		</div>
		<form class="request-form" action="request-email.php" method="POST">
			<div class="description-input">
				<div class="form-question">What can we do for you?</div>
				<div class="form-input description">
					<textarea name="description" id="description" required="true"></textarea>
				</div>
				<div class="dates">
					<div class="form-input">
						<label for="start-date">Dates</label>
						<input type="date" name="start-date" id="start-date"></input>
						<div class='to'>to</div>
						<input type="date" name="end-date" id="end-date"></input>
					</div>
				</div>
			</div>
			<div class="contact-input">
				<div class="form-question">Whom should we contact?</div>
				<div class="form-input contact-name">
					<label for="name">Name</label>
					<input type="text" name="name" id="name" required="true"></input>
				</div>
				<div class="form-input email">
					<label for="email">Email</label>
					<input type="email" name="email" id="email" required="true"></input>
				</div>
				<!--
				<div class="form-input phone">
					<label for="phone">Phone</label>
					<input type="tel" id="phone"></input>
				</div>
				-->
			</div>
			<div class="g-recaptcha form-input" data-sitekey="6Lcl6BYTAAAAAPjmz0iWDu1EAkp0hHaDpfftqrnq"></div>
			<div class="buttons">
				<button type="submit" id="send-request" class="primary-button">Send Request</button>
			</div>
		</form>
	</div>
</div>
<div class="overlay-cover"></div>