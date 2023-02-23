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
  addCommnd,
  updateBlog,
  cmntBlogPage
} = require("../controllers/usercontrollers");

router.get("/", blog);
router.post("/userSignup", userSignup);
router.post("/loginPage", login);
router.post("/Blogadded", Blogadded);
router.get("/getBlog", getAllBlog);
router.get("/blog-by-categary/:categary", categary);
router.get("/cate", allCategaryPage);
router.post("/addCommnd/:blogId", addCommnd);
router.post("/update-blog/:_id", updateBlog)
router.get("/cmnt-blog/:id", cmntBlogPage)
module.exports = router;
