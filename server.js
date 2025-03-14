import http from "http";
const PORT = process.env.PORT;

const server = http.createServer((request, response) => {
  try {
    if (request.method === "GET") {
      if (request.url === "/") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end("<h1>Homepage</h1>");
      } else if (request.url === "/about") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end("<h1>About</h1>");
      } else {
        response.writeHead(404, { "Content-Type": "text/html" });
        response.end("<h1>404 Page not found</h1>");
      }
    } else {
      throw new Error("Method not allowed");
    }
  } catch (error) {
    response.writeHead(500, { "Content-Type": "text/html" });
    response.end("<h1>Server Error</h1>");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
