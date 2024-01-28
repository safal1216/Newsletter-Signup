const express=require("express");
const Parse=require("body-parser");
const req=require("request");
const app=express();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(Parse.urlencoded({extended : true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.post("/",(req,res)=>{
    let firnam=req.body.Firstname;
    let lasnam=req.body.Lastname;
    let email=req.body.email;
    console.log(firnam, lasnam, email);
});

app.listen(3000,() => 
    {console.log("using localhost 3000")});