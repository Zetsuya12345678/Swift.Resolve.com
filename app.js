const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

$(document).ready(function () {
	$(".customer-logos").slick({
	  slidesToShow: 6,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 1500,
	  arrows: false,
	  dots: false,
	  pauseOnHover: false,
	  responsive: [
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 4
		  }
		},
		{
		  breakpoint: 520,
		  settings: {
			slidesToShow: 3
		  }
		}
	  ]
	});
  });
  
  
  
  