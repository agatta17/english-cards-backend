import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const uri = process.env.MONGODB_URI;
export const client = new MongoClient(uri);
export const database = client.db("english_words");
