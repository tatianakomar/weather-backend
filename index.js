const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");

// Configuration
const API_SERVICE_URL = "https://api.openweathermap.org/data/2.5/";

const app = express();
app.use(cors());
app.use(morgan("dev"));

const port = 3005;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use(
  "/onecall",
  createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
  })
);
