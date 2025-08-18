const express = require('express');
const bodyParser = require('body-parser');
const { title } = require('process');
const app = express();
// const path=require("path")
const cors=require("cors") ////fixing cors error
app.use(cors())

app.use(bodyParser.json());

let todos = [];

function findindex(arr,id){
  for(let i=0;i<arr.length;i++){
    if (arr[i].id===id) return i;
      
  }
  return -1;
}

function removeAtIndex(arr,index){
  let newarray=[];
  for (let i=0;i<arr.length;i++){
    if(i!==index)
      newarray.push(arr[i]);
  }
  return newarray;
}

app.get(`/todos`,(req,res)=>{
  res.json(todos);
});

var ctr=1;
app.post(`/todos`,(req,res)=>{
  const newtodo={
    id: ctr,          //Math.floor(Math.random()*1000000)
    title:req.body.title,
    description:req.body.description
  };
  ctr+=1;
  todos.push(newtodo);
  res.status(201).json(newtodo);
});

app.delete(`/todos/:id`,(req,res)=>{
    const todoindex=findindex(todos,parseInt(req.params.id));
    if(todoindex==-1){
      res.status(404).send();
    }
    else{
      todos=removeAtIndex(todos,todoindex);
      res.status(200).send();
    }
});

// app.get(`/`,(req,res)=>{
//   res.sendFile(path.join(__dirname,"index.html"));

// });

app.use((req,res,next)=>{
  res.status(404).send();
})

app.listen(3000);
