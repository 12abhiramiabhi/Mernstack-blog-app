const express = require("express");
const router = express.Router();
const {
  blog,
  userSignup,
  login,
  Blogadded,
  getAllBlog,
  categary,
  allCategaryPage,
} = require("../controllers/usercontrollers");

router.get("/", blog);
router.post("/userSignup", userSignup);
router.post("/loginPage", login);
router.post("/Blogadded", Blogadded);
router.get("/getBlog", getAllBlog);
router.get("/blog-by-categary/:categary", categary);
router.get("/cate", allCategaryPage);

module.exports = router;
