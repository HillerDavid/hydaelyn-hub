require("dotenv").config();
require("./discordBot");
const express = require("express");
const app = express();
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const server = require('http').createServer(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);

server.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT: ${PORT} `)
})