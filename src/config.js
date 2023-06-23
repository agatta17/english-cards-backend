import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
export const openai = new OpenAIApi(configuration);

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
export const database = client.db("english_words");
