import { Router } from "express";

import { getWords, getGroups } from "./controller/request.js";
import { insertWords, insertGroup } from "./controller/recording.js";
import { generateWordsByList } from "./controller/generation.js";

const router = Router();

router.get("/", (req, res) => {
  res.end("<h1>API is working</h1>");
});

router.get("/words", getWords);
router.get("/groups", getGroups);

router.post("/words", insertWords);
router.post("/group", insertGroup);

router.post("/generate-by-list", generateWordsByList);

// router.put("/word", updateWord);
// router.delete("/word", deleteWord);

export default router;
