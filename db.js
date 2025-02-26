const mongoose = require("mongoose")
require('dotenv').config()

const mongodburl = process.env.MONGODB_LOCAL_URL
// const mongodburl = "mongodb+srv://riteshsoni062023:Ritesh2025@cluster0.crqm1.mongodb.net/"

mongoose.connect(mongodburl)

const db = mongoose.connection

db.on("connected",() =>{
    console.log("Mongodb connected")
})

db.on("error",(err) => {
    console.log("Some internal error occured",err)
})

db.on("disconnected",()=>{
    console.log("Mongodb disconnected")
})

module.exports = db
