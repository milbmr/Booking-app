import { NextApiRequest, NextApiResponse } from "next";
import { apiHandler } from "lib/server/nc";
import { validateHotelQuery } from "lib/server/validation";
import { getHotels } from "lib/server/hotel";

const handler = apiHandler();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const { batch } = validateHotelQuery(req.query);
  const queryNum = +batch;
  const hotels = await getHotels(queryNum);

  res.status(200).json(hotels);
});

export default handler;
