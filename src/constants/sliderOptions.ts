export const sliderOptions = {
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  adaptiveHeight: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
