import { database, client } from "../config.js";
import { ObjectId } from "mongodb";

export async function deleteWord(req, res) {
  try {
    await client.connect();
    const words = database.collection("words");

    const result = await words.deleteOne({ _id: new ObjectId(req.body._id) });

    if (result?.deletedCount === 1) {
      res.json({
        ok: true,
        res: "Документ успешно удален",
      });
    }
  } catch (error) {
    res.status(500).send(error);
  } finally {
    await client.close();
  }
}

export async function updateWord(req, res) {
  try {
    await client.connect();
    const words = database.collection("words");

    const filter = { _id: new ObjectId(req.body._id) };

    const update = {
      $set: req.body.newData,
    };

    const result = await words.updateOne(filter, update);

    if (result?.modifiedCount === 1) {
      res.json({
        ok: true,
        res: "Документ успешно изменен",
      });
    }
  } catch (error) {
    res.status(500).send(error);
  } finally {
    await client.close();
  }
}
