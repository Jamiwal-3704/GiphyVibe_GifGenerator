const axios = require("axios");

module.exports = async (req, res) => {
  try {
    const tag = req.query.tag || "";
    const GIPHY_KEY =
      process.env.GIPHY_API_KEY || process.env.REACT_APP_GIPHY_API_KEY;
    if (!GIPHY_KEY)
      return res.status(500).json({ error: "GIPHY API key not configured" });
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${GIPHY_KEY}&tag=${encodeURIComponent(tag)}`;
    const r = await axios.get(url);
    res.status(200).json(r.data);
  } catch (err) {
    console.error("vercel api error", err?.message || err);
    res.status(500).json({ error: "Failed to fetch gif" });
  }
};
