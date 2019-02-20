
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


// 




});