// let arr=[1,2,3,4,5,6,2,3];
// let arr1=[];
// console.log(arr.includes(2));
// console.log(arr.indexOf(2));
// while(arr.indexOf(element)>=0){
//     arr.splice(arr.indexOf(2),1);
// }

// console.log(arr);


// let n=prompt("enter number");
// let num=n.toString();
// console.log(num.length);

// let n=prompt("enter number");
// let num=n.toString();
// let sum=0;

// for(digit of num){
//    sum+=parseInt(digit);

// }
// console.log(sum);

// let n=prompt(" ");
// let sum=1;
// for(let i=n;i>=1;i--){
//     sum*=i;
// }
// console.log(sum);


// game 1
// let num=prompt("Enter Max Number.");
// let fav=prompt("Enter your favourite number.")
// let n=Math.floor(Math.random()*num)+1;
// let cnt=1;
// while(n!=fav){
//     n=Math.floor(Math.random()*num)+1;
//     cnt++;
// }
// alert("CONGRATULATIONS!");
// alert("Your Score is "+cnt);

// game 2

// let max=prompt("Enter range");
// let fav=Math.floor(Math.random()*max)+1;
// let guess=prompt("Guess the number");
// let cnt=1;
// if(guess=="quite"){
//     alert("You quitted");

// }
// else if(guess>fav){
//     alert("Number is greater than actual Number");
// }
// else if(guess<fav){
//     alert("Number is less than actual number");
// }
// else{
//     alert("Congratulation.You won the game.The Number is "+fav+" and your score is "+cnt);
// }

// while(guess!=fav&&guess!="quite"){
//     guess=prompt("Guess the number");
//     cnt++;
//     if(guess=="quite"){
//         alert("You quitted");
//         break;
//     }
//     else if(guess>fav){
//         alert("Number is greater than actual Number");
//     }
//     else if(guess<fav){
//         alert("Number is less than actual number");
//     }
//     else{
//         alert("Congratulation.You won the game.The Number is "+fav+" and your score is "+cnt);
//     }


// }

// let car={
//     name:"mercedes",
//     color:"red",
//     model:"Q5"
// };
// const person={
//     name:"krish",
//     age:19,
//     city:"surat"
// };



// let krish = "vadadoriya";
// let flag ;
// function unique(string) {
//     let ans="";
//     for (let i = 0; i < string.length; i++) {
//         flag=true;
//         for (let j = 0; j < i; j++) {
//             if (string[j] == string[i]) {
//                 flag = false;
//                 break;
//             }
//         }
//         if (flag == true) {
//             ans+=string[i];

//         }

//     }
//     return ans;
// }
// let vi=unique("krishvadadoriya");
// console.log(vi);

// let arr = ["Goa", "china", "pakistan"];
// function len(arr) {
//     let ans = [];
//     let j = 0;
//     for (let i = 0; i < arr.length; i++) {
//         ans[j] = arr[i].length;
//         j++;
//     }
//     let max = ans[0];
//     let maxindex = 0;

//     for (let j = 1; j < ans.length; j++) {

//         if (ans[j] >= max) {
//             maxindex = j;
//         }

//     }
//     return arr[maxindex];
// }
// console.log(len(arr));


// function vowels(str){
//     let cnt=0;
//     for(let i=0;i<str.length;i++){
//        if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"||
//        str[i]=="A"||str[i]=="E"||str[i]=="I"||str[i]=="O"||str[i]=="U"){
//         cnt++;
//        }
//     }
//     console.log(cnt);
// }
// vowels("drashti");


// let squre=(n)=>{
//     return n*n;
// }
// let cnt=0;
// let id=setInterval(()=>{
//     console.log("Hello world");
//     cnt++;
//     if(cnt==5){
//         clearInterval(id);
//         console.log("LOOP stooped")
//     }
// },2000);


// let array = [1, 2, 3, 4, 5, 6, 7, 8, 20, 10];
// let numavg = (arr) => {
//     let sum=0;

//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     console.log(sum/arr.length);
//}

// let isEven=(n)=>{
//     if(n%2==0){
//         console.log("Given Number Is Even.");
//     }
//     else{
//         console.log("Given Number Is Not Even.");
//     }
// // }
// let name = "manshi";
// let length1 = 4;
// function callback() {
//     console.log("outside object");
//      console.log(this.length1);
//     console.log(this);
    
// }
// const object = {
//     name: "krish",
//     age: 19,
//     marks: 99,
//     length1: 10,
//     method(callback){
//       console.log("inside object");
//        let length1=15;
//        callback();
//    }
// };
// object.method(callback);


// let num=[1,2,3,4,5];
// let ans=num.map((el)=>(el+5));
// let char=["a","B","c","D","e","F"];
// let captial=char.filter((el)=>{
//     return el>="A"&&el<="Z";
// });


// let arr=[1,2,3,4,5,6];
// function concat(arr,...args){
//     let ans=[];
//     let k=0;
//     arr.forEach(element => {
//         ans[k]=element;
//         k++;
//     });
//     for(let j=0;j<args.length;j++){
//         ans[k]=args[j];
//         k++;
//     }
//     return ans;
// }
// let move=concat(arr,1.23,3.23,4,56);
// console.log(move)

// const obj11={
//     name:"krish",
//     age:10,
// }
// const obj23={
//     name:"vaibhav",
//     age:20
// }
// function max(...args){
//     return args.map((el)=>{return el});
// };
// console.log(max(obj11,obj23));



