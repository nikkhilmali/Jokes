// const b = document.querySelector('button.no')
// b.addEventListener('mouseover', () => {
//     const i = Math.floor(Math.random() * 500) + 1;
//     const j = Math.floor(Math.random() * 500) + 1;

//     b.style.left = i + "px";
//     b.style.top = j + "px";
// })

var btn = document.querySelector("button.no"); 
var position;

btn.addEventListener("mouseover",()=> {
    position ? (position = 0): (position = 150);
    btn.style.transform = `translate(${position}px,0px)`;
    btn.style.transition = "all 0.3s ease";
});

function f1() {
    alert("YAY Thank You (>_<)")
}