import path from "path";
import { createGzip } from "zlib";
import fs from "fs";

const __dirname = path.resolve("src/zip");
const pathToFile = path.join(__dirname, "files", "fileToCompress.txt");
const pathToZip = path.join(__dirname, "files", "archive.gz");

const compress = async () => {
  const gzip = createGzip();
  const readStream = fs.createReadStream(pathToFile);
  const writeStream = fs.createWriteStream(pathToZip);
  readStream.pipe(gzip).pipe(writeStream);
};

await compress();
