import { MongoClient } from "mongodb";

const mongodb_url = process.env.MONGODB_URI!;
const url = process.env.MONGO!;

let client;
let clientPromise: Promise<MongoClient>;

client = new MongoClient(mongodb_url);
clientPromise = client.connect();

export default clientPromise;
