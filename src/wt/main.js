import path from "path";
import { Worker, isMainThread } from "worker_threads";
import os from "os";

const __dirname = path.resolve("src/wt");
const pathToWorker = path.join(__dirname, "worker.js");
const StartingNumber = 10;

const createWorker = (num) => {
  return new Promise((resolve, _) => {
    const worker = new Worker(pathToWorker, { workerData: num });
    worker.on("message", (result) =>
      resolve({ status: "resolved", data: result })
    );
    worker.on("error", () => resolve({ status: "error", data: null }));
  });
};

const performCalculations = async () => {
  if (isMainThread) {
    const coresNumber = os.cpus().length;
    const results = [];

    for (let i = 0; i < coresNumber; i++) {
      const result = await createWorker(StartingNumber + i);
      results.push(result);
    }
    console.log(results);
  }
};

await performCalculations();
