// import npm packages
const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
const path = require("path")
const routes = require("./routes/api")  
require("dotenv").config()  

const app = express()
const PORT = process.env.PORT || 8080


//// MONGOOSE CONNECT FUNCTIONS AND LISTENERS ////

mongoose.connect(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})

mongoose.connection.on("connected", () => {
  // debug message for terminal output
  console.log("Mongoose is connected.");
})

//// MIDDLEWARE ////

// data parsing
app.use(express.json())
app.use(express.urlencoded({extended:false}))
 
// HTTP request logger
app.use(morgan("tiny"))
app.use("/api", routes)

// debug message for terminal output
app.listen(PORT, console.log(`Your server is listening on port ${PORT}`))