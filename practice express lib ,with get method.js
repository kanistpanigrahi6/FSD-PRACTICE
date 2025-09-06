const express=require("express")
var app=express();
const port=3000

function calculate(counter){
    var sum=0
    for(let i=0;i<counter;i++){
        sum=sum+i
    }
    return sum;
}

function handlefirstrequest(req,res){
    var calculatedsum=calculate(99);
    console.log(calculatedsum)
    var answer="the sum is"+calculatedsum
    res.send(answer)
}
app.get(`/handlesum`,handlefirstrequest)

function started(){
    console.log(`Example app listening on port ${port}`)
}
app.listen(port,started)




