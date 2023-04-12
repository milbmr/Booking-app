import clientPromise from "lib/database";

export const getHotels = async (batch: number) => {
  const client = await clientPromise;
  const db = client.db();

  const result = await db
    ?.collection("hotels")
    .find({})
    .limit(batch * 20)
    .toArray();

  if (!result) throw new Error("couldn't hotels");

  return result;
};
