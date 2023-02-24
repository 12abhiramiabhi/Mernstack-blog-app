const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const blogaddModel = require("../models/blogaddModel");
const addCommndModel = require("../models/addCommndModel");

const blog = (req, res) => {
  res.send("hai");
};

const login = async (req, res) => {
  console.log(req.body); //fron end//

  // console.log(user)

  try {
    let user = await userModel.findOne({ email: req.body.email }); //data base user te object//

    if (user == null) {
      res.json({ sucess: false, message: "email validation error" }); //user illegil null //
    } else {
      let pCrct = await bcrypt.compare(req.body.password, user.password); //encript cheythathum illathathum//
      if (pCrct) {
        res.json({ sucess: true, message: "successfully logedin" }); //password  correct avubol succeesful//
      } else {
        res.json({ sucess: false, message: "password validation error" }); //passwor thett avubol fales//
      }
    }
  } catch (error) {
    res.json({ sucess: false, message: "database validation error" });
    console.log(error);
  }
};

const Blogadded = async (req, res) => {
  console.log(req.body);
  try {
    await blogaddModel.create(req.body);
    res.json({ sucess: true, msg: "successfully added " });
  } catch (error) {
    res.json({ sucess: false, msg: "validation error" });
    console.log(error);
  }
};

const getBlogPage = async (req, res) => {
  let getBlog = await blogaddModel.find();
  console.log(getBlog);
};

const userSignup = async (req, res) => {
  console.log(req.body);

  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);

    await userModel.create(req.body);
    res.json({ sucess: true, message: "sucessfully added signup" });
  } catch (error) {
    res.json({ sucess: false, message: "validation error" });
    console.log(error);
  }
};

const getAllBlog = async (req, res) => {
  console.log(req.body);
  try {
    let getBlog = await blogaddModel.find();
    console.log(getBlog);
    res.json({ sucess: true, message: "sucessfully added signup", getBlog });
  } catch (error) {
    res.json({ sucess: false, message: "validation error" });
    console.log(error);
  }
};

const categary = async (req, res) => {
  try {
    let getBlog = await blogaddModel.find({ categary: req.params.categary });
    console.log(getBlog);
    res.json({ sucess: true, message: "sucessfully added ", getBlog });
  } catch (error) {
    res.json({ sucess: false, message: " error" });
    console.log(error);
  }
};

const allCategaryPage = async (req, res) => {
  try {
    let getBlog = await blogaddModel.find({ categary: req.params.categary });
    console.log(getBlog);
    res.json({ sucess: true, message: "sucessfully added ", getBlog });
  } catch (error) {
    res.json({ sucess: false, message: " error" });
    console.log(error);
  }
};

const addCommnd = async (req, res) => {
  try {
    req.body.date = new Date().toDateString();
    req.body.blogId = req.params.blogId;
    await addCommndModel.create(req.body);
    res.json({ sucess: true, message: "successfully  commend add" });
  } catch (error) {
    res.json({ sucess: false, message: " error" });
    console.log(error);
  }
};
const updateBlog = async function (req, res) {
  console.log(req.body)
  try {
    await blogaddModel.findOneAndUpdate({ _id: req.params._id }, req.body)
    res.json({ sucess: true, msg: "suecssfully Edit Your Blog" });

  } catch (error) {
    res.json({ sucess: false, msg: " Retry!!!! Please Try Again " })
    console.log(error)
  }

}
const cmntBlogPage = async function (req, res) {
  console.log(req.body)
  try {
    let allCmnts = await addCommndModel.find({ blogId: req.params.id })
    console.log(allCmnts)
    res.json({ sucess: true, msg: "suecssfully Cmnt Your Blog", allCmnts });
  } catch (error) {
    res.json({ sucess: false, msg: " NetWork Error!!!! Please Try Again " })
    console.log(error)
  }

}

module.exports = {
  blog,
  userSignup,
  login,
  Blogadded,
  getBlogPage,
  getAllBlog,
  categary,
  allCategaryPage,
  addCommnd,
  updateBlog,
  cmntBlogPage
};
