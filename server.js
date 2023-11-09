const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (request, response)=>{
    response.sendFile(__dirname + "/index.html");
});

app.get("/about", (request, response) => {
     response.send("hello i am jay, nice to meet you");
});


app.listen(3000, ()=> {
    console.log("server is running on port 3000,");
});