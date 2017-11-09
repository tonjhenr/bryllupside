$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	if(wScroll > $('.two-columns').offset().top) {
		
		$('.two-column-item .forlover-info').each(function(){
			$('.two-column-item .forlover-info').addClass('is-showing');
			console.log('done');
			
		});
	}
	
});
