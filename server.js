const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const FILES = {
  "/": ["public/index.html", "text/html; charset=utf-8"],
  "/index.html": ["public/index.html", "text/html; charset=utf-8"],
  "/style.css": ["public/style.css", "text/css; charset=utf-8"],
  "/README.md": ["README.md", "text/markdown; charset=utf-8"], // the JEP list
};

http
  .createServer((req, res) => {
    const entry = FILES[new URL(req.url, "http://localhost").pathname];
    if (!entry) {
      res.writeHead(404, { "Content-Type": "text/plain" }).end("Not found");
      return;
    }
    // Read on every request so edits to README.md show up without a restart.
    fs.readFile(path.join(__dirname, entry[0]), (err, data) => {
      if (err) return res.writeHead(500, { "Content-Type": "text/plain" }).end("Server error");
      res.writeHead(200, { "Content-Type": entry[1] }).end(data);
    });
  })
  .listen(PORT, () => console.log(`JEP of the day: http://localhost:${PORT}`));
