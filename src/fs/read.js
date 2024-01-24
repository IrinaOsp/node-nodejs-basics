import fs from "fs/promises";
import path from "path";

const __dirname = path.resolve("src/fs");
const pathToFile = path.join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  try {
    const data = await fs.readFile(pathToFile, "utf-8");
    console.log(data);
  } catch {
    throw new Error("FS operation failed");
  }
};

await read();
