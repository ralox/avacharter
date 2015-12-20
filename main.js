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
	
	$('.close').on('click',function(e){
		closeOverlay(e);
	});
	
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
	
	$('.request').on('click',function(){
		$('.request-dialog-overlay').removeClass('hidden');
		
	});
});