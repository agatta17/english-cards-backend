import { openai, database, client } from "../config.js";

export async function generateWordsByList(req, res) {
  const { wordList, groupId } = req.body;
  const content = `Составь из списка слов json массив объектов с полями englishWord, russianWord, englishExample, russianExample. Где englishWord - это анлийское слово, russianWord -  перевод на русский (если переводов несколько, то нужно вывести основные через запятую), englishExample - пример использования в предложении,  russianExample - перевод примера на русский. В примерах выдели само слово тегом <em></em>. Пришли только json без комментариев и без символов. Вот список: ${wordList}.`;
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
