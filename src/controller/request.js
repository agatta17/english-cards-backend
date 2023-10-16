import { database, client } from "../config.js";

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

export async function getRandomWords(req, res) {
  try {
    await client.connect();
    const words = database.collection("words");

    const count = Number(req.query.count);

    const data = await words
      .aggregate([{ $sample: { size: count } }])
      .toArray();
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
