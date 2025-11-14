const express = require("express");
const app = express();
const routes = require("./routes"); // lo crearemos después
app.use(express.json());
app.use("/api/v1", routes);
app.get("/health", (req, res) => res.json({ status: "ok" }));
module.exports = app;