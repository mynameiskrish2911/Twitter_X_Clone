let btn=document.querySelector('button');
let div=document.querySelector('div');
let h3=document.querySelector('h3');
btn.addEventListener("click",
   function(){
    let random=getRandomColor();
    h3.innerText=random;
    div.style.backgroundColor=random;
}
)

function getRandomColor(){
    let a=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    let c=Math.floor(Math.random()*256);
    let color=`rgb(${a},${b},${c})`;
    // h3.innerText=color;
    // div.style.backgroundColor=color;
    return color;
    
}