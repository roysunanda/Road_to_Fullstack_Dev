import net from "node:net";

const port = 3000;

const server = net.createServer((socket) => {
  console.log(`client connected!!`);
});

server.listen(port, () => {
  console.log(`\nserver is listening on port: ${port}`);
});
