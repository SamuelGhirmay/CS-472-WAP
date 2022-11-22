/**
 * index.js
 */

"use strict";


const express=require("express");

const app=express();

console.log(`Product managment server starting ..... please wait`);

app.get("/",(req,res)=>{
    res.send(`<h1> Hellow Product managment webapp homepage<>/h1`);
});

const PORT_NUMBER=9000;

app.listen(PORT_NUMBER, ()=>{
    console.log(`Product managment serever started listning on prot ${PORT_NUMBER}`);
});