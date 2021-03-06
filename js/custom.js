
jQuery(document).ready(function() {
	

	
	//сдвиг лейбла при фокусе на форме
	$('.input_field').each(function(){
	    var $this = $(this);
	    if ($this.val() == '') {
	        $this.removeClass('input_filled');
	    } else {
	        $this.addClass('input_filled');
	    }
	});

	$('.input_field').on('input', function(){
	    var $this = $(this);
	    if ($this.val() == '') {
	        $this.removeClass('input_filled');
	    } else {
	        $this.addClass('input_filled');
	    }
	});


	/* проверка ввода телефона */
		$(function(){
			var $phone = $('input.input_phone'); //, input[name=form_text_39], input[name=form_text_6]

			var $form = $('form');
			$phone.each(function() {
				$(this)	.inputmask("+7 (999) 999-99-99",{autoclear: false, showMaskOnHover: false})
						.removeAttr('required')
						//.wrap("<div class='form-phone_wrap'></div>")
						.parent('.uk-form-row').addClass('form-phone_wrap')
						.append( "<p class='form-phone_error'></p>" );
			});
			var errorTextNoPhone = "Укажите номер телефона",
				errorText = "Введите номер телефона";
			$phone.on('input',function(){
				var $this = $(this);
				if ( $this.val().substr($this.val().length - 1) !== "_" && $this.val().substr($this.val().length - 1) !== "" && $this.val().substr($this.val().length - 1) !== " ")
					$this.addClass('succes');
				else
					$this.removeClass('succes');
			});
			$phone.focusout(function() {
				if( $(this).val().length > 0 && !$(this).hasClass('succes') ){
					$(this)	.addClass('error-border')
							.siblings('.form-phone_error')
							.text(errorText);
					$(this).parent().addClass('error');
				}
			});
			$phone.keyup(function(e) {
				$(this).siblings('.form-phone_error').text(' ');
				$(this).removeClass('error-border')
				.parent().removeClass('error');
			});
			$phone.keyup(function(event){
			    if(event.keyCode == 13){
					$(this)	.addClass('error-border')
							.siblings('.form-phone_error')
							.text(errorText);

			    }
			});
			$form.submit(function(){
				if( !$(this).find($phone).hasClass('succes')){
					if( $(this).find($phone).val().length == 0 )
						$(this).find($phone).addClass('error-border').siblings('.form-phone_error').text(errorTextNoPhone);
					else
						$(this).find($phone).addClass('error-border').siblings('.form-phone_error').text(errorText);
					return false;
				}
			});

		});


	// slideset nav
	slidesetNav = function() {
		$('.slideset .uk-slideset-nav > li > a').each(function(index, el) {
			$(this).html(index+1);		
		});
		$('.slideset-nav-overall').html($('.slideset .uk-slideset-nav > li > a').length);
	}

	slidesetNav();
	//recount nav
	window.onresize = function() {
		setTimeout(function(){
			//window.dispatchEvent(new Event('resize'));
			slidesetNav();
		},1000);
		
	}

	$('#form-modal-search input[type=text], .form-search input[type=text]').each(function(index, el) {
		if ($(this).val() == '') {
		    $(this).next('button').addClass('uk-hidden');
		} else {
		    $(this).next('button').removeClass('uk-hidden');
		}
	});

	$('#form-modal-search input[type=text], .form-search input[type=text]').on('input', function() {
		if ($(this).val() == '') {
		    $(this).next('button').addClass('uk-hidden');
		} else {
		    $(this).next('button').removeClass('uk-hidden');
		}
	});

	$('.form-modal-search-reset').on('click', function (e) {
		$(this).prev('input').val('');
		$(this).addClass('uk-hidden');
		e.preventDefault();
	});





	var slider = $('#slider');
	var slider_current = $(slider).find('.slider-nav-current');
	var slider_overall = $(slider).find('.slider-nav-overall');
	

	$(slider).on('focusitem.uk.slider', function(event, index, item) {
		if ($(slider_overall).html() == "") {
			$(slider_overall).html($(slider).find('li[data-slider-slide]').length);
		}
		// event.preventDefault();
		if ($(slider_current).html() != (index+1)) {
			$(slider_current).html(index+1);
		}
		//console.log(index);
		/* Act on the event */
	});
	



	$('#company-number-1').on('inview.uk.scrollspy', function(){
	    // custom code...
	    $(this).animateNumber({ number: 60 });;
	});
	$('#company-number-2').on('inview.uk.scrollspy', function(){
	    // custom code...
	    $(this).animateNumber({ number: 83 });;
	});
	$('#company-number-3').on('inview.uk.scrollspy', function(){
	    // custom code...
	    $(this).animateNumber({ number: 40000 });;
	});
	$('#company-number-4').on('inview.uk.scrollspy', function(){
	    // custom code...
	    $(this).animateNumber({ number: 1657 });;
	});


// https://tech.yandex.ru/maps/jsbox/2.1/regions_pattern




	//close resheniya toggles
	$(document).mouseup(function(e) 
	{
	    var container = $(".obsadnyye-add-content:not(uk-hidden)");

	    // if the target of the click isn't the container nor a descendant of the container
	    if (!container.is(e.target) && container.has(e.target).length === 0) 
	    {
	       container.addClass('uk-hidden');
	    }
	});

	setTimeout(function(){
		//window.dispatchEvent(new Event('resize'));

	},2000); // trigger resize event after page loads to make everything great



	/*$('.map-item-title').click(function(){
		$('path').removeClass();
		$('path[data-name="'+
		  
		  		$(this).attr('data-region')+
		  			
		  			'"]').addClass('click');
	});*/

	$('.map-item-title').on('mouseover', function () {
		// body...
		var region = $(this).data('region');
		console.log(region);
		$('.map-group path').removeClass('hover');
		$('.map-group path[data-name='+ region +']').addClass('hover');
	})

	$('.map-group path').on('mouseover', function () {
		var region = $(this).data('name');

		$('.map-item-title').removeClass('hover');
		$('.map-item-title[data-region='+ region +']').addClass('hover');

	})

	$('.map-item-title').on('click', function () {

		$(this).closest('.map-wrap').find('path').removeClass('uk-active');

		if ($(this).hasClass('uk-active')) {
			$('.map-group path[data-name='+ $(this).data('region') +']').removeClass('uk-active');
		}
		else {
			$('.map-group path[data-name='+ $(this).data('region') +']').addClass('uk-active');

		}
	})

	$('.map-group path').on('click', function () {

		var region = $(this).data('name');
		
		//$('.map-group path').removeClass('uk-active');

		if ($(this).hasClass('uk-active')) {
			$('.map-item-title[data-region='+ region +']').click();
			//$('.map-group path[data-name='+ $(this).data('region') +']').removeClass('uk-active');
		}
		else {
			$('.map-item-title[data-region='+ region +']').click();
			//$('.map-group path[data-name='+ $(this).data('region') +']').addClass('uk-active');

		}

		if (region == '02') {
			$('.map-list').scrollTo('max',300);
		}
		else {
			$('.map-list').scrollTo($('.map-item-title[data-region='+ region +']'),300,
				{
					offset: -130
				});
		}
	});

	$('.map-list').niceScroll({

	  autohidemode: false,
	  cursorcolor:"rgba(20,20,20,0.2)",
	  cursorborder:"none",
	  // horizrailenabled: false
	});


	/*$('.request-content input').each(function() {
		if ($(this).value() !== "") {
			$(this).addClass('input-active');
		}
	});*/

	document.querySelectorAll('.request-content input, .request-content textarea').forEach((item) => {
		if (item.value !== "") {
			item.classList.add('input-active');
		}
		// console.log('111' + item.value);
	});

	//+TODO Hover on list item - region hovers
	//+TODO hover on redion - list hover
	//+TODO Click on list item - region highlights
	//+TODO Click on list item - collapse - region remove hightlight
	//+TODO click on region - list scrolls to item + hightlight + regions highlight
	//TODO click on region - no collapse. only scroll.

	// if first 5 elements - offset - 100.
	//

});