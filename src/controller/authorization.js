import { database, client, JWT_SECRET } from "../config.js";

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export async function login(req, res) {
  try {
    await client.connect();
    const users = database.collection("users");

    const params = {
      username: req.body.username,
    };
    const data = await users.find(params).toArray();

    if (!data.length) {
      res.status(401).json({ error: "Неправильное имя пользователя" });
    } else {
      const passwordMatch = await bcrypt.compare(
        req.body.password,
        data[0].password
      );

      if (passwordMatch) {
        const token = jwt.sign({ username: req.body.username }, JWT_SECRET, {
          expiresIn: "1h",
        });
        res.json({ token });
      } else {
        res.status(401).json({ error: "Неправильный пароль" });
      }
    }
  } catch (error) {
    res.status(500).send(error);
  } finally {
    await client.close();
  }
}

export async function register(req, res) {
  try {
    await client.connect();
    const users = database.collection("users");

    const params = {
      username: req.body.username,
    };
    const data = await users.find(params).toArray();

    if (data.length) {
      res.status(500).json({ error: "Имя пользователя уже существует" });
    } else {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      await users.insertOne({
        username: req.body.username,
        password: hashedPassword,
      });

      const token = jwt.sign({ username: req.body.username }, JWT_SECRET, {
        expiresIn: "1h",
      });
      res.json({ token });
    }
  } catch (error) {
    res.status(500).send(error);
  } finally {
    await client.close();
  }
}
