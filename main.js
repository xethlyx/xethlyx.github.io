$(".main-container").scroll(function() {
	var navbar = $(".navbar");

    if(navbar.offset().top == 0) {
		navbar.removeClass("docked");
    } else {
		if (!navbar.hasClass("docked")) {
			navbar.addClass("docked");
		}
    }
});

window.onload = function() {
	$(".main-container").removeClass("body-not-loaded");
	$(".loader").addClass("hidden");
};