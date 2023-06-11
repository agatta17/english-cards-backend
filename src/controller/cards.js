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

export async function insertGroups(req, res) {
  try {
    await client.connect();
    const words = database.collection("groups");

    await words.insertMany([
      { id: 1675753635179, name: "Why women kill" },
      { id: 1675754378680, name: "Общая" },
      { id: 1675754923284, name: "Карты деньги 2 ствола" },
      { id: 1676179199268, name: "Getting There" },
      { id: 1676189101146, name: "Eat out" },
      { id: 1676525658228, name: "Из тетрадки" },
      { id: 1677062871151, name: "Спорт" },
      { id: 1677750894688, name: "Семья" },
      { id: 1678203590343, name: "Венсдей" },
      { id: 1678376763770, name: "Образование" },
      { id: 1678793305151, name: "Places to stay" },
      { id: 1679383138675, name: "weather" },
      { id: 1679639030098, name: "On the phone" },
      { id: 1679850745417, name: "Nature" },
      { id: 1684835130652, name: "Май" },
    ]);

    res.json({
      statusCode: 200,
    });
  } catch (error) {
    res.status(500).send(error);
  } finally {
    await client.close();
  }
}
