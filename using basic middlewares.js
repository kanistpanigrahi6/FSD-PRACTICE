const express = require("express")
var app = express();
const port = 3000;


function middleware(req,res,next){
    console.log("from inside middleware"+req.headers.counter);
    next()
}
app.use(middleware);

function calculate(counter) {
    var sum = 0;
    for (let i = 0; i < counter; i++) {
        sum = sum + i;
    }
    return sum;
}

function handlefirstrequest(req, res) {
    console.log(req.headers)
    var counter=req.headers.counter
    //var counter =req.query.counter // convert query param to number
    var calculatedsum = calculate(counter);
    console.log(calculatedsum)
    var answer = "the sum is " + calculatedsum;
    res.send(answer);
}



//app.get(`/handlesum`, handlefirstrequest);
app.post(`/handlesum`, handlefirstrequest);

function started() {
    console.log(`Example app listening on port ${port}`);
}
app.listen(port, started);
