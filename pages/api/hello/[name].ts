import type { NextApiRequest, NextApiResponse } from "next";

type Data = { name: string };

/**
 * Returns route parameter (name)
 */
export default function handler(req: NextApiRequest, res: NextApiResponse<Data>): void {
  const name = String(req.query.name);
  if (name === "dsaaaaaaaaaaadsaadsadsads") {
    console.log("this will never be called, so bad code coverage");
  }
  res.status(200).json({ name });
}
