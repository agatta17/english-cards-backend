import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());

const corsOptions = {
  origin: "http://localhost:8080",
};

app.use(cors(corsOptions));

import router from "./routes.js";
app.use(router);

app.listen(80, () => {
  console.log("Server has been started...");
});
