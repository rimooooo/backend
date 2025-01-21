const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname,"/views"));

app.get("/", (req,res) => {
   res.render("home");
});

app.listen(port, () => {
   console.log(`listening on port ${port}`);
});

app.get("/hello" , (req,res) => {
   res.send("hello");
});

app.get("/rolldice" , (req,res) => {
   //res.render("rolldice.ejs")
   let diceValue = Math.floor(Math.random()*6)+1;
   res.render("rolldice.ejs",{diceValue});
});

app.get("/ig/:username", (req,res) => {
   //let followers = ["adam" , "nemooo", "rimooo", "rimm" ];
   let {username} = req.params;
   let instaData = require("./data.json");
   const data = instaData[username];
   console.log(data);
   if(data){
      res.render("instagram.ejs",{data});
   }
   else {
      res.render("error.ejs");
   };
   //console.log(username);
   //res.render("instagram.ejs", {username, followers});
   //res.render("instagram.ejs" , {data});
});