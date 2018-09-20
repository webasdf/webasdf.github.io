$(function(){

	"use strict";
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
	var offset = $('#bottom_header').offset();

	$(window).scroll(function(){
		if( $(window).scrollTop() > offset.top) {
			$('#bottom_header').addClass('fixedNav');	
		} else {
			$('#bottom_header').removeClass('fixedNav');
		}
	})

	// slick slider 
	if( window.innerWidth > 995){
			$('#slide').slick({
			slidesToShow: 3,
			slidesToSrcroll: 1,
			autoplay: false,
			autoplaySpeed: 2000,
		});
		}else{
			$('#slide').slick({
			slidesToShow: 1,
			slidesToSrcroll: 1,
			autoplay: false,
			autoplaySpeed: 2000,
		});
	}

	
// view more images
$('#view_all_gallery').click(function(){
	let content = '<div class="wrap_line main_flex__nowrap flex__jcontent_center"><div class="box_img_gallery"><img src="img/1lg.jpg" alt=""></div><div class="box_img_gallery"><img src="img/2lg.jpg" alt=""></div></div><div class="name_gallery"><p>Marina Palms / <span class="blue">North Miami Beach, FL 33162</span></p></div>';
	
	$('#gallery_box').append(content);
	$(this).remove()
});

$('#modal_box, #black_fill').hide();

$('#call').click(function(){
	$('#modal_box, #black_fill').show();
})

$('#close_modal, #black_fill').click(function(){
	$('#modal_box, #black_fill').hide();
})


});