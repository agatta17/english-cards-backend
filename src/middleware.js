import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config.js";

export function getGroupsMiddleware(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.json({ username: null, groups: [] });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.json({ username: null, groups: [] });
    }

    req.username = decoded.username;
    next();
  });
}

export function commonMiddleware(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: "Пользователь не аутентифицирован" });
  }

  jwt.verify(token, JWT_SECRET, (err) => {
    if (err) {
      return res.status(401).json({ error: "Недействительный токен" });
    }

    next();
  });
}

export function getWordsMiddleware(req, res, next) {
  const token = req.headers.authorization;

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (decoded?.username) req.username = decoded.username;

    next();
  });
}
