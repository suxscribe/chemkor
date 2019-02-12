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

  })
})(jQuery)
