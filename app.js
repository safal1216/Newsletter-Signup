const express=require("express");
const Parse=require("body-parser");
const bodyParser = require("body-parser");
const date=require(__dirname +"/date.js")
const app=express();

let items=["play","cricket"];
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));

app.get("/todo",(req,res)=>{
    let day=date.getday();
    res.render("list", {currdate:day ,newitems:items});
});

app.post("/todo",(req,res)=>{
    let item=req.body.newItem;
    items.push(item);
    res.redirect("/todo");
});

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/signup.html");
});

app.post("/",(req,res)=>{
    res.redirect('/todo');
});


app.listen(3000,() => 
    {console.log("using localhost 3000")});