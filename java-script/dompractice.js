// let btn=document.createElement('button');
// btn.innerText="Click me";
// let body=document.querySelector('body');
// body.insertAdjacentElement('afterbegin',btn);
// let ip=document.createElement('input');
// ip.setAttribute("type","text");
// ip.setAttribute("placeholder","username");
// body.appendChild(ip);
// btn.setAttribute("id","btn1");
// btn.style.color="white";
// btn.style.backgroundColor="blue";
// let h1=document.createElement('h1');
// h1.innerText="DOM PRACTICE";

// h1.innerHTML=`<u>${h1.innerText}</u>`;
// h1.style.textDecorationColor="purple";
// body.appendChild(h1);

let btn=document.createElement('button');
btn.innerText="Click Me!";
let body=document.querySelector('body');
body.appendChild(btn);
let h2=document.createElement('h2');
h2.innerText="Heading";
body.appendChild(h2);
let ip=document.createElement('input');
ip.setAttribute("type","text");
ip.setAttribute("placeholder","enter your name");
body.appendChild(ip);
let color;
ip.addEventListener("keydown",function(event){
    if((event.key>='A'&&event.key<='Z')||(event.key>='a'&&event.key<='z')){
        h2.innerText=ip.value;    
        console.log(event.key);
         color=ip.value;   
    }
    else{
        h2.innerText=color;
        ip.value=color;
    }

})
ip.addEventListener("keypress",function(){
    console.log("key is pressed")
})

btn.addEventListener("mouseout",function(){
    this.style.backgroundColor="pink";
    console.log("mouse is out")
})
btn.addEventListener("mouseenter",function(){
    this.style.backgroundColor="blue";
    console.log("mouse is in")
})




