var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var methodOverride = require('method-override');
var hostname = process.env.HOSTNAME || 'localhost';
var port = 8080;

app.get("/", function (req, res) {
      res.redirect("/index.html");
});


var todoList = [];


<<<<<<< HEAD

app.get("/addTodo", function (req, res) {
    todoList.push(req.query);
    res.send(JSON.stringify(todoList));
});


app.get("/deleteTodo", function (req, res) {
    var index = parseInt(req.query.index);
    todoList.splice(index,1);
    res.send(JSON.stringify(todoList));
});

app.get("/getTodos", function (req, res) {
    res.send(JSON.stringify(todoList));
});
=======
var addCallback = function (req, res) {
    console.log(req.query);
    todoList.push(req.query);
    res.send("Todo added!");
}



app.get("/addTodo", addCallback);


>>>>>>> e7f61bad9f42e7a4661a16e8a5b5ac8a12ef9ceb

app.use(methodOverride());
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));
app.use(errorHandler());

console.log("Simple static server listening at http://" + hostname + ":" + port);
<<<<<<< HEAD
app.listen(port);
=======
app.listen(port);
>>>>>>> e7f61bad9f42e7a4661a16e8a5b5ac8a12ef9ceb
