const express = require("express");
const app = express();
const routes = require("./routes");
const swaggerDocs = require("../swagger");

app.use(express.json());

swaggerDocs(app);

app.use("/api/v1", routes);

app.get("/health", (req, res) => res.json({ status: "ok" }));

module.exports = app;
