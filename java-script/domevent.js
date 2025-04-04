// let btn=document.querySelector('button');

// btn.onclick=function(){
//   console.log("button was cliked.");
//   alert("button was clicked.");
// }

//inline event
// function sayhello(){
//     alert("hello,how are you?");
// }
// function name(){
//     alert("Krish Vadadoriya.");
// }
// let btn=document.querySelectorAll('button');
// for(btns of btn){
//     btns.onclick=sayhello;
//     btns.onclick=name;
//     btns.onmouseenter=function(){
//         console.log("you are hovering on button.");
//     }
// }
// console.dir(btn);



// >>>>>>>>>>>EVENT LISTENER<<<<<<<<<<
// for(btns of btn){
//     btns.addEventListener("click",sayhello);
//     btns.addEventListener("click",name);
//     btns.addEventListener("dblclick",function(){
//         console.log("you doubled cliked");
//     })
// }

// >>>>>>>>>>>>>>>this<<<<<<<<<<<
// let btn=document.querySelector('button');
// let p=document.querySelector('p');
// let h1=document.querySelector('h1');
// let h3=document.querySelector('h3');
// function effect(){
//     console.log(this);
//     console.dir(this);
//     console.log(this.innerText);
//     this.style.backgroundColor="blue";
// };
// function effect1(){
//     console.log(this);
//     console.dir(this);
//     console.log(this.innerText);
//     this.style.backgroundColor="yellow";
// };
// btn.addEventListener("click",effect);
// p.addEventListener("click",effect);
// h1.addEventListener("click",effect);
// h3.addEventListener("click",effect);
// h3.addEventListener("mouseenter",effect1);
// h1.addEventListener("mouseenter",effect1);
// p.addEventListener("mouseenter",effect1);
// btn.addEventListener("mouseenter",effect1);



// >>>>>>>>>>>>KeyboardEvent<<<<<<<<<<<<
let btn=document.querySelector('button');


// >>>>>>>>>>>>>>>>>>>event argument(subfunction)<<<<<<<<<<<
// btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log("button clicked.");
// })
// btn.addEventListener("dblclick",function(event){
//     console.log(event);
//     console.log("button doubled clicked.");
// })

let ip=document.querySelector('input');
// ip.addEventListener("keyup",function(){
//     this.style.backgroundColor="yellow";
//     console.log("key is released");
// });
// ip.addEventListener("keydown",function(event){
//     this.style.backgroundColor="red";
//     console.log("key is pressed");
//     console.log("key= ",event.key);
//     console.log("code= ",event.code);
// });

// ip.addEventListener("keydown",function(event){
    
//     if(event.code=="ArrowUp"){
//         console.log("character move upward.");
//     }
//     else  if(event.code=="ArrowDown"){
//         console.log("character move Downward.");
//     }
//     else  if(event.code=="ArrowLeft"){
//         console.log("character move Leftward.");
//     }
//     else  if(event.code=="ArrowRight"){
//         console.log("character move Rightward.");
//     }
// });




// >>>>>>>>>>>>>>>form events<<<<<<<<<<<<<<<
let form=document.querySelector("form");


form.addEventListener("submit",function(event){
    event.preventDefault();
    // let ip=document.querySelector('#username');
    // let ps=document.querySelector('#password')

    // alert(`Form is Succesfully submitted.\n username: ${ip.value}\n password: ${ps.value}`);

    // alert(`Form is Succesfully submitted.\n username: ${this.elements[0].value}\n password: ${this.elements[1].value}`);
})




// >>>>>>>>>>>>>>>>>>>>>>>*change & input (event)<<<<<<<<<<<<<<<<<
let user=document.querySelector('#username');

user.addEventListener("change",function(event){
    
    console.log("change event");
    console.log("final value is= ",user.value);
})

user.addEventListener("input",function(event){
    
    console.log("input event");
    console.log("final value is= ",user.value);
})