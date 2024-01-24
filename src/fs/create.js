import fs from "fs/promises";
import path from "path";

const __dirname = path.resolve("src/fs");
const pathToFile = path.join(__dirname, "files", "fresh.txt");

const create = async () => {
  try {
    await fs.writeFile(
      pathToFile,
      "I am fresh and young",
      { flag: "wx" },
      (err) => {
        if (err) throw new Error("FS operation failed");
      }
    );
  } catch {
    throw new Error("FS operation failed");
  }
};

await create();
