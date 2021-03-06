setTimeout(loaderFadeOut, 2000);

function hover(str) {
	let split = str.split('');
	split.forEach(letter => {
		let span = document.createElement('span');
		span.innerText = letter;
		if (letter == "_"){
			span.style.visibility = "hidden"
		}
		document.querySelector('.title').appendChild(span);
	});
	// let spans = document.querySelectorAll('.title span');
	// spans.forEach(span => {
	// 	span.addEventListener ('mouseover', function() {
	// 		this.classlist.add('hover');
	// 	});
	// 	span.addEventListener ('mouseleave', function() {
	// 		this.classlist.remove('hover');
	// 	});
	// });
}
hover('CV_de_Florian_CALABRESE');

function loaderFadeOut() {
  let loader = document.querySelector('.loader-layer');
  loader.style.opacity = 0;
  loader.style.width = 0;
  loader.style.height = 0;
};


/*Pour le counting number */

const counters = document.querySelectorAll('.counter');
// const speed = 1000;

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;
		// console.log(count);
		if(count < target) {
			counter.innerText = count + 1;
			setTimeout(updateCount, 200);
		} 	else {
			count.innerText = target;
		}
	}
	updateCount();
});

/*Progress bar on scroll*/

// var slideUp = {
//     distance: '150%',
//     origin: 'bottom',
//     opacity: null
// };

// ScrollReveal().reveal('.slide-up', slideUp);

// var node = document.querySelector('.bar');
// var nodeList = document.querySelectorAll('.skills');
// var nodeArray = [
//     document.querySelector('.counter'),
// ];

// ScrollReveal().reveal(node);
// ScrollReveal().reveal(nodeList);
// ScrollReveal().reveal(nodeArray);

// ScrollReveal().reveal('.bar', {
//     // delay: 375,
//     duration: 10,
//     reset: true
// });
