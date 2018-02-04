$(document).ready(function(){

	$('.slides').slick({
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 10000,
		arrows: false,
		focusOnSelect: false,
	});

	$('.sidebar-banner-slick').slick({
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 10000,
		arrows: false,
		focusOnSelect: false,
	});

	$('.hamburger').click(function(){
		if($('.hide-menu').css('opacity') == '0'){
			$('.hide-menu').css('opacity', '1');

			// скрытие границ у меню элементов
			//$('.test').css('border', 'none');
			//$('.hamburger').css('border', 'none');
		}

		else{
			$('.hide-menu').css('opacity', '0');

			// добавление границ у меню элементов
			//$('.test').css('border-left', '1px solid #2e303c');
			//$('.test-last').css('border-right', '1px solid #2e303c');
			//$('.hamburger').css('border-left', '1px solid #2e303c');
			//$('.hamburger').css('border-right', '1px solid #2e303c');
		}
	});
});