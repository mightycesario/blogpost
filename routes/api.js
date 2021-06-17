const express = require("express")
const router = express.Router()
const BlogPost = require("../models/blogPost")



//// ROUTES ////

// GET
router.get("/", (req, res) => {

  console.log("api.js > router.get > yes");
  BlogPost.find({})
    .then((data) => {
      // console.log("api.js > router.get", data);
      res.json(data)
    })
    .catch((error) => {
      console.log("error ===>", error)
    })
})


// POST
router.post("/save", (req, res) => {

  const data = req.body
  console.log("req.body ===>", req.body)

  // birth a new instance of the newBlogPost model
  const newBlogPost = new BlogPost(data)

  newBlogPost.save(error => {
    if(error) {
      res.status(500).json({ msg: "Sorry there was an error" })
    } else {
      res.json({ msg: "Your data has been saved" })
    }
  })
  
})

module.exports = router