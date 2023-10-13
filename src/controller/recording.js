import { database, client } from "../config.js";

export async function insertWords(req, res) {
  try {
    await client.connect();
    const words = database.collection("words");

    await words.insertMany(req.body.words);

    res.json({
      statusCode: 200,
    });
  } catch (error) {
    res.status(500).send(error);
  } finally {
    await client.close();
  }
}

export async function insertWord(req, res) {
  try {
    await client.connect();
    const words = database.collection("words");

    await words.insertOne(req.body.word);

    res.json({
      statusCode: 200,
    });
  } catch (error) {
    res.status(500).send(error);
  } finally {
    await client.close();
  }
}

export async function insertGroup(req, res) {
  try {
    await client.connect();
    const words = database.collection("groups");

    await words.insertOne(req.body.group);

    res.json({
      statusCode: 200,
    });
  } catch (error) {
    res.status(500).send(error);
  } finally {
    await client.close();
  }
}
