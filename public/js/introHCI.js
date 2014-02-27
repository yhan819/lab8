'use strict';

var starttime;
var clicked;
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	starttime = new Date().getTime();
	console.log(starttime);
	clicked = false;
	$(".likeBtn").click(function(e) {
		var time = (new Date().getTime() - starttime) / 1000;
		ga('send','event','like','click');
		if (!clicked) {
			ga('send','timing','userAction','To Click', time, 'user');
			clicked = true;
		}
	});
}