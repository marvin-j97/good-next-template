import { describe, it } from "vitest";
import { expect } from "chai";

import { mul } from "../util/arithmetic";

describe("multiply", () => {
  it("should equal 6", () => {
    expect(mul(3, 2)).equals(6);
  });
});
