// server.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();
const routes = require('./routes/routes.js');
const requestIp = require('request-ip');
var ipMiddleware = (req, res, next) => {
    constclientIP = requestIp.getClientIp(req);
    next();
};
// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.enable('trust proxy');
//app.use(requestIp.mw());
app.use(express.static('public'));
app.use('/', routes);

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function(req, res) {
    res.json({ greeting: 'hello API' });
});

app.get('*', (req, res) => {
    res.writeHead(404, "Not Found", { 'content-Type': 'text/plain' }).end("Not Found");
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
    console.log('Your app is listening on port ' + listener.address().port);
});