window.onscroll = function(ev) {
	if (window.scrollY == 0) {
		$("#header").addClass("header-transparent");
	} else {
		$("#header").removeClass("header-transparent");
	}
};

window.onload = function() {
	$("#main-container").removeClass("body-not-loaded");
	$("#loader").addClass("hidden");
}