const path = require("path");
const express = require("express");
const app = express();
app.use (express.static(__dirname + 'dist/employee'));
app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname, 'dist/employee','index.html'))
});

//start the app by listening on the dafault Heroku port

app.listen(process.env.PORT || 5000);