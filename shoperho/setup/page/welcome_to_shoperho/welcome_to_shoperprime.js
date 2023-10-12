frappe.pages['welcome-to-shoperprime'].on_page_load = function(wrapper) {
	var parent = $('<div class="welcome-to-shoperprime"></div>').appendTo(wrapper);

	parent.html(frappe.render_template("welcome_to_shoperho", {}));

	parent.find(".video-placeholder").on("click", function() {
		window.shoperho_welcome_video_started = true;
		parent.find(".video-placeholder").addClass("hidden");
		parent.find(".embed-responsive").append('<iframe class="embed-responsive-item video-playlist" src=" " allowfullscreen></iframe>')
	});

	// pause video on page change
	$(document).on("page-change", function() {
		if (window.shoperho_welcome_video_started && parent) {
			parent.find(".video-playlist").each(function() {
				this.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
			});
		}
	});
}
