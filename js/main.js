// slider

$(function(){
    
    $('.slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots: true,
        autoplaySpeed: 5700,
        speed: 1500,
        pauseOnDotsHover: true,
        draggable: false,
        swipe: true,
        WaitForAnimate: true,
        pauseOnHover: true,   
        responsive:[
          {
            breakpoint: 915,
            settings: {
              arrows: false,
              pauseOnFocus: true,
            }
          }
        ]
      });
})

// slider

// Показ формы

    function show(state)
    {
    document.getElementById('form-window').style.display = state;	
    document.getElementById('window-background').style.display = state; 		
    }	

// Показ формы

// header-fixed

    $(document).ready(function () {
      const headerMain = $('#headerMain').offset().top;
      $(window).scroll(function(){
        const Scrolled = $(this).scrollTop();

          if (Scrolled > headerMain) {
            $('#headerMain').addClass('headerMain-fixed')
          } else if (Scrolled < headerMain) {

            $('#headerMain').removeClass('headerMain-fixed')
          }
      });
    });

// header-fixed

// Якорь

const anchors = document.querySelectorAll('a[href*="#"]')

  for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
      event.preventDefault();
      const blockID = anchor.getAttribute('href')
      document.querySelector('' + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    })
  }

// Якорь

// burger-btn
$(function(){

$('.header__burger').on('click', function(){
  $('.menu__list').slideToggle();
});

});

// burger-btn