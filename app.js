const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const { artistsRouter, albumsRouter } = require("./routes/api");

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());

app.use("/api/artists", artistsRouter);
app.use("/api/albums", albumsRouter);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found path" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Internal server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
