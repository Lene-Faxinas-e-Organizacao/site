
  (function ($) {
  
  "use strict";

    // NAVBAR
    $('.navbar-nav .nav-link').click(function(){
        $(".navbar-collapse").collapse('hide');
        // Adiciona a classe 'active' ao link clicado e a remove dos outros
        $('.navbar-nav .nav-link').removeClass('active');
        $(this).addClass('active');
    });

    // REVIEWS CAROUSEL
    $('.reviews-carousel').owlCarousel({
        center: true,
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 300,
        smartSpeed: 500,
        responsive:{
          0:{
            items:1,
          },
          768:{
            items:2,
            margin: 100,
          },
          1280:{
            items:2,
            margin: 100,
          }
        }
    });

    // Banner Carousel
    var myCarousel = document.querySelector('#myCarousel')
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 1500,
    })

    // A função ReviewsNavResize foi removida pois o novo scrollspy não precisa dela.

    // HREF LINKS
    $('a[href*="#"]').click(function (event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 74
          }, 1000, function() {
            // Garante que o link correto fique ativo após a rolagem suave
            var $target = $(target);
            var id = $target.attr('id');
            $('.navbar-nav .nav-link').removeClass('active');
            $('.navbar-nav .nav-link[href="#'+id+'"]').addClass('active');
          });
        }
      }
    });
    
  })(window.jQuery);
