document.addEventListener('DOMContentLoaded', function(){
	var arrowContainer = document.getElementById('bouncing-arrow-container');

	if (window.location.pathname == '/index.html') {
		document.addEventListener('scroll', (e) => {
			var scrolledDistance = document.scrollingElement.scrollTop;

			if (scrolledDistance > 300) {
				arrowContainer.classList.add('hide');
			} else {
				arrowContainer.classList.remove('hide');
			}
		});
	}

	document.getElementById('current-year').innerText = new Date().getFullYear();
});


$(function() {
	var burger = $('#burger'),
		navBar = $('.navbar'),
		navMenu = $('#nav-overlay'),
		navLink = $('.subnav-container a');

	function disableScroll() {
		$('html, body').css({
			overflow: "hidden",
			height: "100%"
		});
	}

	function enableScroll() {
		$('html, body').css({
			overflow: "auto",
			height: "auto"
		});
	}

	burger.on('click', function() {
		navBar.toggleClass('open');
		navMenu.slideToggle(200).toggleClass('open');

		if (window.location.pathname == '/index.html') {
			navMenu.hasClass("open") ? disableScroll() : enableScroll();
		}
	});

	if ((window.location.pathname != "/index.html") && ($(window).width() < 768)) {
    navLink.on("click", function() {
      navBar.toggleClass("open");
      navMenu.slideToggle(200).toggleClass("open");
    });
  }
});