(function () {

	window.onload = function () {

		/*=============== SCROLL HEADER ===============*/
		const header = document.querySelector('header');
		function scrollHeader() {
			if (window.matchMedia("(min-width: 1023px)").matches) {
				//Cuando el scroll es mayor al viewport de 40 , añade los estilos nuevos a la etiqueta del header
				if (this.scrollY >= 40) {
					header.style.position = "fixed";
					header.style.top = "20px";
					header.style.left = "50%";
					header.style.transform = "translate(-50%)";
					header.style.width = "75%";
					header.style.padding = "0px 15px";
					header.style.borderRadius = "50px";
					header.style.background = "#f4f4f4";
					header.style.boxShadow = "0 0.2rem 0.3rem rgba(255, 255, 255, 0.05)";
					header.style.borderBottom = "unset";
					header.style.border = "3px solid #8d1517";
				} else {
					header.style.position = "relative";
					header.style.top = "0";
					header.style.width = "100%";
					header.style.borderRadius = "unset";
					header.style.boxShadow = "none";
					header.style.zIndex = "none";
					header.style.background = "transparent";
					header.style.boxShadow = "none";
					header.style.border = "unset";
					header.style.borderBottom = "3px solid var(--gruascolor)";
				}
			}
		}
		window.addEventListener('scroll', scrollHeader);

		//MAIN SLIDER FUNCTIONALITY
		let main_slider = new Swiper(".mainSlider", {
			spaceBetween: 30,
			effect: "fade",
			// loop: true,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
		});

		// SERVICES function

		// TABS WITH SERVICE CONTENT 
		const tabsGruas = document.querySelectorAll(".tabsGruas li");
		const contentSectionTecno = document.querySelectorAll(".container-gruas");

		tabsGruas.forEach((tab, index) => {
			tab.addEventListener("click", () => {
				tabsGruas.forEach((tab) => tab.classList.remove("active"));
				tab.classList.add("active");

				contentSectionTecno.forEach(content => content.classList.remove("active"));

				contentSectionTecno[index].classList.add("active");
			});
		});
		tabsGruas[0].click();

		// Funcionalidad nueva galeria responsiva
		let next = document.querySelector(".next");
		let prev = document.querySelector(".prev");
		let sliderGallery = document.querySelector(".slider_gallery");

		next.addEventListener('click', function () {
			let slides = document.querySelectorAll('.slides');
			sliderGallery.appendChild(slides[0]);
		});

		prev.addEventListener('click', function () {
			let slides = document.querySelectorAll('.slides');
			sliderGallery.prepend(slides[slides.length - 1]);
		});

		//CERTIFICATES SLIDER 
		var swiper = new Swiper(".agradecimientos_cont", {
			// spaceBetween: 40,
			// grabCursor: true,
			centeredSlides: true,
			slidesPerView: 'auto',
			loop: true,
			// noSwiping: true,
			// noSwipingClass: 'swiper-slide',
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			breakpoints: {
				350: {
					spaceBetween: 15,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 50,
				},
				1023: {
					slidesPerView: 3,
					spaceBetween: 40,
					centeredSlides: true,
					loop: true,
					grabCursor: true,
				},
			},
		});
	}

	// IMPROVEMENT WEB

	/** F12 TOOLS .. DEVELOPER ACCESS PERSONALIZATION **/
	// console.error('%cStop!', 'color: red;font-size:2.5rem;font-weight:bold;');
	// console.warn('%cThis console was destinated for developers. If you copy or paste code here to enable some function that unset the integrity of the website you will be reported and we will take actions against you executing a XSS attack.. you were notified.', 'font-size:1.25rem;line-height:1.1;');

	// /** DISABLE RIGHT CLICK **/
	// document.oncontextmenu = function () {
	// 	alert('WARNING \nThe security on the website was improved.');

	// 	return false;
	// };

	// /** DISABLE SCREEN SHOT **/
	// document.addEventListener('keyup', (e) => {

	// 	if (e.key == 'PrintScreen') {
	// 		navigator.clipboard.writeText('');

	// 		alert('ERROR SCREENSHOT DISABLED! \nDont try it again or you will be reported');
	// 	}

	// });

	// /** DISABLE SCREEN IMPRESSION OR PDF EXPORT WITH (CTRL+P) & DISABLE SCREENCUTS (CTRL+SHIFT+S)**/
	// document.addEventListener('keydown', (e) => {

	// 	if (e.ctrlKey && e.key == 'p' || e.ctrlKey && e.key == 'P') {
	// 		alert('ERROR This section doesnt allow impression or PDF export \nDont try it again or your access will be denied and reported');

	// 		e.preventDefault();
	// 	}

	// 	else if (e.metaKey && e.shiftKey) {
	// 		alert('SCREENCUTS DETECTED! \nDont try it again or your access will be denied and reported');

	// 	}

	// 	else if (e.ctrlKey && e.key == 's' || e.ctrlKey && e.key == 'S') {
	// 		alert('ERROR This Website cant be downloaded \nDont try it again or your access will be denied and reported');

	// 		e.preventDefault();
	// 	}

	// 	else if (e.ctrlKey && e.key == 'c' || e.ctrlKey && e.key == 'C') {
	// 		alert('ERROR This Website doesnt allow copy \nDont try it again or your access will be denied and reported');

	// 		e.preventDefault();
	// 	}

	// 	else if (e.ctrlKey && e.key == 'x' || e.ctrlKey && e.key == 'X') {
	// 		alert('ERROR This Website doesnt allow cut \nDont try it again or your access will be denied and reported');

	// 		e.preventDefault();
	// 	}

	// 	else if (e.ctrlKey && e.key == 'v' || e.ctrlKey && e.key == 'V') {
	// 		alert('ERROR This Website doesnt allow paste \nDont try it again or your access will be denied and reported');

	// 		e.preventDefault();
	// 	}

	// });

})();