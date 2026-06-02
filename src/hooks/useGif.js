import axios from "axios";
import { useEffect, useState } from "react";

function useGif(tag) {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchData(tag) {
    setLoading(true);
    try {
      const endpoint = `/api/gifs/random${tag ? `?tag=${encodeURIComponent(tag)}` : ""}`;
      const { data } = await axios.get(endpoint);
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
