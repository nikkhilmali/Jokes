const b=document.querySelector('button.no')
b.addEventListener('mouseover',()=>{
    const i=Math.floor(Math.random()*500)+1;
    const j=Math.floor(Math.random()*500)+1;
    
    b.style.left=i+"px";
    b.style.top=j+"px";
})

function f1(){
    alert("YAY Thank You (>_<)")
}