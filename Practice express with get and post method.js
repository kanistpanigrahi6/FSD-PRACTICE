const express = require("express")
var app = express();
const port = 3000;

// app.use(express.json()); // to handle JSON request body

function calculate(counter) {
    var sum = 0;
    for (let i = 0; i < counter; i++) {
        sum = sum + i;
    }
    return sum;
}

function handlefirstrequest(req, res) {
    var counter = parseInt(req.query.counter); // convert query param to number
    var calculatedsum = calculate(counter);
    console.log(calculatedsum)
    var answer = "the sum is " + calculatedsum;
    res.send(answer);
}

function createuser(req, res) {
    res.send("Hello world");
}



app.get(`/handlesum`, handlefirstrequest);
app.post(`/createuser`, createuser);

function started() {
    console.log(`Example app listening on port ${port}`);
}
app.listen(port, started);
