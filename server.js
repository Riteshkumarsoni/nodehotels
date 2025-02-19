const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const db = require("./db")
app.use(bodyParser.json())

app.get("/",(req,res) => {
    res.send("HEllo World")
})

const personRoutes = require('./routes/personRoutes')
const menuItemRoutes = require("./routes/menuItemRoutes")

app.use("/person", personRoutes)
app.use("/menuItem", menuItemRoutes)


app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000")
})