const express = require("express"),
  app = express(),
  cors = require("cors"),
  Route = require("./lib/routeLoader"),
  path = require("path"),
  config = require("config"),
  http = require("http");

//enable cors
app.use(
  cors({
    origin: "*",
    methods: "GET,PUT,POST,DELETE",
  })
);
const port = config.get("server.port");
app.set("port", port);

// route mounting
var DIR = path.join(__dirname, "src");
Route.module_holder(DIR, app);

app.get("/public/testapi", (req, res) => {    
    res.json({ success: true, message: "API running" });
});

// Create http server
const server = http.createServer(app);

server.listen(port, () => console.log(`app online @ ${port}`));

module.exports = server;
