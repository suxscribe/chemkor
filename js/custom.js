
jQuery(document).ready(function() {

/*ymaps.ready(init);

function init() {
	var myMap = new ymaps.Map('map', {
			center: [56.319869, 43.926503],
			zoom: 13
		}),
		collection = new ymaps.GeoObjectCollection(),
		bounds = myMap.getBounds();
	var myPlacemark1 = new ymaps.Placemark([56.319869, 43.926503], {hintContent: 'на Кораблестроителей',
		balloonContent: ''}, {
		iconLayout: 'default#image',
		iconImageHref: 'images/map-marker.svg',
		iconImageSize: [45, 55],
		iconImageOffset: [-22, -27]

	});
	myMap.geoObjects.add(myPlacemark1);
	myMap.behaviors.disable('scrollZoom');
	};
*/

	/* PHONE */
	/*$(function(){
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
	});*/



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

	$('.slideset .uk-slideset-nav > li > a').each(function(index, el) {
		$(this).html(index+1);		
	});
	$('.slideset-nav-overall').html($('.slideset .uk-slideset-nav > li > a').length);


	$('#form-modal-search input[type=text]').each(function(index, el) {
		if ($(this).val() == '') {
		    $(this).next('button').addClass('uk-hidden');
		} else {
		    $(this).next('button').removeClass('uk-hidden');
		}
	});


	$('#form-modal-search input[type=text]').on('input', function() {
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
	})

});