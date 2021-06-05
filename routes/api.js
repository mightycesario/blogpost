const express = require("express")
const router = express.Router()
const BlogPost = require("../models/blogPost")



// Routes
router.get("/", (req, res) => {
  const data = {
    first: "Cesario",
    last: "Menodza"
  }

  BlogPost.find({})
    .then((data) => {
      console.log("data ===>", data)
    })
    .catch((error) => {
      console.log("error ===>", error)
    })

  res.json(data)
})


router.post("/save", (req, res) => {
  console.log("reqbody ===>",req.body);
  res.json({
    mgs: "We received your data"
  })
})

module.exports = router