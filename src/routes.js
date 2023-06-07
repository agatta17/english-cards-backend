import { Router } from "express";
import {
  selectWords,
  selectWord,
  insertWord,
  // updatePessoa,
  // deletePessoa,
} from "./controller/cards.js";

const router = Router();

router.get("/", (req, res) => {
  res.end("<h1>API is working</h1>");
});

router.get("/words", selectWords);
router.get("/word/:id", selectWord);
router.post("/word", insertWord);
// router.put("/pessoa", updatePessoa);
// router.delete("/pessoa", deletePessoa);

export default router;
