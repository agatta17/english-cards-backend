import express from "express";

const app = express();
app.use(express.json());

import router from "../src/routes.js";
app.use(router);

app.listen(80, () => console.log("Server has been started..."));