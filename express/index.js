const express = require("express");
const app = express();

//console.dir(app);
let port = 8080;
app.listen(port , () => {
   console.log(`Server is running on port ${port}`);
});
//control + c to stop 

// app.use((req,res) => {
//    console.log("request resolved");
//    //res.send("this is my first response");
//    let code = "<h1>fruits</h1> <ul><li>apple</li><li>orange</li></ul>";
//    res.send(code);
// });

//routing

// app.get("/", (req,res) => {
//    res.send("get request resolved");
// });

// app.get("/apple", (req,res) => {
//    res.send("get apple request resolved");
// });

// app.get("/orange", (req,res) => {
//    res.send("get orange request resolved");
// });

// app.get("*", (req,res) => {
//    res.send("get * request resolved");
// });

app.post("/", (req,res) => {
   res.send("this is a post request");
});

app.get("/:username/:id" ,(req,res) => {
   let {username,id} = req.params;
   let htmlStr = `<h1>Welcome to the page of @${username}</h1>`
   res.send(htmlStr);
});

// app.get("/search" , (req,res) => {
//    console.log(req.query);
//    res.send("search request resolved");
// });

app.get("/search" , (req,res) => {
   let {q} = req.query;
   //console.log(q);
   if(!q){
      res.send("<h1>search query is required</h1>");
   }
   res.send(`<h1>search results for query: ${q}</h1>`);
});

