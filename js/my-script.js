(function ($, undefined) {
  jQuery(document).ready(function ($) {

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
      $('.modal-menu-dropdown').find('.modal-nav-active').removeClass('.modal-nav-active')
      $('.mob-search-button.icon-search').removeClass('uk-hidden')
      $('.mob-search-button.icon-chevron-left').addClass('uk-hidden')
    })

    $('.mob-search-button.icon-chevron-left').click(function () {
      $('.modal-menu-dropdown-items').removeClass('modal-menu-slide-right')
      $('.mob-search-button.icon-search').removeClass('uk-hidden')
      $('.mob-search-button.icon-chevron-left').addClass('uk-hidden')
    })


    $('td').on('mouseover mouseout', function(){
      $(this).prevAll().addBack()
      .add($(this).parent().prevAll()
      .children(':nth-child(' + ($(this).index() + 1) + ')')).toggleClass('hover-table');
    });

    $('.panel #all').click(function (event) {
      event.preventDefault()
      //console.log(test);

      if ( $('.panel_news.uk-active .uk-grid div.clone').length != 0 ){
        var e = $('.panel_news.uk-active .uk-grid div.clone')

        for (var i = 0; i < 4; i++) {
          e.eq(i).clone().appendTo('.panel_news.uk-active .uk-grid');
        }

      } else {
        $('.panel_news.uk-active .uk-grid div.uk-hidden').addClass('uk-grid-margin clone')
        $('.panel_news.uk-active .uk-grid div.clone').removeClass('uk-hidden')

      }

    })

    $('.panel #2019').click(function (event) {
      event.preventDefault()
      //console.log(test);

      if ( $('.panel_news.uk-active .uk-grid div.clone').length != 0 ){
        var e = $('.panel_news.uk-active .uk-grid div.clone')

        for (var i = 0; i < 4; i++) {
          e.eq(i).clone().appendTo('.panel_news.uk-active .uk-grid');
        }

      } else {
        $('.panel_news.uk-active .uk-grid div.uk-hidden').addClass('uk-grid-margin clone')
        $('.panel_news.uk-active .uk-grid div.clone').removeClass('uk-hidden')

      }

    })

    $(function() {
      var nice =
        $(".nicescroll-box").niceScroll({
          cursorcolor:"black",
          cursorborder: "0",
          emulatetouch: true,
        });

      var _super = nice.getContentSize;

      nice.getContentSize = function () {
        var page = _super.call(nice);
        page.h = nice.win.height();
        return page;
      }

      $('.nicescroll-rails.nicescroll-rails-vr').remove();

    });//nicescroll

  })
})(jQuery)
