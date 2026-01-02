const express = require('express');
const bodyParser = require('body-parser');
const fs = require("fs");

const app = express();
app.use(bodyParser.json());

function findIndex(arr, id) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) return i;
  }
  return -1;
}

function removeAtIndex(arr, index) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== index) newArray.push(arr[i]);
  }
  return newArray;
}

// GET /todos
app.get('/todos', (req, res) => {
  fs.readFile("todos.json", "utf-8", (err, data) => {
    if (err) throw err;
    const answer = JSON.parse(data);
    res.json(answer);
  });
});

// POST /todos
app.post('/todos', (req, res) => {
  const newTodo = {
     id: Math.floor(Math.random() * 1000000),
    title: req.body.title,
    description: req.body.description
  };
  fs.readFile("todos.json", "utf8", (err, data) => {
    if (err) throw err;
    const todos = JSON.parse(data);
    todos.push(newTodo);
    fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
      if (err) throw err;
      res.status(201).json(newTodo);
    });
  });
});

DELETE /todos/:id
app.delete('/todos/:id', (req, res) => {
  fs.readFile("todos.json", "utf8", (err, data) => {
    if (err) throw err;
    let todos = JSON.parse(data); // ✅ Changed const → let
    const todoIndex = findIndex(todos, parseInt(req.params.id));
    if (todoIndex === -1) {
      res.status(404).json({ message: "Todo not found" });
    } else {
      todos = removeAtIndex(todos, todoIndex);
      fs.writeFile("todos.json", JSON.stringify(todos), (err) => {
        if (err) throw err;
        res.status(200).json({ message: "Todo deleted successfully" });
      });
    }
  });
});

// Fallback for all other routes
app.use((req, res) => {
  res.status(404).send();
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
