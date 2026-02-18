const express = require("express");
const app=express();
const port=3000;

function middleware1(req, res, next){
    console.log("from inside a middleware " + req.headers.cnt);
    next();
}
app.use(middleware1);

function calculate(cnt){
    var sum=0;
    for(var i=0;i<cnt;i++){
        sum=sum+i
    }
    return sum;
}

function handlesfirstrequest(req,res){
    console.log(req.headers);
    var cnt=req.headers.cnt; 
    var calculatedsum=calculate(cnt);
    console.log(calculatedsum)
    var answer="The sum is "+calculatedsum
    res.send(answer);
}
// app.get("/handleuser",handlesfirstrequest);
app.post("/createuser",handlesfirstrequest)



function started(){
    console.log(`App listening on port ${port}`);

}
app.listen(port,started)

 
