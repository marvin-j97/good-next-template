// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

/**
 * Hello world route handler
 */
export default function handler(_: NextApiRequest, res: NextApiResponse<string>): void {
  res.status(200).send("Hello world!");
}
