import { getMessage } from "../src/hello";

describe("hello test", () => {
  it("returns message with a name", () => {
    expect(getMessage("Ryan")).toBe("Hello, Ryan!");
  });
});
