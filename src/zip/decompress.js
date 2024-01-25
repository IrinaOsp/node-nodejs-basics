import path from "path";
import fs from "fs";
import { createGunzip } from "zlib";

const __dirname = path.resolve("src/zip");
const pathToFile = path.join(__dirname, "files", "fileToCompress.txt");
const pathToZip = path.join(__dirname, "files", "archive.gz");

const decompress = async () => {
  const archive = fs.createReadStream(pathToZip);
  const gunzip = createGunzip();
  const file = fs.createWriteStream(pathToFile);
  archive.pipe(gunzip).pipe(file);
};

await decompress();
