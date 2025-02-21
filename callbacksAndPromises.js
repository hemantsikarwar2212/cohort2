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

