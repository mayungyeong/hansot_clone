const http = require('http');
const express = require('express');
const app = express();
var path=require('path');
const cors = require('cors');

app.use(cors());
app.set('port', 3000);

// app.use(express.static(__dirname +'/'));
// app.set('views',path.join(__dirname,'views'));
// app.set('view engine','ejs');
// app.engine('html',require('ejs').renderFile);

app.get('/', function(req, res) {
    res.end("<h1>server open</h1>");
});

const server = http.createServer(app);
server.listen(3000, function() {
    console.log("서버 실행 중 -> http://localhost:3000");
});