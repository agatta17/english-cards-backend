import { Router } from "express";

import { commonMiddleware, getGroupsMiddleware } from "./middleware.js";

import { login, register } from "./controller/authorization.js";
import { getWords, getRandomWords, getGroups } from "./controller/request.js";
import {
  insertWords,
  insertGroup,
  insertWord,
} from "./controller/recording.js";
import {
  deleteWord,
  updateWord,
  deleteGroup,
  updateGroup,
} from "./controller/editing.js";

const router = Router();

router.get("/", (req, res) => {
  res.end("<h1>API is working</h1>");
});

router.post("/login", login);
router.post("/register", register);

router.get("/words", getWords);
router.get("/random-words", commonMiddleware, getRandomWords);
router.get("/groups", getGroupsMiddleware, getGroups);

router.post("/words", commonMiddleware, insertWords);
router.post("/group", commonMiddleware, insertGroup);
router.post("/word", commonMiddleware, insertWord);

router.put("/word", commonMiddleware, updateWord);
router.put("/group", commonMiddleware, updateGroup);
router.delete("/word", commonMiddleware, deleteWord);
router.delete("/group", commonMiddleware, deleteGroup);

export default router;
