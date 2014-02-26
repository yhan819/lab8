'use strict';

var starttime;
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	starttime = new Date().getTime();
	var clicked = false;
	$(".likeBtn").click(function(e) {
		var time = new Date().getTime(); - starttime;
		ga('send','event','like','click');
		if (!clicked) {
			ga('send','timing','userAction','To Click', time, 'user');
			clicked = true;
		}
	});
}