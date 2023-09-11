$('.banner_item').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    // swipeToSlide: false,
});

$('.combo').slick({
    // centerMode: true,
    arrows: false,
    dots:true,
    isFinite:true,
    autoplay:true,
    centerPadding: '0px',
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 425,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.review_item').slick({
    // centerMode: true,
    arrows: false,
    dots:true,
    isFinite:true,
    autoplay:true,
    centerPadding: '0px',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
  });