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


// router.get("/pizza", (req, res) => {
//   const data = {
//     first: "Laura",
//     last: "Cardello"
//   }

//   res.json(data)

// })

module.exports = router