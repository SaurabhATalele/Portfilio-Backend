const mongoose = require('mongoose');


const db = mongoose.connect("mongodb+srv://saurabhatalele:dJoMilJYBpzfhFYX@cluster0.eynpcd3.mongodb.net/?retryWrites=true&w=majority")

console.log("connection successful!!!!");

const contact = new mongoose.Schema({
        name:String,
        email:String,
        phone:String,
        subject:String,
        message:String
})


const model = mongoose.model('contact',contact)

module.exports = model;


