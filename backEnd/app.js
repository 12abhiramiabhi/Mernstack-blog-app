const express = require("express")
const app = express()
const path = require('path');
const cors = require('cors');

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const mongoose = require("mongoose")
mongoose.connect('mongodb+srv://abhirami:123@cluster0.hsgwgwj.mongodb.net/blogdb?retryWrites=true&w=majority', (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(" successfully conneted to blog");
    }
});

const blogRouter = require("./routes/blog")
app.use("/", blogRouter)




app.listen(5000, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("server running at port");
    }
})