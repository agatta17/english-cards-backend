import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://adephimova:UuFFFuD3EUj1csSm@cluster0.bf2teql.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const database = client.db("english_words");

export async function getWords(req, res) {
  try {
    await client.connect();
    const words = database.collection("words");

    const groupId = Number(req.query.group_id);

    const params = {};
    if (groupId) params.groupId = groupId;

    const data = await words.find(params).toArray();

    res.json(data);
  } catch (error) {
    res.status(500).send(error);
  } finally {
    await client.close();
  }
}

export async function getGroups(req, res) {
  try {
    await client.connect();
    const groups = database.collection("groups");

    const data = await groups.find().toArray();

    res.json(data);
  } catch (error) {
    res.status(500).send(error);
  } finally {
    await client.close();
  }
}

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
