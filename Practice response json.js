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

function calculatesum(counter) {
    var sum = 0;
    for (let i = 0; i <= counter; i++) {
        sum = sum + i;
    }
    return sum;
}

function calculatemul(counter) {
    var mul = 1;
    for (let i = 1; i <= counter; i++) {
        mul = mul * i;
    }
    return mul;
}


function handlefirstrequest(req, res) {
    console.log(req.body)
    var counter=req.body.counter
    var calculatedsum = calculatesum(counter);
    var calculatedmul=calculatemul(counter)
   
    var ansobject={
        sum:calculatedsum,
        multi:calculatedmul
    }
    res.status(200).send(ansobject);
}


//app.get(`/handlesum`, handlefirstrequest);
app.post(`/handlesum`, handlefirstrequest);

function started() {
    console.log(`Example app listening on port ${port}`);
}
app.listen(port, started);
