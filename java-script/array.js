// let students=["krish","manshi","zeel","hakubha"];
// let cnt=0;
// for(let i=0;i<students.length;i++){
//     alert(`${students[i]} is your friend `);
//     cnt++;

// }
// alert(`you have ${cnt} friend. it's good number.`)

// let arr=[3];
// for(let i=0;i<3;i++){
//     arr[i]=prompt("enter your friend name. "+(i+1));
// }
// alert(arr[0]+" "+arr[1]+" "+arr[2]+" these 3 are your friends");


// let arr=["yellow","red","white"];
// arr.push("blue");
// arr.push("pink");
// arr.pop();
// arr.shift();
// arr.unshift("black");

// console.log(arr.indexOf("yellow"));
// console.log(arr.includes("red"));
// console.log(arr.reverse());
// let arr1=["black","blue","lightblue","majenta"];

// console.log(arr.concat(arr1));
// console.log(arr.concat(arr1).slice(2));
// console.log(arr.concat(arr1).slice(2,5));
// console.log(arr.concat(arr1).sort());

// let arr=["1","2","3","4","5","6"];
// let arrcpy=arr;
// console.log(arr);
// console.log(arrcpy);
// arr.push("7");
// console.log(arrcpy);
// arrcpy.pop();
// console.log(arr);

// let arr=["1","2","3","4","5","6"];
// let arrcpy=["1","2","3","4","5","6"];
// console.log(arr);
// console.log(arrcpy);
// arr.push("7");
// arrcpy.pop();
// console.log(arr);
// console.log(arrcpy);


// constant array

// nested arrays
// let nums=[[1,2],[3,4],[5,6]];


// let arr1=[3];
// for(let i=0;i<3;i++){
//     arr1[i]=[];
//     for(let j=0;j<3;j++){
//         arr1[i][j]=prompt("enter element of tic tac toe "+(i+1)+" and "+(j+1));
//     }
// }
// for(let i=0;i<3;i++){

//        console.log(arr1[i]);

// }


// let fav="AVATAR";
// let ask=prompt("guess movie.");
// while(ask!==fav){
//     alert("wrong answer try again.")
//     ask=prompt("guess movie.");
// }
// alert("Congratulation! your guess is true.Thank you.Play Again.")

let todo = [];
let req = prompt("Enter your request.");
while (true) {
    if (req == "quit") {
        console.log("Quitting a todo app.")
        break;
    }
    if (req == "list") {
        console.log("-------------");
        for (let i = 0; i < todo.length; i++) {
            console.log(todo[i]);
        }
        console.log("-------------");

    }
    else if (req == "add") {
        let task = prompt("Enter task you want to add.")
        todo.push(task);
        console.log("task successfully added.");
    }
    else if (req == "delete") {
        let ind = prompt("enter index to be deleted");
        todo.splice(ind, 1);
        for (let i = 0; i < todo.length; i++) {
            console.log(todo[i]);
        }
        console.log("task is deleted");
    } 

    req = prompt("Enter your next request.");
}