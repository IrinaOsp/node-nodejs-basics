import fs from "fs/promises";
import path from "path";

const __dirname = path.resolve("src/fs");
const pathToFile = path.join(__dirname, "files", "fileToRemove.txt");

const remove = async () => {
  try {
    await fs.unlink(pathToFile);
  } catch {
    throw new Error("FS operation failed");
  }
};

await remove();
