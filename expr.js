const express = require("express");
const path = require("path")
const app = express();
const port = 4000;

app.get("/" , (req , res)=>{
    console.log(path.join(__dirname+ "/login.html"))
    res.sendFile(path.join(__dirname+ "/login.html"));
});
app.get("/" , (req , res)=>{
    res.sendFile("./login.html")
});
app.post("/" , (req , res)=>{
    const username = req.body.name;
});



app.listen(port, ()=> {
    console.log('server is working on port: ${port}');

});