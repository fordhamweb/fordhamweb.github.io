// JS for hovering over the sunflower

const sunhover = document.getElementById('sunhover');
const suntarget = document.querySelectorAll('.suntarget');

sunhover.addEventListener('mouseenter', () => {
    suntarget.forEach(div => div.classList.add('is-visible'));
});

sunhover.addEventListener('mouseleave', () => {
    suntarget.forEach(div => div.classList.remove('is-visible'));
});


// JS for clicking on the rose and daisy to show the text

const roseclick = document.getElementById('roseclick');
const rosetext = document.querySelectorAll('.rosetext');
const daisy = document.querySelectorAll('.daisy');

roseclick.addEventListener('click', () => {
    rosetext.forEach(div => div.classList.toggle('is-visible'));
    daisy.forEach(div => div.classList.toggle('is-hidden'));
});


const daisyclick = document.getElementById('daisyclick');
const daisytext = document.querySelectorAll('.daisytext');
const rose = document.querySelectorAll('.rose');

daisyclick.addEventListener('click', () => {
    daisytext.forEach(div => div.classList.toggle('is-visible'));
    rose.forEach(div => div.classList.toggle('is-hidden'));    
});