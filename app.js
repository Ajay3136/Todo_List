// modules required

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

//Local module

const date = require(__dirname + "/date.js");


const app = express();
var workItems=[];
var items=["Buy food","Cook Food","Eat food"];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  let day = date.getDay();
  res.render("list", { listTitle: day, addItem : items });

});

// Homepage

app.post("/", function(req,res) {
  var item = req.body.newItem;

// If the day is working day the add to the work todo list.

  if(req.body.list==="Work")
  {
    workItems.push(item);
    res.redirect("/work");

//else add to Default todo list.

  }
  else {
    items.push(item);
    res.redirect("/");
  }
});

//New route for workday list items.

app.get("/work", function(req, res){
  res.render("list", { listTitle: "Work list", addItem: workItems});
});

//New route for about page.

app.get("/about",function(req,res){
  res.render("about");
})

//Listens the app on server 3000.

app.listen(3000, function() {
  console.log("server running on port 3000");
});
