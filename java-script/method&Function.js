// function name(){
//     console.log("My Name is Krish.");
//     console.log("I Live in Surat.");
//     console.log("I studied in L.D. college of engineering.");
//     console.log("L.D.college of engineering is located in ahmedabad.");
// }
// // name();
// function poem(){
//     console.log("Twinkle Twinkle Little stars");
//     console.log("Up above World so High");
//     console.log("How I Wonder What You Are?");
//     console.log("Like a Diamond In the Sky.");
// }
// // poem();
// function playdice(){
//     console.log(Math.floor(Math.random()*6)+1);
// }
// playdice();
// function name(name,age){
//     console.log(name+"'s age is "+age);
// }
// name("krish",19);
// name("manshi",24);
// name("vaibhav",29)

// function average(a,b,c){
//     console.log("Average is "+(a+b+c)/3);
// }
// average(1,2,3);
// average(4,5,6);
// average(7,8,9);


// function table(num){
//     for(let i=1;i<=10;i++){
//         console.log(num+"*"+i+"="+num*i);
//     }
// }
// let  n=prompt("enter number");
// table(n);

function sum(a,b){
    return a+b;
}
// let c=sum(8,3);
// console.log("the sum is "+c);

function st(string){
    return string.replace("krish","manshi");
}
// let d=st("krish vadadoriya");
// console.log(d);

function sumn(n){
    let sum=0;
    for(let i=0;i<=n;i++){
        sum+=i;
    }
    return sum;
}
// console.log(sumn(10));


st=["krish ","manshi ","varj ","nensi "];
function con(str){
   let budha="";
   for(let i=0;i<str.length;i++){
    budha+=str[i];
   }
   return budha;
}
// let ans=con(st);
// console.log(ans);



function multigreet(func,count){
    for(let i=0;i<count;i++){
        func();
    }
}
function greet(){
    console.log("Hello Good Bye.");
}
// let greet =function(){
//     console.log("Hello Good Bye.");
// }
// multigreet(function(){console.log("namaste")},100);
// multigreet(greet,10);



function sum12(a,b){
    return a+b;
}
function large(a,b,c,d){
    return sum12(a,b)+sum12(c,d);
}
// console.log(large(3,4,3,4));



function fun1(){
    console.log("THIS IS FUNCTION NO 1");
}
function fun2(){
    console.log("THIS IS FUNCTION 2");
}
function fun3(fu,fd){
    fu();
    fd();
    console.log("BY THE WAY THIS IS FUNCTION NO 3");
}
// fun3(fun1,fun2);



function oddeventest(que){
    if(que=="even"){
        return function(n){
            console.log((n%2==0));
        }
    }
    else if(que=="odd"){
        return function(n){
            console.log((n%2!=0));
        }
    }
    else{
        console.log("wrong input");
    }
}
// let fun=oddeventest("even");
// fun(3);
// fun(4);


// METHOD
// When we declare function inside the object it is called method
const calculator={
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    multiplication:function(a,b){
        return a*b;
    },
    division:function(a,b){
        return a/b;
    }
}
const calculator1={
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    multiplication(a,b){
        return a*b;
    },
    division(a,b){
        return a/b;
    }
}

