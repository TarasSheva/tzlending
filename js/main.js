//кнопка логотипа
let topScroll;
let logoBtn = document.querySelector('.header_logo');
logoBtn.onclick = function up() {
	let top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-50);
		topScroll = setTimeout(up, 20);
	} else clearTimeout(topScroll);
	return false;
}

//слайдер
let slideIndex = 1;
let slide = document.getElementsByClassName("slide");
let dot = document.getElementsByClassName("dot");
showSlides(slideIndex);

function showSlides(slideIndex) {

    let prev = document.querySelector('.prev');
    prev.onclick = function () {
        slideIndex--;
        if (slideIndex < 1) {
            slideIndex = slide.length;
        }
        showSlides(slideIndex);
    };
    let next = document.querySelector('.next');
    next.onclick = function () {
        slideIndex++;
        if (slideIndex > slide.length) {
            slideIndex = 1;
        }
        showSlides(slideIndex);
    };

    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    for (let i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace('active', '');
    }
    slide[slideIndex - 1].style.display = "block";
    dot[slideIndex - 1].className += ' active';

    
}
//кнопки слайдера
[].forEach.call(dot, function (el) {
    el.onclick = function () {
        let index = Number(this.getAttribute("id").slice(-1));
        showSlides(index);
    }
});

// Footer
let footer = document.querySelector('.footer_title');
footer.innerHTML = `Copyright ${new Date().getFullYear()}`;

