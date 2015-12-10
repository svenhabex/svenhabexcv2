$(document).ready(function(){

	$('.hero-text').addClass('fadein-up');
	$('.logo').addClass('fadein-down');

});

/*$(window).load(function(){

	$('.hero').addClass('zoom');
});*/


$(window).scroll(function(){

	var wScroll = $(this).scrollTop();

	/*$('.hero-text').css({
		'transform' : 'translate(0px, '+ wScroll/2.7 +'%)';
	});*/
	

	//profile text and picture slide in
	if(wScroll > $('#profile').offset().top - ($(window).height()/1.55)){

		$('.about').addClass('is-showing');

		setTimeout(function(){
			$('.details').addClass('is-showing');
		}, 200);

		setTimeout(function(){
			$('.profielfoto').addClass('is-showing');
		}, 350);
	}


	//experience text slide in
	if(wScroll > $('#experience').offset().top - ($(window).height()/1.55)){

		$('.experience-section').each(function(i){

			setTimeout(function(){
				$('.experience-section').eq(i).addClass('is-showing');
			}, 100 * (i+1));
		});
	}

});