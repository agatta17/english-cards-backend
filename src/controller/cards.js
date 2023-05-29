import { openDb } from "../configDB.js";

export async function selectWords(req, res) {
  openDb().then((db) => {
    db.all("SELECT * FROM Words").then((words) => res.json(words));
  });
}

export async function selectPessoa(req, res) {
  let id = req.params.id;
  openDb().then((db) => {
    db.get("SELECT * FROM test WHERE id=?", [id]).then((pessoa) =>
      res.json(pessoa)
    );
  });
}

export async function insertWord(req, res) {
  let {
    id,
    association,
    done,
    englishExample,
    englishWord,
    groupId,
    picture,
    russianExample,
    russianWord,
  } = req.body;
  openDb().then((db) => {
    russianExample;
    db.run(
      "INSERT INTO Words (id, association, done, englishExample, englishWord, groupId, picture, russianExample, russianWord) VALUES (?,?,?,?,?,?,?,?,?)",
      [
        id,
        association,
        done,
        englishExample,
        englishWord,
        groupId,
        picture,
        russianExample,
        russianWord,
      ]
    );
  });
  res.json({
    statusCode: 200,
  });
}

export async function updatePessoa(req, res) {
  let pessoa = req.body;
  openDb().then((db) => {
    db.run("UPDATE Pessoa SET nome=?, idade=? WHERE id=?", [
      pessoa.nome,
      pessoa.idade,
      pessoa.id,
    ]);
  });
  res.json({
    statusCode: 200,
  });
}

export async function deletePessoa(req, res) {
  let id = req.body.id;
  openDb().then((db) => {
    db.get("DELETE FROM Pessoa WHERE id=?", [id]).then((res) => res);
  });
  res.json({
    statusCode: 200,
  });
}
