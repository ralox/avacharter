/*
	Current Content Section Styles Are:
		(desktop)
		width:952px;
		margin-right: 100px; 

	There are 9 Sections.
*/

//GLOBALS
window.slider = document.getElementById('slider'); //child to the slideshow
window.slideWidth = window.slider.parentNode.clientWidth; //width of each individual slide (same as the parent container)
window.slideGap = 104; //px = right margin + 4 extra to prevent a weird nudge
window.currentPage = 1; //always begin with the first slide
window.navLink = document.getElementById('navigation').children;
window.slideMove = window.slideWidth + window.slideGap;

var nextBtn = document.getElementById('next');
var backBtn = document.getElementById('back');
var domain = String(window.location);


//AUTO-RUN ON-LOAD
if (domain.indexOf('pearl') >= 0){
    var c1 = document.getElementById('contact1');
    var c2 = document.getElementById('contact2');
    var tagline = document.getElementsByTagName('H2')[0];
    c1.style.visibility = 'visible';
    c2.style.visibility = 'visible';
    tagline.innerHTML = "Pearl Yachting Monaco";
}


//EVENTS
nextBtn.onclick = function () {
    shiftNext();
};

backBtn.onclick = function () {
    shiftBack();
};

//assign the "shiftToTarget" function to all of the navigational links
for (var i = 0; i < window.navLink.length; i++){
	window.navLink[i].onclick = (function () {
		var currentLink = i;
		return function(){
			shiftToTarget(currentLink);
		}
	})();
}


//FUNCTIONS

function shiftToTarget(linkNum){

	//remove the "active" class from all nav links
	for (var i = 0; i < window.navLink.length; i++){
		window.navLink[i].className = window.navLink[i].className.replace( /(?:^|\s)active(?!\S)/g , '' )
	}
	//add the "active" class to the link being clicked
	window.navLink[linkNum].className += " active";
	window.currentPage = linkNum+1;  //make this the current page (base 1)
	
	setSlidePosition();//move to the target slide
}

function getSlidePostion() { //figure out where the slideshow sits (relative position in px)
    var currentPosition = parseInt(window.slider.style.left);
    if (isNaN(currentPosition)) {
        currentPosition = 0;
    }
    return currentPosition;
}

function setSlidePosition(){
	var pageNum = window.currentPage - 1;//math is base zero, page counts are base 1
	window.slider.style.left = (-1 * (pageNum * window.slideMove)) + 'px';
}

function shiftNext() {
	//Iterate to the next page
    if (window.currentPage < window.slider.childElementCount) { //if on the last page, don't shift forward
        //var slidePosition = getSlidePostion();
        //slidePosition += -1 * window.slideMove;
        //window.slider.style.left = slidePosition + 'px'; //move left by one full slide
        window.currentPage += 1;
    } else {
        window.currentPage = 1 //go back to the beginning
        //window.slider.style.left = 0;

    }
    setSlidePosition(); //move the slides
}

function shiftBack() {
	//Iterate to the previous page
    if (window.currentPage > 1) { //if on the first page, don't shift backward
        //var slidePosition = getSlidePostion();
        //slidePosition += window.slideMove;
        //window.slider.style.left = slidePosition + 'px'; //move right by one full slide
        window.currentPage += -1;
    } else {
    	window.currentPage = window.slider.childElementCount; //go to the end
    	//window.slidePosition = -1 * (currentPage-1) * (window.slideWidth + window.slideGap);
    	//window.slider.style.left = window.slidePosition + 'px'; //move right by 8 full slides
    }
    setSlidePosition(); //move the slides
}
