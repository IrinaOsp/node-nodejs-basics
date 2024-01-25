import path from "path";
import { createWriteStream } from "fs";

const __dirname = path.resolve("src/streams");
const pathToFile = path.join(__dirname, "files", "fileToWrite.txt");

const write = async () => {
  const writeStream = createWriteStream(pathToFile);
  process.stdin.pipe(writeStream);
};

await write();
