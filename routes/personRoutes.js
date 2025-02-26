const express = require("express")
const router = express.Router()
const Person = require("../models/person")

router.post("/", async (req,res) => {
    try{
        const data = req.body
        const newPerson = new Person(data)
        await newPerson.save()
        res.send("data saved successfully")
    }
    catch(err){
        res.status(500).send("Some Error Occured",err)
    }
})

router.get('/', async (req,res) => {
    try{
        const data = await Person.find()
        res.send(data)
    }
    catch(err){
        console.log("Some Error Occured",err)
    }
})

router.delete('/:personId', async (req,res) => {
    try{
        const {personId} = req.params
        const response = await Person.findByIdAndDelete(personId)
        res.send("data deleted successfully")
    }
    catch(err){
        console.log("Some err occured : --  ", err)
    }
})

router.put("/:personId", async (req, res) => {
    try{
        const {personId} = req.params
        const updatedData = req.body
        const response = await Person.findByIdAndUpdate(personId, updatedData, {
            new: true,
            runValidators: true
        })
        if (!response){
            res.send("Person not Found")
        }
        res.send("updated successfully")
    }
    catch(err){
        res.send("some Error Occured")
    }
})

module.exports = router