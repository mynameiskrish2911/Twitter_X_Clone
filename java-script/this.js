const obj = {
    name: "krish ",
    surname: "vadadoriya",
    age: 19,
    eng: 90,
    phy: 95,
    maths: 60,
    average() {
        let average = (this.eng + this.phy + this.maths) / 3;
        console.log(`${this.name} got average marks= ${average}`);
    }

};
const obj2 = {
    name: "vaibhav ",
    surname: "rathi",
    age: 20,
    eng: 77,
    maths: 88,
    phy: 92
};
// function  average(){
//     let average=(obj.eng+obj.phy+obj.maths)/3;
//     console.log(`${obj.name} got average marks= ${average}`);
//   }



// console.log("Hello krish");
// console.log("Hello krish");
// console.log("Hello krish");

// try{
//     console.log(a);
// }
// catch(e){
//     console.log("a is not defined."+e);
// }
// finally{
//     console.log("ERROR IS GENERATED");

// }
// console.log("KRISH VADADORIYA");


// arrow function
const sum = (a, b) => {
    return a + b;
}
const squre = (a) => {
    return a * a;
}
const power = (a, b) => {
    return a ** b;
}
// implict arrow function
const multiplication = (a, b) => (
    a * b
);
const division = (a, b) => (
    a / b
);


// settimeout
// console.log("HII! THERE.");
// setTimeout(()=>{
//     console.log("set time out.")
// },2000);
// console.log("WELCOME!");

// timeinterval
// let i=1;
// let id=setInterval(()=>{
//     console.log("krish vadadoriya"+ i);
//     i++;
// },2000);


// scope of this
const obj3 = {
    name: "krish",
    age: 19,
    property: this,
    rel: function () {
        console.log(this);
        return this.name;
    },
    rel1:()=>{
        console.log(this);
        return this.age;
    },
    getinfo1:function(){
        setTimeout(()=>{
            console.log(this)
        },2000);
    },
    getinfo2:function(){
        setTimeout(function(){
            console.log(this)
        },2000);
    },
};