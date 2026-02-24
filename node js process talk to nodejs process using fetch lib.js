const express = require("express");
var bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

function calculate(cnt){
    var sum = 0;
    for(var i = 0; i <= cnt; i++){
        sum = sum + i;
    }
    return sum;
}
function handlesfirstrequest(req, res){
    // console.log(req.body)
    var cnt = req.query.cnt;
    var calculatedsum = calculate(cnt);
    var ansofObject={
        sum:calculatedsum
    }
    res.status(200).send(ansofObject);
}

app.get("/createuser", handlesfirstrequest);

function started(){
    console.log(`App listening on port ${port}`);
}

app.listen(port, started);

#///////////////////////////////////////////////////////////
function data(jsonbody){
    console.log(jsonbody);
}

function callbackfn(result){
        result.json().then(data)
}
var obj={
    method:"GET",
}

fetch("http://localhost:3000/createuser?cnt=10",obj).then(callbackfn)
