const express = require("express")
const router = express.Router()
const MenuItem = require('../models/menuItem')


router.get("/", async (req,res) => {
    try {
        const response = await MenuItem.find()
        res.send(response)
    }
    catch(err){
        console.log("Some Internal Error :-  ", err.message())
    }
})


router.post("/", async (req,res) => {
    try{
        const menuItemData = req.body
        const newMenuItem = new MenuItem(menuItemData)
        await newMenuItem.save()
        res.send("data created successfully")
    }
    catch(err){
        console.log("Some Internal Error:- ", err)
    }
})

router.put("//:menuId", async (req,res) => {
    try{
        const {menuId} = req.params
        const updateMenuData = req.body
        const updatedMenuItem = await MenuItem.findByIdAndUpdate(menuId, updateMenuData,{
            new: true,
            runValidators: true
        })
        res.send("menuData Updated Successfully")
    }
    catch(err){
        console.log('Some Internal Error:-  ', err)
    }
})

router.delete("//:menuId", async (req, res) => {
    try{
        const {menuId} = req.params
        await MenuItem.findByIdAndDelete(menuId)
        res.send("data deleted Successfully")
    }
    catch(err){
        console.log("Some Internal Error:- ", err)
    }
})

module.exports = router