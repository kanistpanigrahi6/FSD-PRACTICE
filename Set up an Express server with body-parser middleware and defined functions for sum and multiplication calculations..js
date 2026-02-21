const express = require("express");
var bodyParser = require('body-parser');
const app = express();
const port = 3000;


// function middleware1(req, res, next){
//     console.log("from inside a middleware " + req.headers.cnt);
//     next();
// }
// app.use(middleware1);

app.use(bodyParser.json());

function calculate(cnt){
    var sum = 0;
    for(var i = 0; i <= cnt; i++){
        sum = sum + i;
    }
    return sum;
}

function calculatemul(cnt){
    var mul = 1;
    for(var i = 1; i <= cnt; i++){
        mul = mul * i;
    }
    return mul;
}

function handlesfirstrequest(req, res){
    // console.log(req.body)
    var cnt = req.body.cnt;
    var calculatedsum = calculate(cnt);
    var calculatedmul=calculatemul(cnt);
    var ansofObject={
        sum:calculatedsum,
        multiply:calculatedmul,
    }
    res.status(200).send(ansofObject);
    // var cnt =req.headers.cnt;  
//     if (cnt<1000){
//         var calculatedsum = calculate(cnt);
//         console.log(calculatedsum);
//         var answer = "The sum is " + calculatedsum;
//         res.status(200).send(answer);
// }
// else{
//     res.status(400).send("u have sent a large number, please send a smaller number");
// }
    
}

app.post("/createuser", handlesfirstrequest);

function started(){
    console.log(`App listening on port ${port}`);
}

app.listen(port, started);
