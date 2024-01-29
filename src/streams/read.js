import path from "path";
import { createReadStream } from "fs";

const __dirname = path.resolve("src/streams");
const pathToFile = path.join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  const readStream = createReadStream(pathToFile, "utf-8");
  readStream.pipe(process.stdout);
};

await read();
