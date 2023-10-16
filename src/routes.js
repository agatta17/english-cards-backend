import { Router } from "express";

import { getWords, getRandomWords, getGroups } from "./controller/request.js";
import {
  insertWords,
  insertGroup,
  insertWord,
} from "./controller/recording.js";
import { deleteWord, updateWord } from "./controller/editing.js";

const router = Router();

router.get("/", (req, res) => {
  res.end("<h1>API is working</h1>");
});

router.get("/words", getWords);
router.get("/random-words", getRandomWords);
router.get("/groups", getGroups);

router.post("/words", insertWords);
router.post("/group", insertGroup);
router.post("/word", insertWord);

router.put("/word", updateWord);
router.delete("/word", deleteWord);

export default router;
