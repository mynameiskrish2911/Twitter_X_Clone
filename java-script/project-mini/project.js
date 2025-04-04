// >>>>>>>>>>>>>>>>>>>>EVENT-BUBLING<<<<

// let div=document.querySelector('div');
// let ul=document.querySelector('ul');
// let lis=document.querySelectorAll('li');

// div.addEventListener("click",function(){
//     console.log("DIV IS CLICKED.")
// })

// ul.addEventListener("click",function(event){
//     event.stopPropagation();
//     console.log("UL IS CLICKED.")
// })

// for(li of lis){
// li.addEventListener("click",function(event){
//     event.stopPropagation();
//     console.log("LI IS CLICKED.")
// })}

let btn = document.querySelector('button');
let ip = document.querySelector('input');

let ul = document.querySelector('ul');
btn.addEventListener("click", function (event) {
    if(ip.value!=""){
    let lis = document.createElement('li');
    lis.innerText = ip.value;
    
    let delbtn = document.createElement('button');
    delbtn.setAttribute("class", "delete");
    delbtn.innerText = "delete";
    lis.appendChild(delbtn);
    ul.appendChild(lis);
    ip.value = "";
    }
    else{
        alert("enter task.");
    }
   
    




})
ul.addEventListener("click",function(event){
    console.log("click");
    console.log(event.target.parentElement.innerText);
    console.log(event.target.nodeName)
    if(event.target.nodeName=='BUTTON'){
        
         console.log();
         event.target.parentElement.remove();
    }
    else{
        console.log("please delete on corresponding button.")
    }
})


// let delbtns = document.querySelectorAll(".delete");
// for (elements of delbtns) {
   
//     elements.addEventListener("click", function (event) {
//           console.log(this.parentElement);
//           this.parentElement.remove();
//     });
// }
