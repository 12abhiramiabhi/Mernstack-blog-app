const express = require("express");
const router = express.Router();
const {
  blog,
  userSignup,
  login,
  Blogadded,
  getAllBlog,
  categary,
} = require("../controllers/usercontrollers");

router.get("/", blog);
router.post("/userSignup", userSignup);
router.post("/loginPage", login);
router.post("/Blogadded", Blogadded);
router.get("/getBlog", getAllBlog);
router.get("/blog-by-categary/:categary", categary);

module.exports = router;
