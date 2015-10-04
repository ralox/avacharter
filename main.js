;(function () {
	if (window.location.host.indexOf('pearl') >= 0){
	    $('.contact').removeClass('hidden');
	    $('.logo-tagline').text('Pearl Yachting Monaco');
	}
}());

$(document).ready(function(){
	
	$('.details-trigger').on('click', function(){
		$('.details-reveal').toggleClass('slideHidden-vertical');
		$('.details-trigger').toggleClass('hidden');
	});
	
	/*
	var setImages = function() {
		function setBackground(target){
			var source = $(target).data('image');
			$(target).css('background-image','url('+source+')');
		}
		
		$.map( $('.cover-image'), function( i ) {
			setBackground(i);
		});
	};
	
	setImages();
	*/
});