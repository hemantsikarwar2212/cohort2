const fs = require('fs')
try{
fs.readFile('./a.txt','utf-8',(err,data)=>{
    let cleanData = data.replaceAll(/\s+/g , " ");
    console.log(cleanData);
    
    
})}
catch(error){
    console.log("No data found");
    

}
