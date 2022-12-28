let slider = $(document).ready(function () {
  $('.gallery__slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true
  });
});

let menuBtn = document.querySelector('.burger__icon');
let menu = document.querySelector('.burger__menu');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
})

$('.burger__menu a').on('click', function(e){
   $('.burger__menu').toggleClass('active');
})
