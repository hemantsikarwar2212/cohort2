
// function countVowels(str) {
//     let count = 0;
//     for(let i = 0 ; i < str.length;i++){
//       let char  = str[i].toLowerCase();
//       if(char =="a" || char =="e" || char =="i" || char  == "o" || char  == "u"){
//         count++;
//       }
//     }
//     return count;
// }
// console.log(countVowels("hemant"));
// function isPalindrome(str) {
//     let ostr = str;
//     let revStr = str.split("").reverse().join("");
//      return ostr == revStr;
//   }

//   console.log(isPalindrome("maf"));
//   ///clockk //
//   function clock(){
//   let date = new Date();
//     let seconds = date.getSeconds();
//     let min = date.getMinutes();
//     let hours = date.getHours(); 
//     console.log(`time is : ${hours}:${min}:${seconds} `);
//   } 

//   function clock2(){
//     for (let i = 0; i < 60; i++) {
//       let seconds = i;
//       let min = i;
//       let hrs = i;
//       console.log(`${hrs}:${min}:${seconds}`);
      
//     }
//   }

//   function getTime24() {
//     const now = new Date();
//     const hours = String(now.getHours()).padStart(2, '0');
//     const minutes = String(now.getMinutes()).padStart(2, '0');
//     const seconds = String(now.getSeconds()).padStart(2, '0');
//     console.log( `${hours}:${minutes}::${seconds}`);
// }

//console.log(getTime24());


  // setInterval( getTime24,1000)


  /////////file server /////
  /**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
  const express = require('express');
  const app = express();
  const path = require('path');
  const fs = require ('fs');

  app.get('/files',(req,res)=>{
    const file = path.join(__dirname,'./files')
    fs.readdir('file',(err,data)=>{
      if(err){
       return res.status(403).json({
          msg: "files not found"
        })
      }
      res.status(200).send(data);
    })   
  })
  app.get('/file/:filename',(req,res)=>{
    const file = path.join(__dirname,'/file/',req.params.filename)
    fs.readFile('/file','utf-8',(err,data)=>{
      if(err){
        res.status(404).json({
          msg: " not found ant data"
        })
      }
      res.status(200).send(data);


    })

  })
  app.all('*',(req,res)=>{
    res.status(404).json({
      msg:"not found"
    })
  })

  app.listen(3000)

  
  module.exports = app;


