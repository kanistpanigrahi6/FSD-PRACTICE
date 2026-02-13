const express = require("express");
const app=express();
const port=3000;

function calculate(cnt){
    var sum=0;
    for(var i=0;i<cnt;i++){
        sum=sum+i
    }
    return sum;
}

function handlesfirstrequest(req,res){
    var cnt=req.query.cnt;
    console.log(req.query.cnt1)
    console.log(req.query.cnt2)
    var calculatedsum=calculate(cnt);
    console.log(calculatedsum)
    var answer="The sum is "+calculatedsum
    res.send(answer);
}
app.get("/",handlesfirstrequest);

// function welcomepage(req,res){
//     res.send("Welcome to my app");
// }
// app.get(`/welcome`,welcomepage);

// function aboutpage(req,res){
//     res.send("This is a simple express app");
// }
// app.get(`/about`,aboutpage);

function started(){
    console.log(`App listening on port ${port}`);

}
app.listen(port,started)

 
