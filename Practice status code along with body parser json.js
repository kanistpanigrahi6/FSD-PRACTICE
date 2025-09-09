const express = require("express")
var bodyparser=require("body-parser")
var app = express();
const port = 3000;
app.use(bodyparser.json())


// function middleware(req,res,next){
//     console.log("from inside middleware"+req.headers.counter);
//     next()
// }
// app.use(middleware);

function calculate(counter) {
    var sum = 0;
    for (let i = 0; i <= counter; i++) {
        sum = sum + i;
    }
    return sum;
}

function handlefirstrequest(req, res) {
    console.log(req.body)
    var counter=req.body.counter
    if(counter<100000){
        var calculatedsum = calculate(counter);
    console.log(calculatedsum)
    var answer = "the sum is " + calculatedsum;
    res.send(answer);

    }
    else{
        res.status(411).send("u have sent very big number")
    }
    
}



//app.get(`/handlesum`, handlefirstrequest);
app.post(`/handlesum`, handlefirstrequest);

function started() {
    console.log(`Example app listening on port ${port}`);
}
app.listen(port, started);
