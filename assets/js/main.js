//Nav bar fixed-top animateion jquery use here
$(document).ready(function(){
	$(window).on('scroll',function(){
		if($(window).scrollTop()){
			$('nav').addClass('black');
		}
		else{
			$('nav').removeClass('black');
		}
	});
	/*--OnePageNav menu active color with section change--*/
	$('#nav').onePageNav();
});

//Skill-section=>progress plugin jquery use here
$('#Skill-section').waypoint(function(){
	
	$('.progress .progress-bar').each(function(){
		$(this).css("width", $(this).attr("aria-valuenow") + '%');

	});
}, {
	offset:'50%'
});
//facts-section=>CounterUp plugin jquery use here
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

//Portfolio-section=>use isotope filer plugin jquery here
(function($){
	'use strict';

	var projects = $('.projects');

	projects.isotope({
		itemSelector: '.item',
  		layoutMode: 'fitRows'
	});

	$('ul.filters li').click(function(e){
		e.preventDefault();

		var filter = $(this).attr('data-filter')

		$('ul.filters li').removeClass('active');
		$(this).addClass('active');

		projects.isotope({filter:filter});

		aos_init();
	});
	 //venobox-jquery-plugin use here
	$(document).ready(function(){
    	$('.venobox').venobox(); 
	});

})(jQuery);

//our-clients-section=>use owl-carousel plugin jquery here
$('.clients-carousel').owlCarousel({
	autoplay:true,
	dots:true,
    loop:true,
    responsive:{
        0:{
            items:3
        },
        480:{
            items:5
           
        },
        768:{
            items:6
        }
    }
});

//Testimonials-section=>use owl-carousel plugin jquery here
$('.testimonials-carousel').owlCarousel({
	autoplay:true,
	dots:true,
	loop:true,
	items:1,
});
//back-to-up(button)=>jquery scrollTop plugin use
$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 100){
			$('#back-to-up').fadeIn();
		}
		else{
			$('#back-to-up').fadeOut();
		}
	});

	$('#back-to-up').click(function(){
		$('html,body').animate({
			scrollTop:0
		},2000)
	});
});
//aos-animate library use here
function aos_init(){
	AOS.init({
		duration: 1000,
		easing: "ease-in-out-back",
		once: true
	});
}
$(window).on('load',function(){
	aos_init();
});
//form validate plugin js use here
$(document).ready(function(){
	$("#form").validate({
		rules: {
			your_name: "required",
			your_email: "required",
			message: "required",
			subject: {
				required: true,
				minlength: 5
			},	
		},
		messages: {
			Your_name: "Please enter your name.",
			your_email: "Please enter a valid email.",
			message: "Please write something for us.",
			subject: {
				required: "Please enter your subject.",
				minlength: "plaese enter at least 5 characters of subject."
			},
		}	
	});

});

/*===================================End===================================*/




