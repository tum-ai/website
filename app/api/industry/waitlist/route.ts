import { kv } from "@vercel/kv";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const email = req.body.data.email;

  await kv.sadd("ip6_waitlist", email);

  return res.status(200).json(email);
}
