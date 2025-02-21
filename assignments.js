
function countVowels(str) {
    let count = 0;
    for(let i = 0 ; i < str.length;i++){
      let char  = str[i].toLowerCase();
      if(char =="a" || char =="e" || char =="i" || char  == "o" || char  == "u"){
        count++;
      }
    }
    return count;
}
console.log(countVowels("hemant"));
function isPalindrome(str) {
    let ostr = str;
    let revStr = str.split("").reverse().join("");
     return ostr == revStr;
  }

  console.log(isPalindrome("maf"));
  ///clockk //
  function clock(){
  let date = new Date();
    let seconds = date.getSeconds();
    let min = date.getMinutes();
    let hours = date.getHours(); 
    console.log(`time is : ${hours}:${min}:${seconds} `);
  } 

  function clock2(){
    for (let i = 0; i < 60; i++) {
      let seconds = i;
      let min = i;
      let hrs = i;
      console.log(`${hrs}:${min}:${seconds}`);
      
    }
  }

  function getTime24() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    console.log( `${hours}:${minutes}::${seconds}`);
}

//console.log(getTime24());


  setInterval( getTime24,1000)