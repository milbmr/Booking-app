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

/*const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  fetch("https://aif2.hotelbeds.com/aif2-pub-ws/files/full", {
    headers: {
      "Api-Key": "fca8500707e655e2b0e6e84b73bda54c",
    },
  })
    .then((res) => res.blob())
    .then((blob) => {
      var url = window.URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = "filename.xlsx";
      document.body.appendChild(a);
      a.click();
      a.remove();
    })
    .catch((err) => res.json(err));

   const request = await fetch(
    "https://test.api.amadeus.com/v1/security/oauth2/token",
    {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: "C6u9Qy5DWgx4VjfyjeZmHSRso6TvqBAy",
        client_secret: "Rq1GmYwST0XReppo",
      }),
    }
  );
  const response = await request.json();
  const data = await response;
  const { access_token } = data;

  fetch("https://test.api.amadeus.com/v1//reference-data/locations/hotels/by-city?cityCode=PAR", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
    .then((response) => response.json())
    .then((data) => res.json(data));
};*/
