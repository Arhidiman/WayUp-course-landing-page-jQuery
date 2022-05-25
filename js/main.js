$(function ()   {
	$('.title').addClass('fadeInLeft')

	setTimeout(function () {
	         $('.intro').addClass('fadeInLeft')
	   
	        }, 500);

	setTimeout(function () {
	         $('.btn').addClass('fadeInLeft')
	   
	        }, 1000);


	$('.items').addClass('fadeInRight');
	
	$(window).scroll(function()  {
			$('.result-time').each(function() {
				var elPos = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();
				if (elPos < topOfWindow + 700) {
					$(this).addClass('fadeInDown');
					setTimeout(function () {
		         		$('.result-travel').addClass('fadeInDown')
		   
		        }, 500);
					setTimeout(function () {
		         		$('.result-value').addClass('fadeInDown')
		   
		        }, 1000);
			}
		})

	})

	$('#header-button').on('click', ()=>{
		let transition = $('#expect').offset().top;
		$('html').animate({'scrollTop':transition}, 'slow');
	})
})
