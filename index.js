// let const arrow function, template literals, spread & rest operator
// async javascript : callbacks promises, async/await
// modules : commonJs ES modules
// Error handling and Debugging

// Data Types:
// number, string , Boolean, null, undefined, symbols, object , etc
let num = 123; // number
let group = "first"; // string
let flag = false // boolean
let initializedValue = null;// object
var undefin; // undefined , it will give undefined
const arr = ["first", "second", "third"]; // object
const obj = {}; // object

console.log(typeof num)// number
console.log(typeof group)// string
console.log(typeof flag)// boolean
console.log(typeof initializedValue)// object
console.log(typeof undefin)// undefined
console.log(typeof arr)// object
let ar = {
    0: "first",
    1: "second",
    2: "third"
}
console.log(typeof obj)// object

// mutables and immutables

// immutable
let str = "something";
str[1] = "h"; // connot perfrom the modification
console.log(str);// something
str = "anything";
console.log(str); // anything
// concat
let wrong = "wrong"
str = str + " " + wrong;
console.log(str);//"anything wrong"
// template literals ``
let template = `${str} ${wrong}, I am teaching. is this group : ${group} ?`;
 console.log(template);

// mutables
const obj1 = { name: "Shivanshi" };
obj1.name = "Radhika";
obj1.batch = "bca";
console.log(obj1);
const array1 = ['human', 'dog'];
array1[1] = "cat";
array1[2] = "bird";
console.log(array1);

// spread, rest, destructuring
const newObj = {
  Name: "Shivank",
  pet: "dog",
  phone: 98868273
};

const NameOfObj = newObj.Name;
const petOfObj = newObj.pet;
const phoneOfObj = newObj.phone;
// destructuring of object
const  { Name, pet, phone } = newObj;
console.log(Name);// Shivank
console.log(pet);// dog
console.log(phone);// 98868273
// Object spread operator
const student = {
    batch:"BCA 3red year",
    ...newObj // spreading object into another object
};
console.log(student);

// spread operator usingy array
const marks = [20,30,35,40];
const allMarks = [10,15,...marks];// spreding marks array 
console.log(allMarks)//[10,15,20,35,40];
const restObj = {
    key1:'Value 1',
    key2:'Value 2',
    key3:'Value 3',
    key4:'Value 4',
};
const { key1, ...remaining } = restObj;
console.log(key1, remaining);// remaining = {key2:"value 2",key3:value 3,key:"value 4"}



// Every thing in javascript is object
//  let GlobalObject = { rollno: undefined,
//     func :  (){
//     }
//   }
// Global Excecution Object 

// console.log(name) // reference error 
// let keyword is used for variable locally scoped 
let name = "Lakshmi";// Laskshmi
// console.log(Class) // reference error
// const is used for constant variables for example : storing array or object or something which will not change in future
// const Class = "3rd year BCA"; // 3rd year BCA

console.log(rollNo) // undefined , it will not throw any error
// var keyword variables are hoisted  before excecution 
var rollNo = 134;

console.log(func)// func(){}

function func() {
    let i = 1
    return i;
}

// async/await , callback, Promise
// function fun1 (){
console.log("line 76");
// }

// sometask which will take time
setTimeout(function () {
    console.log("line 81")
}, 5000);

//  function fun2(){
console.log("line 85");
//  }

//  fun1();
//  fun2();

// Promises 

// inital
// fullfiled
// reject

let promise1 = new Promise((response, reject) => {
    setTimeout(()=>{ 
    response("I liked the bottle and i will never give it back");
    },5000);
});
let promise2 = new Promise((response, reject) => {
    setTimeout(()=>{ 
    response("here is your bottle as i promised");
    },2000);
});

promise1.then((res) => {
    console.log(res);
})
promise2.then((res) => {
    console.log(res);
});

promise1.finally(() => {
    console.log("Here i am finnaly");
});
promise2.finally(() => {
    console.log("Here i am finnaly");
});


// async/await function
let promise3 = new Promise((response, reject) => {
    setTimeout(()=>{ 
    response("Promise that has 5000 milisecond time");
    },5000);
});

let promise4 = new Promise((response, reject) => {
    setTimeout(()=>{ 
    response("Promise that has 2000 milisecond time");
    },2000);
});

async function func3(){
 try{
   let result1 = await promise3// here payment done
   console.log(result1);
   let result2 =  await promise4 // message for order placed
   console.log(result2);
 }catch(err){
   console.log(err);
 }finally{
    console.log("finally");
 }
}
func3();


// arrow function 
// arrow function should return something it is a good practice
// will not get hoisted like normal functions what we create by using function keyword
const arrowFun1 = (a,b)=>{
 return a+b;
};
const arrowFun2 = (a,b) => a+b;
const arrowFun3 = a => a+5;
var arrowFun4 = ()=>{
    // something
}


// callback functions

// a fucntion which call itself after some specific task is completed or when it is needed, there is no intial defintion for callback function

/// 

const array7 = [1,2,3,4,5];
const newArray = array7.map((elm,index,array)=>{
console.log(elm,index,array);
return elm*elm;
});

newArray.forEach((elm,index,array)=>{
console.log(elm,index,array);
});

console.log(newArray);

function newForEach(array,cb){
  for(let i=0;i<array.length;i++){
     cb(array[i],i,array);
  }
}
 
Array.prototype.newForEach = function(cb){
    for(let i=0;i<this.length;i++){
       cb(this[i],i,this);
    }
};
const ar4 = ["hello","this","is","me"];
ar4.newForEach((elm)=>{
  console.log(elm);
});
const ar2 = [8,9,10,11];
newForEach(ar2,(elm,i,array)=>{
  console.log(elm+2,i,array);
});

Array.prototype.newMap = function (cb){// it will return array
// write your code..
// create an empty array
const output = [];
// use for loop
// push element to the empty array using callback
// end loop
for(let i=0;i<this.length;i++){
    let returneElm = cb(this[i],i,this);
    output.push(returneElm);
}
// return the array
 return output
 }

const ar10 = ["hello","name"];

const updatedAr10 = ar10.newMap((elm,i, array)=>{
    console.log(elm,i,array);
  return elm+", Monalisa";
});// updated

console.log(updatedAr10)