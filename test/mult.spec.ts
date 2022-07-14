import { describe, it } from "vitest";
import { expect } from "chai";

import { mult } from "../util/arithmetic";

describe("multiply", () => {
  it("should equal 6", () => {
    expect(mult(3, 2)).equals(6);
  });
});
