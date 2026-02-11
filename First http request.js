const express = require("express");
const app=express();
const port=3000;

function handlesfirstrequest(req,res){
    res.send("Hello worldaaa");
}
app.get("/",handlesfirstrequest);

function started(){
    console.log(`App listening on port ${port}`);

}
app.listen(port,started)
