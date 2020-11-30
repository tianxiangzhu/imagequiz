const { rejects } = require('assert');
var fs=require('fs');
const { resolve } = require('path');
const { Prompt } = require('react-router-dom');

console.log("Program started");
let wait = (ms)=>{
    var start = new Data().getTime();
    var end = start;
    while(end <start+ms){
        end = new Date().getTime();
    }
    console.log("The wait is over")
}

let doSomething=(data)=>{
    console.log("number of the characters: ${data.length}")
}

let readFromTheFile=()=>{
    fs.readFile('test1.txt',(error,data)=>
    {
        if(error){
            console.log('something went wrong: ${error}');
        }
        console.log('The file was raed.');
        resolve(data);
    });
}
let wrap = (resolve, reject)=>{
    readFromTheFile(resolve,reject);
}
new Promise(warp).then(x=>doSomething(x)).catch(e => console.log(e));
//wait(4000);
console.log("Programm finished.");