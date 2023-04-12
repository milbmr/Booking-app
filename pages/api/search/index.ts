import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "lib/database";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const client = await clientPromise;
  const db = client.db();

  try {
    const cities = await db.collection("cities").find({}).toArray();
    res.status(200).json(cities);
  } catch (err) {
    res.status(501).json(err);
  }
};
