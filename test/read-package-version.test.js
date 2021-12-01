import readPackageVersion from "../read-package-version";

describe("test readPackageVersion", () => {
  it("returns version line", () => {
    expect(readPackageVersion()).toEqual("1.0.0");
  });
});
