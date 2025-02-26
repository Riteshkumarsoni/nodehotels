const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const db = require("./db")
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000

app.get("/",(req,res) => {
    res.send("HEllo World")
})

const personRoutes = require('./routes/personRoutes')
const menuItemRoutes = require("./routes/menuItemRoutes")

app.use("/person", personRoutes)
app.use("/menuItem", menuItemRoutes)

//  server listen on 3000 port
app.listen(PORT, () => {
    console.log("Server is running at http://localhost:3000")
})