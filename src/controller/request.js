import { database, client } from "../config.js";

export async function getWords(req, res) {
  try {
    const groupId = Number(req.query.group_id);

    if (!groupId)
      return res
        .status(500)
        .json({ error: "Не выбрана группа для получения слов" });

    await client.connect();

    const words = database.collection("words");
    const data = await words.find({ groupId }).toArray();

    const groups = database.collection("groups");
    const groupData = await groups.findOne({ id: groupId });
    const owner = groupData?.user || "unknown";

    const response =
      owner === req.username ? { words: data } : { words: data, owner };

    res.json(response);
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

    const data = await groups.find({ user: req.username }).toArray();

    res.json({ username: req.username, groups: data });
  } catch (error) {
    res.status(500).send(error);
  } finally {
    await client.close();
  }
}
