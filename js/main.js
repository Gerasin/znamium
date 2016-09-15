$(document).ready(function() {

	$('.head__search-select .dropdown-menu a').on('click', function () {
		$(this).parents('.head__search-select').find('.select_head').text($(this).text());
		$(this).parents('.dropdown-menu').find('a').removeClass('active');
		$(this).addClass('active');
	});

	$('.js-slider').owlCarousel({
	    rtl:true,
	    loop:true,
	    margin:40,
	    nav:true,
	    items:3
	});

	$('.js-footer-padding').css({ 'min-height' : $('.js-footer').height() + 63 });

	$('.js-searc-open').on('click', function () {
		if($(this).hasClass('active')) { 
			$('.head__search-footer').fadeOut();
			$(this).removeClass('active');
		} else {
			$('.head__search-footer').fadeIn();
			$(this).addClass('active');
		};
		return false;
	});
	$('.js-search-reset').on('click', function () {
		$('.head__search-footer').fadeOut();
		$('.js-searc-open').removeClass('active');
		return false;
	});

	$('.js-datepicker').datepicker({
	    format: "mm-dd-yyyy",
	    clearBtn: true,
	    language: "ru",
	    autoclose: true
	});


	
	$('.js-alphabet a').on('click', function () {
		$('.js-alphabet a').removeClass('active');
		$(this).addClass('active');
		$('.alphabet-two').hide();
		$($(this).attr('href')).css({'display': 'inline-block'});
		$('.alphabet-pointer').hide();
		$(this).parent().next('.alphabet-pointer').show();
		return false;
	});
	$('.js-alphabet-two a').on('click', function () {
		$('.js-alphabet-two a').removeClass('active');
		$(this).addClass('active');
		return false;
	});

	$('.catalog__item-ico').on('click', function () {
		if($(this).hasClass('active')) {
			$('.catalog__like-item').hide();
			$('.catalog__item-ico').removeClass('active');
		} else {
			var index = $(this).attr('rel');
			$('.catalog__like-item').hide();
			$('.catalog__item-ico').removeClass('active');

			$(this).parents('.catalog__item-detal').next().find('.catalog__like-item').eq(index).show();
			$(this).addClass('active');
		};
		return false;
	});

	$('.catalog__item-txt').on('click', function () {
		if($(this).hasClass('active')) {
			$(this).find('.catalog__item-txt-open').animate({'opacity' : 0}).css({'display' : 'none'});
			$(this).removeClass('active');
		} else {
			$(this).find('.catalog__item-txt-open').css({'display' : 'inline'}).animate({'opacity' : 1});
			$(this).addClass('active');
		}
		

	});



	function centerModal() {
	  $(this).css('display', 'block');
	  var $dialog = $(this).find(".modal-dialog");
	  var offset = ($(window).height() - $dialog.height()) / 2;
	  $dialog.css("margin-top", offset);
	};
	$('.modal').on('show.bs.modal', centerModal);
	$(window).on("resize", function () {
	    $('.modal').each(centerModal);
	});

	$('.alpabet_lang a').on('click', function () {
		$('.alpabet_lang a').removeClass('active');
		$(this).addClass('active');
		var index = $(this).parent('li').index();
		$('.alpabet-tab__item').hide();
		$('.alpabet-tab__item').eq(index).show();
		return false;
	});

	$('.alpabet-tab__item:not(:first)').hide();


});