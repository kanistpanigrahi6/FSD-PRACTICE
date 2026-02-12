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
    var calculatedsum=calculate(100);
    console.log(calculatedsum)
    var answer="The sum is "+calculatedsum
    res.send(answer);
}
app.get("/",handlesfirstrequest);

function started(){
    console.log(`App listening on port ${port}`);

}
app.listen(port,started)

 
