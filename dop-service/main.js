$(document).ready(function(){

	$('#ac-11').click(function(){
		if($('#ac-33').is(':checked')){
			$('.scheme-wrap-737 img').addClass('opacity');
			$('.seats-space, .seats-front').toggleClass('opacity');
			$('.seats-front').removeClass('opacity');
			$('.seats-space-descr').toggle()
		} else {
			$('.scheme-wrap-737 img, .seats-front').toggleClass('opacity');
			$('.seats-space-descr').toggle()
		}
	})

	$('#ac-33').click(function(){
		if($('#ac-11').is(':checked')){
			$('.scheme-wrap-737 img').addClass('opacity');
			$('.seats-space, .seats-front').toggleClass('opacity');
			$('.seats-space').removeClass('opacity');
			$('.seats-front-descr').toggle()		
		} else {
			$('.scheme-wrap-737 img, .seats-space').toggleClass('opacity');
			$('.seats-front-descr').toggle()
		}
	})

	if( $(window).scrollTop() < 1100){
		$('.scheme-wrap-737, .scheme-wrap-747').addClass('fixedBlock');
	} else {
		$('.scheme-wrap-737, .scheme-wrap-737').removeClass('fixedBlock');
	}

	$('.seats-space-descr, .seats-front-descr').hide()


})