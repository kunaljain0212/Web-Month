const express = require("express");
const path = require("path");
const { secondLogger, logger } = require("./middleware");

const app = express();

app.use(logger);
app.use(secondLogger);
app.use(express.static("public"));
// app.use('/static', express.static('public'))
// console.log(path.join(__dirname));
app.use("/static", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  console.log(req.url);
  res.send("Hellooooo from / route!!");
});

app.get("/login", (req, res) => {
  console.log(req.url);
  res.send("Hellooooo from /login route!!");
});

// app.get("/mail", (req, res) => {
//   console.log(req.url);
//   res.redirect("/");
// });

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
