var express = require('express')
var bodyParser=require('body-parser')
var app = express()
var port = 3000

//not required yet
// function middleware1(req,res,next){
//     console.log("from inside middleware"+req.headers.counter)
//     next()
// }
// app.use(middleware1)
app.use(bodyParser.json())

function calculatesum(counter){
    var sum=0
    for (var i=0;i<=counter;i++){
        sum+=i;
    }
    return sum;
}


function handlefirstrequest(req,res){
    console.log(req.body)
    var counter=req.body.counter;
    var calculate=calculatesum(counter)
    var answer="sum is :"+calculate
    res.send(answer);   
}
app.post('/about',handlefirstrequest)


function started(){
 console.log(`Example app listening on port ${port}`)
}
app.listen(port,started)
