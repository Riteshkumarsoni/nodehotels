const mongoose = require("mongoose")

const mongodburl = "mongodb://127.0.0.1:27017/hotels"

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
