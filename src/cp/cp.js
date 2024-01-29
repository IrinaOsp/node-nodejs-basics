import path from "path";
import { fork } from "child_process";

const __dirname = path.resolve("src/cp");
const pathToScript = path.join(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
  fork(pathToScript, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess([1, 2, "3", null, NaN]);
