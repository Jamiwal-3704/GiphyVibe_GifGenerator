require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const GIPHY_KEY = process.env.GIPHY_API_KEY;

app.get("/api/health", (req, res) => res.json({ status: "ok" }));

app.get("/api/gifs/random", async (req, res) => {
  try {
    const tag = req.query.tag || "";
    if (!GIPHY_KEY)
      return res.status(500).json({ error: "GIPHY API key not configured" });
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${GIPHY_KEY}&tag=${encodeURIComponent(tag)}`;
    const r = await axios.get(url);
    res.json(r.data);
  } catch (err) {
    console.error("proxy error", err?.message || err);
    res.status(500).json({ error: "Failed to fetch gif" });
  }
});

app.listen(PORT, () => console.log(`Proxy server listening on ${PORT}`));
