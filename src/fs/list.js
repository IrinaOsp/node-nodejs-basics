import fs from "fs/promises";
import path from "path";

const __dirname = path.resolve("src/fs");
const pathToFolder = path.join(__dirname, "files");

const list = async () => {
  try {
    const files = await fs.readdir(pathToFolder);
    console.log(files);
  } catch {
    throw new Error("FS operation failed");
  }
};

await list();
