const express = require("express");
var bodyParser = require('body-parser');
const app = express();
const port = 3000;


function middleware1(req, res, next){
    console.log("from inside a middleware " + req.headers.cnt);
    next();
}
app.use(middleware1);

app.use(bodyParser.json());

function calculate(cnt){
    var sum = 0;
    for(var i = 0; i <= cnt; i++){
        sum = sum + i;
    }
    return sum;
}

function handlesfirstrequest(req, res){
    console.log(req.body)
    var cnt = req.body.cnt;   
    var calculatedsum = calculate(cnt);

    console.log(calculatedsum);

    var answer = "The sum is " + calculatedsum;
    res.send(answer);
}

app.post("/createuser", handlesfirstrequest);

function started(){
    console.log(`App listening on port ${port}`);
}

app.listen(port, started);
