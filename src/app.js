import express from "express";
import fs from "fs";
import http from "http";

const app = express();
app.use(express.json());

import router from "./routes.js";
app.use(router);

app.listen(3000, () => console.log("Api Rodando."));

http.createServer({}, app).listen(3001, () => console.log("Rodando em https"));
