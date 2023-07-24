const fs = require("node:fs/promises");
const path = require("node:path");

// Ejercicio 2
async function writeFile(filePath, data, callback) {
  const dir = path.dirname(filePath);
  await fs.mkdir(dir, { recursive: true });
  await fs
    .writeFile(filePath, data)
    .then(() => callback(null))
    .catch((err) => callback(err));
}

// Ejercicio 3
async function readFileAndCount(word, callback) {
  const folder = process.argv[2];
  let count = 0;

  if (!word) {
    return callback(new Error("No se ha especificado la palabra a buscar"));
  }

  if (!folder) {
    return callback(new Error("No se ha especificado el path del archivo"));
  }

  await fs
    .readFile(folder, "utf-8")
    .then((text) => {
      count = text.split(word).length - 1;
      callback(null, count);
    })
    .catch(() => {
      callback(null, count);
    });
}

module.exports = {
  writeFile,
  readFileAndCount,
};
