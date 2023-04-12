import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/database";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const db = client.db();

  try {
    const allFacilities = await db.collection("facilities").find({}).toArray();
    const facilityGroupe = await db
      .collection("facilitygroups")
      .find({})
      .toArray();
    const countriesCode = await db.collection("countries").find({}).toArray();

    const data = { facilityGroupe, allFacilities, countriesCode };

    const parsedData = JSON.parse(JSON.stringify(data));

    res.status(200).json(parsedData);
  } catch (err) {
    res.status(500).json(err);
  }
}
