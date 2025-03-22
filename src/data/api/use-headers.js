import { useState, useEffect } from "react";

const useHeaders = () => {
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/header/`);
        const json = await res.json();

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        
        setHeaders(json.data);
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };

    fetchData();
  }, []);

  return headers;
};

export default useHeaders;
