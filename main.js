;(function () {
	if (window.location.host.indexOf('pearl')){
	    $('.contact').css('display','flex');
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
	
	function navClick(){
		$('.nav').click(function(){
			$('.content').load($(this).data('link-to'), function(){
				setImages();
				$('body').scrollTop(0);
				navClick();
				console.log('done dit it');
			});
		});
	};
	
	setImages();
	navClick();
});