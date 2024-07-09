const express = require("express");
const app = express();

const mainRouter = require("./app/routes/index.js");

app.use(express.json());
app.use(mainRouter);

app.listen(3001,'localhost', () => console.log("start server! port: 3001"));