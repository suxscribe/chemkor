(function ($, undefined) {
  jQuery(document).ready(function ($) {

    //Тестовая пидкрузка новостей
    $('.panel #all').click(function (event) {
      event.preventDefault()

      if ($('.panel_news.uk-active .uk-grid div.clone').length != 0) {
        var e = $('.panel_news.uk-active .uk-grid div.clone')

        for (var i = 0; i < 4; i++) {
          e.eq(i).clone().appendTo('.panel_news.uk-active .uk-grid')
        }

      }
      else {
        $('.panel_news.uk-active .uk-grid div.uk-hidden').
          addClass('uk-grid-margin clone')
        $('.panel_news.uk-active .uk-grid div.clone').removeClass('uk-hidden')

      }
    })

    $('.panel #2019').click(function (event) {
      event.preventDefault()

      if ($('.panel_news.uk-active .uk-grid div.clone').length != 0) {
        var e = $('.panel_news.uk-active .uk-grid div.clone')

        for (var i = 0; i < 4; i++) {
          e.eq(i).clone().appendTo('.panel_news.uk-active .uk-grid')
        }

      }
      else {
        $('.panel_news.uk-active .uk-grid div.uk-hidden').
          addClass('uk-grid-margin clone')
        $('.panel_news.uk-active .uk-grid div.clone').removeClass('uk-hidden')

      }
    })
    // Тестовая пидкрузка новостей

    $('.mob-search-button.icon-search').on('click', function () {
      $('.mob-search-button.icon-search').addClass('uk-hidden')
      $('.menu-modal-header span').css('visibility', 'hidden')
      $('.modal-menu-search').removeClass('uk-hidden')
      $('.menu-modal-menu').addClass('uk-hidden')
    })

    $('.mob-close-button').click(function () {
      if ($('.modal-menu-search.uk-hidden')) {
        $('.modal-menu-search').addClass('uk-hidden')
        $('.menu-modal-menu').removeClass('uk-hidden')
        $('.mob-search-button.icon-search').removeClass('uk-hidden')
        $('.menu-modal-header span').css('visibility', 'visible')
      }
    })

    $('.modal-menu-dropdown').click(function (event) {
      event.preventDefault()
      $(this).find('ul').addClass('modal-menu-slide-right')
      $('.mob-search-button.icon-search').addClass('uk-hidden')
      $('.mob-search-button.icon-chevron-left').removeClass('uk-hidden')
    })

    $('.mob-close-button').click(function () {
      $('.modal-menu-dropdown').
        find('.modal-nav-active').
        removeClass('.modal-nav-active')
      $('.mob-search-button.icon-search').removeClass('uk-hidden')
      $('.mob-search-button.icon-chevron-left').addClass('uk-hidden')
    })

    $('.mob-search-button.icon-chevron-left').click(function () {
      $('.modal-menu-dropdown-items').removeClass('modal-menu-slide-right')
      $('.mob-search-button.icon-search').removeClass('uk-hidden')
      $('.mob-search-button.icon-chevron-left').addClass('uk-hidden')
    })

    $('td').on('mouseover mouseout', function () {
      $(this).
        prevAll().
        addBack().
        add($(this).
          parent().
          prevAll().
          children(':nth-child(' + ($(this).index() + 1) + ')')).
        toggleClass('hover-table')
    })//для табличек

    $(function () {
      var nice =
        $('.nicescroll-box').niceScroll({
          cursorcolor: 'black',
          cursorborder: '0',
          emulatetouch: true,
        })

      var _super = nice.getContentSize

      nice.getContentSize = function () {
        var page = _super.call(nice)
        page.h = nice.win.height()
        return page
      }

      $('.nicescroll-rails.nicescroll-rails-vr').remove()

    })//nicescroll

    $('.request-content > input').on('input', function () {
      var $this = $(this)
      if ($this.val() == '') {
        $this.removeClass('input-active')
        console.log('pipka-false-input');
      }
      else {
        $this.addClass('input-active')
        console.log('pipka-true-input');
      }
    })//animation labrl

    $('.request-content > textarea').on('textarea', function () {
      var $this = $(this)
      if ($this.val() == '') {
        $this.removeClass('input-active');
        //console.log('pipka-false-textarea');
        console.log($this);
      }
      else {
        $this.addClass('input-active')
        //console.log('pipka-true-textarea')
        console.log($this);
      }
    })

    $(function () {
      var $phone = $('input.request-input-tel')
      $phone.each(function () {
        $(this).
          inputmask('+7 (999) 999-99-99', {autoclear: false, showMaskOnHover: false}).removeAttr('required')
          .parent('.request-content').
          addClass('form-phone_wrap').
          append('<p class=\'form-phone_error\'></p>')
      })
      var errorTextNoPhone = 'Укажите номер телефона',
        errorText = 'Введите номер телефона'
      $phone.on('input', function () {
        var $this = $(this)
        if ($this.val().substr($this.val().length - 1) !== '_' &&
          $this.val().substr($this.val().length - 1) !== '' &&
          $this.val().substr($this.val().length - 1) !== ' ') {
          $this.addClass('succes')
        }
        else {
          $this.removeClass('succes')
        }
      })
      $phone.focusout(function () {
        if ($(this).val().length > 0 && !$(this).hasClass('succes')) {
          $(this).
            addClass('error-border').
            siblings('.form-phone_error').
            text(errorText)
          $(this).parent().addClass('error')
        }
      })
      $phone.keyup(function (e) {
        $(this).siblings('.form-phone_error').text(' ')
        $(this).removeClass('error-border').parent().removeClass('error')
      })
      $phone.keyup(function (event) {
        if (event.keyCode == 13) {
          $(this).
            addClass('error-border').
            siblings('.form-phone_error').
            text(errorText)

        }
      })
    })/* inout mask phone */

    ymaps.ready(init)

    function init () {
      var myMap = new ymaps.Map('frontpage-map', {
          center: [56.315411, 44.027115],
          zoom: 13,
          controls: []
        }),
        collection = new ymaps.GeoObjectCollection(),
        bounds = myMap.getBounds()
      var myPlacemark1 = new ymaps.Placemark([56.315411, 44.027115], {
        hintContent: 'ул.Генкиной',
        balloonContent: '',
      }, {
        iconLayout: 'default#image',
      })
      myMap.geoObjects.add(myPlacemark1)

      var myMap = new ymaps.Map('frontpage-map2', {
          center: [56.240568, 43.523753],
          zoom: 13,
          controls: []
        }),
        collection = new ymaps.GeoObjectCollection(),
        bounds = myMap.getBounds()
      var myPlacemark2 = new ymaps.Placemark([56.240568, 43.523753], {
        hintContent: 'ул. 1 Мая',
        balloonContent: '',
      }, {
        iconLayout: 'default#image',
      })
      myMap.geoObjects.add(myPlacemark2)

      var myMap = new ymaps.Map('frontpage-map3', {
          center: [55.651374, 37.522108],
          zoom: 13,
          controls: []
        }),
        collection = new ymaps.GeoObjectCollection(),
        bounds = myMap.getBounds()
      var myPlacemark3 = new ymaps.Placemark([55.651374, 37.522108], {
        hintContent: 'ул. Бутлерова',
        balloonContent: '',
      }, {
        iconLayout: 'default#image',
      })
      myMap.geoObjects.add(myPlacemark3)

      var myMap = new ymaps.Map('frontpage-map4', {
          center: [56.240568, 43.523753],
          zoom: 10,
          controls: []
        }),
        collection = new ymaps.GeoObjectCollection(),
        bounds = myMap.getBounds()
      var myPlacemark4 = new ymaps.Placemark([56.240568, 43.523753], {
        hintContent: 'ул. 1 Мая',
        balloonContent: '',
      }, {
        iconLayout: 'default#image',
      })
      myMap.geoObjects.add(myPlacemark4)

      var myMap = new ymaps.Map('frontpage-map5', {
          center: [55.452436, 37.292194],
          zoom: 10,
          controls: []
        }),
        collection = new ymaps.GeoObjectCollection(),
        bounds = myMap.getBounds()
      var myPlacemark5 = new ymaps.Placemark([55.452436, 37.292194], {
        hintContent: 'Калужское шоссе',
        balloonContent: '',
      }, {
        iconLayout: 'default#image',
      })
      myMap.geoObjects.add(myPlacemark5)

    }

  })
})(jQuery)
