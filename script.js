let indexValue = 0; // Start with the first group

function showSlide(index) {
    const slides = document.querySelectorAll('.slide-group');
    slides.forEach(slide => slide.classList.remove('active')); // Hide all slides

    // Handle wrapping around
    if (index >= slides.length) indexValue = 0;
    if (index < 0) indexValue = slides.length - 1;

    slides[indexValue].classList.add('active'); // Show the current slide
}

function side_slide(e) {
    indexValue += e;
    showSlide(indexValue);
}

// Initial display
showSlide(indexValue);


const accordion = document.getElementById('accordion');
const inputs = accordion.querySelectorAll('.accordion__input');

inputs.forEach(input => {
    input.addEventListener('change', () => {
        if (input.checked) {
            inputs.forEach(otherInput => {
                if (otherInput !== input) {
                    otherInput.checked = false;
                }
            });
        }
    });
});


function openMenu () {
    document.body.classList += "menu--open"
}

function closeMenu () {
    document.body.classList.remove('menu--open')
}
