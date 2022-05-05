// importing the http global module
const http = require('http');


// ....creatting a listeners function....

//1. using a keyword function
function rqstListener(req,res){

}
http.createServer(rqstListener);


// 2. using anonymous function

http.createServer(function(req,res){

});


// 3. using an arrow function + storing the instances of the request from the server
const server = http.createServer((req,res)=>{
console.log(req)
});

server.listen(3500);