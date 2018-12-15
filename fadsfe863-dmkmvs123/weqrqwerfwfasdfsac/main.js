$(document).ready(function(){


//------------------ 737 ------------------ 
$('#ac-11').click(function(){

	if($('#ac-33').is(':checked')){
		$('.st17').toggleClass('opacity');
		$('.seats-space-descr').toggle();
	} else {
		$('.st0,.st1,.st2,.st3,.st4,.st5,.st6,.st7,.st8,.st9,.st10,.st11,.st12,.st13,.st14,.st15, .st16').toggleClass('opacity');
		$('.seats-space-descr').toggle();
	}
});

$('#ac-33').click(function(){

	if($('#ac-11').is(':checked')){
		$('.st16').toggleClass('opacity');
		$('.seats-front-descr').toggle();
	}else {
		$('.st0,.st1,.st2,.st3,.st4,.st5,.st6,.st7,.st8,.st9,.st10,.st11,.st12,.st13,.st14,.st15,.st17').toggleClass('opacity');
		$('.seats-front-descr').toggle();
	}
});
//------------------ 747 --------------------------------------------------

$('#ac-1').click(function(){

	if($('#ac-3').is(':checked')){
		$('.seats-space-747').toggleClass('opacity');
	
	} else {
		$('.ccls-1,.ccls-2,.cls-3,.cls-4,.cls-5,.cls-6,.cls-7,.cls-8,.cls-12,.cls-13,.cls-17,.cls-19,.cls-20,.cls-21,.cls-22,.cls-23,.cls-24,.cls-25,.cls-26').toggleClass('opacity');
	}
});


$('#ac-2').on('click', function(){
	$('#upper-deck').toggle();
	$('#bort-747').toggleClass('display_none');
});

$('#upper-deck').toggleClass('display_none');

$('#ac-3').click(function(){

	if($('#ac-1').is(':checked')){
		$('.seats-azone-747').toggleClass('opacity');
	
	} else {
		$('.ccls-1,.ccls-2,.cls-3,.cls-4,.cls-5,.cls-9,.cls-10,.cls-11,.cls-12,.cls-13,.cls-14,.cls-15,.cls-16,.cls-18,.cls-19,.cls-20,.cls-21,.cls-22,.cls-23,.cls-24,.cls-25,.cls-26').toggleClass('opacity');
		
	}
});



//--------------------------------------------------------------------------------

$('#ac-44').click(function(){
	$('.scheme-wrap-737 svg, .seats-front').toggleClass('opacity');
})

if( $(window).scrollTop() < 1000){
	$('.scheme-wrap-737, .scheme-wrap-747').addClass('fixedBlock');
} else {
	$('.scheme-wrap-737, .scheme-wrap-737').removeClass('fixedBlock');
}

$('.seats-space-descr, .seats-front-descr').hide()



})