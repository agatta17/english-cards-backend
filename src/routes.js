import { Router } from "express";

import { getWords, insertWords, insertGroups } from "./controller/cards.js";

const router = Router();

router.get("/", (req, res) => {
  res.end("<h1>API is working</h1>");
});

router.get("/words", getWords);
router.post("/word", insertWords);
router.post("/groups", insertGroups);
// router.put("/pessoa", updatePessoa);
// router.delete("/pessoa", deletePessoa);

export default router;
