import { Router } from "express";

import { getWords, getGroups } from "./controller/request.js";
import { insertWords, insertGroup } from "./controller/recording.js";
import {
  generateWordsByList,
  generateWordsByTopic,
} from "./controller/generation.js";
import { deleteWord } from "./controller/editing.js";

const router = Router();

router.get("/", (req, res) => {
  res.end("<h1>API is working</h1>");
});

router.get("/words", getWords);
router.get("/groups", getGroups);

router.post("/words", insertWords);
router.post("/group", insertGroup);

router.post("/generate-by-list", generateWordsByList);
router.post("/generate-by-topic", generateWordsByTopic);

// router.put("/word", updateWord);
router.delete("/word", deleteWord);

export default router;
