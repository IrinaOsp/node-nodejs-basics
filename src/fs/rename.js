import path from "path";
import fs from "fs/promises";

const __dirname = path.resolve("src/fs");
const pathToFile = path.join(__dirname, "files", "wrongFilename.txt");
const pathToProperFile = path.join(__dirname, "files", "properFilename.md");

const rename = async () => {
  try {
    await fs.rename(pathToFile, pathToProperFile);
  } catch {
    throw new Error("FS operation failed");
  }
};

await rename();
