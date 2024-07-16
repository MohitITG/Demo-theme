$(document).ready(function () {
  $(".cstm_multicolumn_slider").slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:
      '<div class="slick_left_arrow"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"/></svg></div>',
    nextArrow:
      '<div class="slick_right_arrow"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"/></svg></div>',
  });

  $(".auto_images_slider").slick({
    infinite: true,
    draggable: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    pauseOnHover: true,
    speed: 6500,
    cssEase: "linear",
    swipeToSlide: true,
    swipe: false,
    centerMode: false,
    pauseOnFocus: true,
  });

  $(".all_reviews_container").slick({
    infinite: true,
    draggable: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    pauseOnHover: true,
    speed: 6500,
    cssEase: "linear",
    swipeToSlide: true,
    swipe: false,
  });

  // product_subscription slider

  $(".prod_img").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:
      '<div class="prod_left_arr"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><path fill="transparent" stroke="hsl(0, 0%, 100%)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22.5 12.5 15 20l7.5 7.5"/></svg></div>',
    nextArrow:
      '<div class="prod_right_arr"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><path fill="transparent" stroke="hsl(0, 0%, 100%)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.5 12.5 25 20l-7.5 7.5"/></svg></div>',
  });
});
