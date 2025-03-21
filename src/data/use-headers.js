import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import firestoreInitialization from "../firebase/firestore.init";

const db = firestoreInitialization();

const useHeaders = () => {
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "headers"));

        if (querySnapshot.empty) {
          console.log("No data found in Firestore.");
        }

        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setHeaders(data[0]);
      } catch (error) {
        console.error("Error fetching Firestore data:", error);
      }
    };

    fetchData();
  }, []);

  return headers;
};

export default useHeaders;
