gsap.to(".fallingrose", {
    rotation: 360,
    x: 0,
    y: 400,
    duration: 2
});

gsap.registerPlugin(SplitText);

// variable
let split = SplitText.create("h1", {type:"words,chars,lines"});


// instructions for the initial animation of words
document.addEventListener("DOMContentLoaded",function() {
gsap.from(split.words, {
    y: -100,
    opacity: 0,
    rotation: 80,
    duration: 1,
    stagger: 0.1,
})
});


// instructions for animating the characters by clicking on the button
document.querySelector("#chars").addEventListener("click", () => {
gsap.from(split.chars, { 
    y: -100,
    opacity: 0,
    rotation: 360,
    duration: 0.7,
    stagger: 0.05,
})
});


// instructions for animating the lines by clicking on the button
document.querySelector("#lines").addEventListener("click", () => {
gsap.from(split.lines, { 
    rotationY: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.25,
})
});