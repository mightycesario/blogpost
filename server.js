// import npm packages
const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
const path = require("path")
const routes = require("./routes/api")

const app = express()
const PORT = process.env.PORT || 8080

MONGODB_URI = "mongodb+srv://admin:adminadmin1@cluster0.wrlm7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})

mongoose.connection.on("connected", () => {
  // debug message for terminal output
  console.log("Mongoose is connected.");
})



app.use(morgan("tiny"))
app.use("/api", routes)

// debug message for terminal output
app.listen(PORT, console.log(`Your server is listening on port ${PORT}`))