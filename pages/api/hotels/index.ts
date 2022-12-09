import { NextApiRequest, NextApiResponse } from "next";
import sjcl from "sjcl";

function handler(req: NextApiRequest, res: NextApiResponse) {
  const apiKey = process.env.API_KEY!;
  const apiSecret = process.env.API_SECRET!;
  const apiUrlHotels = process.env.API_URL_HOTELS!;


  const sec = Math.round(Date.now() / 1000) + "";
  const myString = apiKey + apiSecret + sec;
  const bitArr = sjcl.hash.sha256.hash(myString);
  const hash = sjcl.codec.hex.fromBits(bitArr);

  fetch(apiUrlHotels, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Api-key": apiKey,
      "X-Signature": hash,
    },
  }).then(res => res.json()).then(data => res.json(data)).catch(err => console.log(err))
}

export default handler;
