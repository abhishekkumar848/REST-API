const express = require("express");
const app = express();
const path = require("path");

let port = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

let posts = [
    { username: "ABHSISHEK", content: "This is my first post" },
    { username: "RAJ", content: "hello everyone" },
    { username: "SHIVAM", content: "I am a web developer" }
];
app.get("/posts",(req,res) =>{
 res.render("index.ejs" , {posts});
})
app.get("/posts/new",(req,res)=>{
res.render("new.ejs");
})
app.post("/posts",(req,res)=>{
    let {username,content} = req.body;
    posts.push({username,content});
    console.log(req.body);
    res.send("post was working");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
