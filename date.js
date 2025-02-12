const currentDate = new Date();
let dateval = (`today date is : ${currentDate.getDate()}-${currentDate.getMonth()}-${currentDate.getFullYear()}`);
// console.log(dateval);

function calculateSum(n){
    let sum = 0;
    for(let i =0;i<n;i++){
        sum+=i;
    }
    return sum;
}
// creating timestamps : examples : 
const beforeDate = new Date();
const beforeDateInmilli  = beforeDate.getMilliseconds();
calculateSum(100000000);
const afterDate = new Date();
const afterDateInmilli = afterDate.getMilliseconds();
console.log(`timeStamp for this function is ${afterDateInmilli - beforeDateInmilli } millisecond`);

