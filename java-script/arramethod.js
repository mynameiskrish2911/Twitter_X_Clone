let arr=[1,2,3,4,5,6];
let print=function(el){
   console.log(el);
   
}
// arr.forEach(print);
// arr.forEach(function(el){
//     console.log(el);
// })
// arr.forEach((el)=>{
//     console.log(el);
// })

let arr1=[
    {
       name:"krish",
       marks:90
    },
    {
        name:"zeel",
        marks:0

    },
    {
        name:"pujan",
        marks:91

    },
    {
        name:"niraj",
        marks:90
    }
];
// arr1.forEach(function (student) {
//     console.log(student.name+" = "+student.marks);  
//   });

// let num=[1,2,3,4,5,6,7,8,9];
// let double=[];

// double=num.map((el)=>{
//     return el*2+1;
// });

// let double1=arr1.map((student)=>{
//     return student.name;
// });

// let marks1=arr1.map((student)=>{
//     return student.marks;
// });

// let even=num.filter((el)=>{
//     return el%2==0;
// });

// let bool=num.every((el)=>{return el%2==0});
// console.log(bool);

// let bool1=num.some((el)=>{
//     return el%2==0;
// });
// console.log(bool1);

// let num=[0,4,20,1];
// let final=num.reduce((sum,a)=>{return sum+a});
// console.log(final);

// let max1=num.reduce((max,el)=>{
//     console.log(max);
//     if(el>max){
//         return el;
//     }
//     else{
//         return max;
//     }
// });
// console.log(max1);

// let practice=[10,20,3,40,0];
// let ans=practice.every((element)=>{return element%10==0;});
// console.log(ans);
// let min1=practice.reduce((min,element)=>{
//     if(element<min){
//         return element;
//     }
//     else{
//         return min;
//     }
// });
// console.log(min1);

// function sum(a,b=10){
//     console.log(a+b);
// }
// sum(1);
// sum(10,100);

// spread
let arr11=[1,2,74,742761,8787];
// console.log(Math.min(arr11)); this will give an error

// console.log(Math.min(...arr11));
// console.log(arr11);
// console.log(...arr11);
// console.log("krishvadadoriya");
// console.log(..."krishvadadoriya");

// let arr23=[...arr11];
 // let arr23=arr11;
// console.log(arr23);
// let char=[..."krish"];
// console.log(char);
// let odd=[1,3,5,7,9];
// let even=[2,4,6,8,10];
// let mix=[...odd,...even];

// let data={
//     email:"ironman@gmail.com",
//     password:"abcd"
// };
// let datacopy={...data,id:123,country:"india"};
// let num12=[1,2,3,4,5];
// const obj={...num12};
// const obj2={..."krish"};

//   >>>>REST<<<<


// function sum(...args){
//     for(let i=0;i<args.length;i++){
//         console.log("you gave us "+args[i]);
//     }
// }
// console.log(sum(1));
// console.log(sum(1,2));
// console.log(sum(1,3,4));
// console.log(sum(1,5,6,7,8));
// console.log(sum(1,3,2,5,6,6,2,55));

// function sum1(a,b,c,d)
// {
//     console.log(arguments);
// }

// brings many arguments in single array
//  function sumgood(...args){
//     console.log(args.reduce((sum,a)=>{return sum+a}));
//  }
//  sumgood(1,2,3,4);
 
// >>>>>  destucting array   <<<<<<<
let race=["tony","bruce","peter","navil","krish","steve"];
let[winner,runnerup,...others]=race;
// console.log(winner);
// console.log(runnerup);
// console.log(others);

// >>>>>>>destructing object<<<<<<<
const obj={
    name:"krish",
    surname:"vadadoriya",
    age:19,
    marks:99,
    username:"@krishpatel123",
    password:"kp123vk",
    city:"pune"
};
let {username: user,password,city: place="banglore",...ot}=obj;
