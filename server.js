require("dotenv").config();
require("./discordBot");
const express = require("express");
const http = require('http');
const https = require('https');

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);
// const httpServer = http.createServer(app);
// const httpsServer = https.createServer(app);

app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT: ${PORT} `)
})