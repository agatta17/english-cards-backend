import { MongoClient } from "mongodb";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

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

export async function getDataFromAi(req, res) {
  const { wordList, groupId } = req.body;
  const content = `Составь из списка слов json массив объектов с полями englishWord, russianWord, englishExample, russianExample. Где englishWord - это анлийское слово, russianWord -  перевод на русский (если переводов несколько, то нужно вывести основные через запятую), englishExample - пример использования в предложении,  russianExample - перевод примера на русский. Пришли только json без комментариев и без символов. Вот список: ${wordList}.`;
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content },
      ],
    });

    const data = JSON.parse(completion.data.choices[0].message.content);

    const isArr = Array.isArray(data);

    if (!isArr) {
      res.status(500).send("Ошибка генерации данных. Попробуйте снова");
      return;
    }

    const wordSet = data.map((item) => ({
      ...item,
      groupId,
      association: "",
      done: false,
      picture: "https://cdn-icons-png.flaticon.com/512/3983/3983886.png",
    }));

    await client.connect();
    const words = database.collection("words");

    await words.insertMany(wordSet);

    res.json({
      statusCode: 200,
    });
  } catch (error) {
    res.status(500).send(error);
  } finally {
    await client.close();
  }
}
