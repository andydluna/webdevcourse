import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const URL = "https://api.openuv.io/api/v1/uv?";
// lat=:lat&lng=:lng&alt=:alt&dt=:dt
const API_KEY = "openuv-1d8l08rluvuilxj-io";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", async (req, res) => {
  try {
    const lat = req.body.latitude;
    const lon = req.body.longitude;

    const response = await axios.get(`${URL}lat=${lat}&lng=${lon}`, {
      headers: {
        "x-access-token": API_KEY,
      },
    });
    const result = response.data;

    res.render("index.ejs", { uv: result.result.uv });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
