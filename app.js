// importing the http global module
const http = require('http');

// using a keyword function
function rqstListener(req,res){

}
http.createServer(rqstListener);

// using anonymous function

http.createServer(function(req,res){

})

// using an arrow function
http.createServer((req,res)=>{

})