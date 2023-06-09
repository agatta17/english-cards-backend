import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://adephimova:UuFFFuD3EUj1csSm@cluster0.bf2teql.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const database = client.db("english_words");

export async function selectWords(req, res) {
  try {
    await client.connect();
    const words = database.collection("words");
    const cursor = words.find();
    const data = await cursor.toArray();

    res.json(data);
  } catch (error) {
    console.log("error >> ", error);
    res.json(error);
  } finally {
    await client.close();
  }
}

export async function insertWord(req, res) {
  // let {
  //   id,
  //   association,
  //   done,
  //   englishExample,
  //   englishWord,
  //   groupId,
  //   picture,
  //   russianExample,
  //   russianWord,
  // } = req.body;

  try {
    await client.connect();
    const words = database.collection("words");
    await words.insertOne(req.body);

    res.json({
      statusCode: 200,
    });
  } catch (error) {
    console.log("error >> ", error);
    res.json(error);
  } finally {
    await client.close();
  }
}

// export async function updatePessoa(req, res) {
//   let pessoa = req.body;
//   openDb().then((db) => {
//     db.run("UPDATE Pessoa SET nome=?, idade=? WHERE id=?", [
//       pessoa.nome,
//       pessoa.idade,
//       pessoa.id,
//     ]);
//   });
//   res.json({
//     statusCode: 200,
//   });
// }

// export async function deletePessoa(req, res) {
//   let id = req.body.id;
//   openDb().then((db) => {
//     db.get("DELETE FROM Pessoa WHERE id=?", [id]).then((res) => res);
//   });
//   res.json({
//     statusCode: 200,
//   });
// }
