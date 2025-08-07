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
    for (var i=1;i<=counter;i++){
        sum+=i;
    }
    return sum;
}
function calculatemul(counter){
    var mul=1
    for (var i=1;i<=counter;i++){
        mul=mul*i;
    }
    return mul;
}

function handlefirstrequest(req,res){
    console.log(req.body)
    var counter=req.body.counter;
    var calculate=calculatesum(counter);
    var calculate1=calculatemul(counter);
    var answerobject={
        sum:calculate,
        mul:calculate1
    };
    var answer="sum is :"+calculate
    res.status(200).send(answerobject);   
}
app.post('/about',handlefirstrequest)

function givePage(req,res){
    res.send(`<head>
                <title>
                    Hello from page
                </title>    
            </head>
            <body>
                <i>Hi there</i>
            </body>`)
}
app.get(`/`,givePage)

function started(){
 console.log(`Example app listening on port ${port}`)
}
app.listen(port,started)



