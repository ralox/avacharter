/* Function Definitions */
function closeOverlay(e) {
	$(e.target).closest('.overlay').addClass('hidden');
}

function setupRequestForm(){
	$('.close').on('click', function(e){
		closeOverlay(e)
	});
};


/* Immediate Execution */
;(function () {
	if (window.location.host.indexOf('pearl') >= 0){
		$('.contact').removeClass('hidden');
		$('.logo-tagline').text('Pearl Yachting Monaco');
		$('.request-dialog-overlay').load('request-form.php', function(){
			setupRequestForm();
		});
	}
}());

/* Execute when page is ready */
$(document).ready(function(){
	
	$('.details-trigger').on('click', function(){
		$('.details-reveal').toggleClass('slideHidden-vertical');
		$('.details-trigger').toggleClass('hidden');
	});
	
	// Create trigger for each thumbnail in the Gallery
	$('.img-thumb').on('click',function(){
		if (window.scrollY > 50) {
			window.scroll(0,50);
		}
		$('#full-photo').find('img').remove();
		$('#full-photo')
			.attr('data-order',$(this).attr('data-order'))
			.append('<img src=' + $(this).attr('data-src') + '></img>');
		$('.gallery-overlay').removeClass('hidden');
	});
	
	// Close an 'overlay'...dialog box
	$('.close').on('click',function(e){
		closeOverlay(e);
	});
	
	// Define Next & Back gallery navigation within dialog
	$('.next').on('click',function(){
		var current = $('#full-photo').attr('data-order');
		var target = parseInt(current) + 1;
		$('div[data-order="' + target + '"]').click();
	});
	
	$('.previous').on('click',function(){
		var current = $('#full-photo').attr('data-order');
		var target = parseInt(current) - 1;
		$('div[data-order="' + target + '"]').click();
	});
	
	//Create listener for request dialog
	$('.request').on('click',function(){
		window.scroll(0,0);
		var today = new Date();
		var year = today.getFullYear(),
			month = ("0" + (today.getMonth() + 1)).slice(-2),
			day = ("0" + (today.getDate() + 1)).slice(-2);
		// Make sure a request can be made only as early as tomorrow
		// and that the end of the charter is after the beginning
		$('#start-date')
			.attr('min',year + '-' + month + '-' + day)
			.on('change',function(){
				var startDate = new Date($(this).val()),
					startYear = startDate.getFullYear(),
					startMonth = ("0" + (startDate.getMonth() + 1)).slice(-2),
					startDay = ("0" + (startDate.getDate() + 1)).slice(-2);			
				$('#end-date').attr('min',startYear + '-' + startMonth + '-' + startDay);
			})
		;
		// Reveal the form and set focus at the beginning
		$('.request-dialog-overlay').removeClass('hidden');
		$('#description').focus();
	});
	
	//Create listener for request form
	$(document).on('submit','form',function(e){
		//remove any old feedback
		$('.feedback').remove();
		e.preventDefault();
		//Create an array of input values
		var data = $(this).serializeArray();
		//Do the ajax request
		$.post('request-email.php',data,function(responseMessage){
			//Call resetForm function
			$(this).find('input:text, textarea').val('');; 
			//Alert your message
			$('.request-dialog-content').append(responseMessage);
		});

	});
});