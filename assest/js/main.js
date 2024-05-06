function openNav() {
    document.getElementById("navbar").classList.toggle("start-0");
    document.body.classList.toggle("overflow_hidden");
    document.querySelector(".menu").classList.toggle("cross")
  }
  
$('.responsive').slick({
  dots: false,
  speed: 300,
  autoplay: true,
  arrows: true,
  prevArrow: ".prebtn",
  nextArrow: ".nextbtn",
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,

      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,

      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
        autoplay: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      }
    },


  ]
});