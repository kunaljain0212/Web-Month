const fs = require("fs");

// console.log(fs);
const data = fs.readFileSync("./input.txt", { encoding: "utf8" });

console.log(data);
