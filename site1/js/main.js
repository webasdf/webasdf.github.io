$(document).ready(function() {
	"use strict"

			// -Scroll to-
	$('a[href^="#"]').click(function(){
		let target = $(this).attr('href');
		$('html, body').animate(
				{
					scrollTop: $(target).offset().top
				},
				800
			);
	});

	//  fixed menu
	var offset = $('#bot_header').offset();

	$(window).scroll(function(){
		if( $(window).scrollTop() > offset.top) {
			$('#bot_header').addClass('fixedNav');	
		} else {
			$('#bot_header').removeClass('fixedNav');
		}
	});

	//
	
	$("#works_grid").mixItUp();

	$(".s_works li").click(function(){
		$(".s_works li").removeClass("active");
		$(this).addClass("active");
	});

	$(".popup_content").magnificPopup({
		type: "inline",
		midClick: true,
		closeOnContentClick: true,
	});

	$(".popup_call").magnificPopup({
		type: "inline",
		midClick: true,
		closeOnContentClick: true,
	});

	$(".work-item").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".work_item_desrc").attr("id", "work_" + i);
	});




});