import { Router } from "express";
import {
  insertWord,
  updatePessoa,
  selectWords,
  selectPessoa,
  deletePessoa,
} from "./controller/cards.js";

const router = Router();

router.get("/", (req, res) => {
  res.end("<h1>API is working</h1>");
});

router.get("/words", selectWords);
router.get("/pessoa/:id", selectPessoa);
router.post("/word", insertWord);
router.put("/pessoa", updatePessoa);
router.delete("/pessoa", deletePessoa);

export default router;
