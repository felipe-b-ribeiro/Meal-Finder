import axios from "axios";
import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!url) {
      setData([]);
      setLoading(false);
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await axios.get(url, { signal });
        setData(res.data);
      } catch (err) {
        if (!axios.isCancel(err)) {
          setError(err.message);
          setData([]);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return () => controller.abort();
  }, [url]);

  console.log(data)
  return [data?.meals || data, loading, error];
}
