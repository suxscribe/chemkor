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

    $('.modal-menu-dropdown').hover(function () {
      $(this).find('ul').css('display', 'block')
      console.log($(this))
      $('.mob-search-button.icon-search').addClass('uk-hidden')
      $('.mob-search-button.icon-chevron-left').removeClass('uk-hidden')
    })

    $('.mob-close-button').click(function () {
      $('.modal-menu-dropdown').find('.modal-nav-active').removeClass('.modal-nav-active')
      $('.mob-search-button.icon-search').removeClass('uk-hidden')
      $('.mob-search-button.icon-chevron-left').addClass('uk-hidden')
    })

    $('.mob-search-button.icon-chevron-left').click(function () {
      $('.modal-menu-dropdown-items').css('display', 'none')
      $('.mob-search-button.icon-search').removeClass('uk-hidden')
      $('.mob-search-button.icon-chevron-left').addClass('uk-hidden')
    })

  })
})(jQuery)