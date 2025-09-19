const express=require("express");
const app=express();

const PORT = process.env.PORT || 9898;

app.get("/",(req,res)=>{
    res.send("<h1> hello from express + Docker....!!</h1>");
})

app.listen(PORT,()=>{
    console.log("server started at PORT:",PORT);
})