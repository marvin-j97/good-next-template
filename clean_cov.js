const { normalize } = require("path");
const data = require("./.nyc_output/coverage_unit.json");

const newData = {};

for (path in data) {
  const chunk = data[path];
  newData[normalize(path)] = {
    ...chunk,
    path: normalize(chunk.path),
  };
}

console.log(JSON.stringify(newData, null, 2));
