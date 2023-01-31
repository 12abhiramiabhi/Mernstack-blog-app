const express = require("express");
const router = express.Router();
const {
  blog,
  userSignup,
  login,
  Blogadded,
  getAllBlog,
} = require("../controllers/usercontrollers");

router.get("/", blog);
router.post("/userSignup", userSignup);
router.post("/loginPage", login);
router.post("/Blogadded", Blogadded);
router.get("/getBlog", getAllBlog);


module.exports = router;
