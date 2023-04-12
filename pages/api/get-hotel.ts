import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/database";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const client = await clientPromise;
    const db = client.db();

  try {
    const data = await db.collection("hotels").find({}).toArray();

    res.status(200).json(data);
  } catch (err) {
    client.close()
    res.status(500).json({message: err});
  }
};
