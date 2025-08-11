const express = require('express');
const bodyParser = require('body-parser');
const { title } = require('process');
const app = express();
app.use(bodyParser.json());

let todos = [];


app.get(`/todos`,(req,res)=>{
  res.json(todos);
})

app.post(`/todos`,(req,res)=>{
  const newtodo={
    id:Math.floor(Math.random()*1000000),
    title:req.body.title,
    description:req.body.description
  };
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
app.use((req,res,next)=>{
  res.status(404).send();
})
app.listen(3000);
