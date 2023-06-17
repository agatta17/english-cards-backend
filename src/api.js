import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());

var allowedOrigins = [
  "http://localhost:8080",
  "https://english-cards-zeta.vercel.app",
];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

import router from "./routes.js";
app.use(router);

app.listen(80, () => {
  console.log("Server has been started...");
});
