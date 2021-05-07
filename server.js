require("dotenv").config();
require("./discordBot");
const express = require("express");
const app = express();
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const http = require('http');
const https = require('https');

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