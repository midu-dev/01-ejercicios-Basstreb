const fs = require("node:fs/promises");
const path = require("node:path");

// Ejercicio 2
async function writeFile(filePath, data, callback) {
  const dir = path.dirname(filePath);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(filePath, data).then(() => callback(null)).catch((err) => callback(err));
}

// Ejercicio 3
async function readFileAndCount(word, callback) {
}

module.exports = {
  writeFile,
  readFileAndCount,
};
