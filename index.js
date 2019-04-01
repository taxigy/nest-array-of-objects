const pack = require("./pack");

const read = stream =>
  new Promise((resolve, reject) => {
    let buffer = Buffer.alloc(0);

    stream.on("data", chunk => (buffer = Buffer.concat([buffer, chunk])));

    stream.on("end", () => resolve(buffer.toString("utf8")));
  });

const run = async () => {
  const input = await read(process.stdin);
  const json = JSON.parse(input);
  const output = pack(
    process.env.KEY_PROPERTY.split("."),
    process.env.VALUE_PROPERTY.split("."),
    json
  );

  process.stdout.write(JSON.stringify(output, null, 2));
};

run();
