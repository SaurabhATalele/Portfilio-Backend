const express = require('express')
const bodyParser = require('body-parser');
const db = require('./db')


const server = express()
const PORT = process.env.PORT || 5000
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.json())

server.get('',(req,res)=>{
    res.send("hello World")
})

server.get('/get',(req,res)=>{
    res.send("hello World get")
})


server.post("/addcontact",(req,res)=>{
    const data = req.body
    db.create(data)
   
    
    res.send('Hello')
})

server.listen(PORT,()=>{
    console.log(`listening to port ${PORT}`);
})