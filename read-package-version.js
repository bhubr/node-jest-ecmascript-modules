import fs from "fs";

function readPackageVersion() {
  const pkgJson = fs.readFileSync("package.json", "utf-8");
  const versionLine = pkgJson.split("\n").find((l) => l.includes('"version"'));
  const versionRe = /[^\d]+(\d+\.\d+.\d+).*/;
  const matches = versionLine.match(versionRe);
  return matches[1];
}

export default readPackageVersion;
