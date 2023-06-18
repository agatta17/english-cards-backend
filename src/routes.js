import { Router } from "express";

import {
  getWords,
  getGroups,
  insertWords,
  insertGroup,
  getDataFromAi,
} from "./controller/cards.js";

const router = Router();

router.get("/", (req, res) => {
  res.end("<h1>API is working</h1>");
});

router.get("/words", getWords);
router.get("/groups", getGroups);
router.post("/word", insertWords);
router.post("/group", insertGroup);
router.post("/ai", getDataFromAi);
// router.put("/pessoa", updatePessoa);
// router.delete("/pessoa", deletePessoa);

export default router;
