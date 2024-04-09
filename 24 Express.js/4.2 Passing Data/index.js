import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const titleText = "Enter your name below 👇";
  res.render("index.ejs", { message: titleText });
});

app.post("/submit", (req, res) => {
  const numLetters =
    req.body["fName"].replace(/\s/g, "").length +
    req.body["lName"].replace(/\s/g, "").length;
  const titleText = "Your name has " + numLetters + " letters.";
  res.render("index.ejs", { message: titleText });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
