import { useEffect, useState } from "react";
import api from '../api/axios'

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await api.get(url, options);
      setData(res.data);
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to fetch data"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error, refetch: fetchData };
};

export default useFetch;
