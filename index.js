const express = require("express");

const app = express();
const port = 3000;

const moveController = require("./moveController");

app.use(express.json());
app.use("/api", moveController);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => console.log(`listening on port ${port}!`));

process.on("unhandledRejection", (err, promise) => {
  console.log(`Алдаа гарлаа: ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});
