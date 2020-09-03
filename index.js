const server = require("./api/server.js");

const port = process.env.PORT || 5000;

server.get('/', (req, res) => {
  res.send('<h1>Welcome</h1>')
})

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
