import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello!</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Me!</h1><p>Phone number: +1 (585) 553-0957</p>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About Me!</h1><p>My name is Andy, nice to meet you.</p>");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});