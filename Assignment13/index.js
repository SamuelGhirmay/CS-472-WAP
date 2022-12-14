/**
 * index.js
 */

"use strict";

const express=require("express");
const path=require("path");
const operation=require("./operation");
const PORT=3000;
const app=express();

app.use(express.urlencoded({extended:false}));
app.use("/static",express.static("static"));

app.post("/submitForm",function(req,res){

    const first=req.body.first;
    const second=req.body.second;
    const operator=req.body.operator;
    const result=operation(first,second,operator);

    res.redirect(303, "/send-result?result="+result);
});

app.get("/send-result",(req,res)=>{ 
    res.send(`
    The result is ${req.query.result}<br>
    <a href="/">Another calculation</a>
    `)
})

app.use("/",function (req,res) {
    console.log(__dirname);
    res.sendFile(path.join(__dirname,"./views/index.html"));
});


app.listen(PORT);


