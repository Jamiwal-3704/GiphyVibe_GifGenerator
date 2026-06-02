import axios from "axios";
import { useEffect, useState } from "react";

function useGif(tag) {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchData(tag) {
    setLoading(true);
    try {
      // Try proxy first (keeps API key secret). If proxy not available, fallback to client-side GIPHY.
      const endpoint = `/api/gifs/random${tag ? `?tag=${encodeURIComponent(tag)}` : ""}`;
      try {
        const { data } = await axios.get(endpoint, { timeout: 3000 });
        const imagesrc = data.data.images.downsized_large.url;
        setGif(imagesrc);
        return;
      } catch (proxyErr) {
        console.warn(
          "Proxy unavailable, falling back to direct GIPHY call",
          proxyErr?.message || proxyErr,
        );
      }

      // Fallback: call GIPHY directly (requires REACT_APP_GIPHY_API_KEY set in root .env)
      const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
      if (!API_KEY) throw new Error("No GIPHY API key configured for fallback");
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}${tag ? `&tag=${encodeURIComponent(tag)}` : ""}`;
      const { data } = await axios.get(url);
      const imagesrc = data.data.images.downsized_large.url;
      setGif(imagesrc);
    } catch (err) {
      console.error("fetch gif error", err);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData("car");
  }, []);
  return { gif, loading, fetchData };
}

export default useGif;
