;(function () {
	if (window.location.host.indexOf('pearl')){
	    $('.contact').removeClass('hidden');
	    $('.logo-tagline').text('Pearl Yachting Monaco');
	}
}());

$(document).ready(function(){
	
	var setImages = function(){
		function setBackground(target){
			var source = $(target).data('image');
			$(target).css('background-image','url('+source+')');
		}
		
		$.map( $('.cover-image'), function( i ) {
			setBackground(i);
		});
	};
	
	setImages();
});