import path from "path";
import fs from "fs/promises";

const __dirname = path.resolve("src/fs");
const pathToFilesFolder = path.join(__dirname, "files");
const pathToCopyFilesFolder = path.join(__dirname, "files_copy");

const copy = async () => {
  try {
    await fs.cp(pathToFilesFolder, pathToCopyFilesFolder, {
      errorOnExist: true,
      force: false,
      recursive: true,
    });
  } catch {
    throw new Error("FS operation failed");
  }
};

await copy();
