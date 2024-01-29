import { Transform } from "stream";

class TransformStream extends Transform {
  constructor(options) {
    super(options);
  }
  _transform(chunk, _, callback) {
    const transformedText = chunk.toString().split("").reverse().join("");
    this.push(transformedText);
    callback();
  }
}

const transformStream = new TransformStream();

const transform = async () => {
  process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();
