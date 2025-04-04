// const student={
//     name:"krish",
//     surname:"vadadoriya",
//     age:19,
//     marks:99.99
// };
// let student1={
//     name:"vaibhav",
//     surname:"sharma",
//     age:20,
//     marks:[90,91,92]
// };
// // student=student1; this will throw an error

// const post={
//     username: "@krishvadadoriya",
//     content:"this is my first post #firstdayfirstpost",
//     likes:156,
//     repost:6,
//     tags:["@mansiv","@saggitarius","@vishala","@papakipari"]

// };
// const obj={
//     1:"a",
//     2:"b",
//     null:"c",
//     undefined:"d",
//     true:"e"

// };

// add,update,delete,get opration
// const student={
//     name:"krish",
//     city:"surat",
//     marks:99.9,
//     age:19
// };


// multiple students
const student23={
    krish:{
        age:19,
        course:"B.E.(I.T.)",
        college:"L.D.college of engineering",
        nickname:"(LDCE)"
    },
    yash:{
        age:20,
        course:"B.sc(I.T.)",
        college:"Dharuka college of engineering",
        nickname:"(KBR NAI)"
    },
    man:{
        age:21,
        course:"B.E.(Electrical)",
        college:"Vishwakarma college of engineering",
        nickname:"(VGEC)"
    }

};

// array of object
// const student12 = [
//     {
//         name: "krish",
//         age: 18,
//         gender: "male"
//     },
//     {
//         name: "yash",
//         age: 19,
//         gender: "male"
//     },
//     {
//         name: "manshi",
//         age: 24,
//         gender: "female"
//     },
//     {
//         name: "prince",
//         age: 18,
//         gender: "male"
//     }
// ];
  for(let i=0;i<10;i++){
    let num=Math.random();
    console.log("Before Modification "+num)
    num=num*10;
    num=Math.floor(num);
    console.log("AFTER MODIFICATION "+num);
  }
  let Y=Math.floor(Math.random()*10)+1;