document.addEventListener('DOMContentLoaded', function(){
	// console.log('finished loading');
	var burger = document.getElementById('burger'),
		navMenu = document.getElementById('nav-overlay'),
		arrowContainer = document.getElementById('bouncing-arrow-container');

	burger.onclick = function() {
		navMenu.classList.toggle('open');
	}

	// written with help from:
	// https://jsfiddle.net/cvmw3L1o/1/
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
