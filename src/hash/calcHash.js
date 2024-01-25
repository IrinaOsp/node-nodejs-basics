import path from "path";
import fs from "fs/promises";
import crypto from "crypto";

const __dirname = path.resolve("src/hash");
const pathToFile = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
  const data = await fs.readFile(pathToFile, "utf-8");
  const hash = crypto.createHash("sha256").update(data).digest("hex");
  console.log(hash);
};

await calculateHash();
