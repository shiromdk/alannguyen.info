require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
// const promiseRouter = require("express-promise-router");
const app = express();
const server = require("http").Server(app);
const routes = require("./server/routes");
// const knex = require("knex");
// const { Model } = require("objection");
// const knexConfig = require("./knexfile");
const cors = require("cors");


// Model.knex(knex(knexConfig.development));
app.use(cors());
app.use(bodyParser.json({ extended: true, limit: "10000mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10000mb" }));
app.use(express.static("public"));

routes(app);
server.listen(process.env.PORT||8080);
