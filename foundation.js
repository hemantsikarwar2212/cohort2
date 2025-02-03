let firstName = 'hemant';
let age = 22;
let isMarried = false;
console.log('this person name is ' + firstName + "and his age is " + age);
if(isMarried){
console.log(firstName+" is married");
}
else{
    console.log(firstName+" is not married");
}
let n = 10;
let a = [1,2,4,6,8,9];
let NameArray = ["hemant" , "suraj" , "kunal"];
for(let i =0 ; i<a.length;i++){
    if(i%2==0){
console.log(i);
    }

}
for(let i = 0 ; i < NameArray.length;i++){
console.log(NameArray[i]);
}
// objects syntax ;
const user1 = {
    firstName : " hemant" ,
    gender : " male ",
    age : 22,
    country: "india"
}
let name = user1["firstName"];
console.log(name);
const allUsers = [{
    firstName : " hemant" ,
    gender : " male ",
    age : 22,
    country: "india",
    metaData: {
        lastName : "sikarwar",
        city : "agra"
    }
},{
    firstName : " himani" ,
    gender : " female ",
    age : 22,
    country: "india"
},{
    firstName : " suraj" ,
    gender : " male ",
    age : 20,
    country: "india"
}
]
let city = allUsers[0]["metaData"]["city"];
console.log(city);

// for(let i = 0;i<allUsers.length;i++){
// console.log(allUsers[i]["metaData"]["city"]);

// }

function sum( a , b) {
    return a+b;
}
sum21 = (a,b)=>{return a+b}
console.log(sum(6,7));
