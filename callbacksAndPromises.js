/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
function square(n){
return n*n;
}
function cube(n){
return n*n*n;
}
function quad(n){
return n*n*n*n;
}
 function sumOfSomething(a,b,cb1) {
    let num1 = cb1(a);
    let num2 = cb1(b)
    return num1+num2;
}
let result = sumOfSomething(2,2,square);
console.log(result);

const { error } = require('console');
///////async functions//////////
//const fs= require('fs');

function onDone(){
console.log("done functioning");
}
function onDone2(){
console.log("done functioning2");
}
// console.log("hi there");
// setTimeout(onDone2,1000);
// fs.readFile('a.txt',onDone);
// console.log("after sometime");

/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
    */

    function wait(val) {
        setTimeout(()=>{
            console.log("after some time" ,val);
            
        },1000)
    }
    const fs = require('fs')
let p = new Promise((resolve, reject) => {
   fs.readFile('a.txt','utf-8',(err,data)=>{
        setTimeout(()=>{
resolve(data)
        },1000)
        

    if(err) reject(err);
    
   })

})
p.then((val)=>{
    console.log(`now it is good to go ${val}`);
    
})

p.catch((err)=>{
    console.log("error");
    
})

