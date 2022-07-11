import type { NextApiRequest, NextApiResponse } from "next";

import { add } from "../../../../util/arithmetic";

type Data = { sum: number } | { message: string };

/**
 * Route that returns the sum of two numbers
 */
export default function handler(req: NextApiRequest, res: NextApiResponse<Data>): void {
  const a = parseInt(String(req.query.a));
  const b = parseInt(String(req.query.b));

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ message: "Bad request" });
  }

  res.status(200).json({ sum: add(a, b) });
}
