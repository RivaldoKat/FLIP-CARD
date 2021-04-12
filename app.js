const card = document.querySelector(".card__inner")
const card1 = document.querySelector(".card__inner1")

// Flip-Card
card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped')
});

card1.addEventListener("click", function (e) {
  card1.classList.toggle('is-flipped')
});



// Show active menu when scrolling

const highlightMenu = () => {
	const elem = document.querySelector('.highlight')
	const homeMenu = document.querySelector('#home-page')
	const aboutMenu = document.querySelector('#about-page')
	const servicesMenu = document.querySelector('#services-page')
	let scrollPos = window.scrollY
	console.log(scrollPos);

	// adds 'highlight' class to my menu items 
	if(window.innerWidth > 960 && scrollPos < 600){
		homeMenu.classList.add('highlight')
		aboutMenu.classList.remove('highlight')
		return
	} else if(window.innerWidth > 960 && scrollPos < 1400){
		aboutMenu.classList.add('highlight')
		homeMenu.classList.remove('highlight')
		servicesMenu.classList.remove('highlight')
		return
	} else if(window.innerWidth > 960 && scrollPos < 2345){
		aboutMenu.classList.remove('highlight')
		servicesMenu.classList.add('highlight')
		return
	}

	if((elem && window.innerWidth < 960 && scrollPos < 600) || elem){
		elem.classList.remove('highlight')
	}
}; 


window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);
