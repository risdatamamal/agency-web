import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import firestoreInitialization from "../firebase/firestore.init";

const db = firestoreInitialization();

const useSocialLinks = () => {
  const [socialLinks, setSocialLinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "socials"));

        if (querySnapshot.empty) {
          console.log("No data found in Firestore.");
        }

        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setSocialLinks(data);
      } catch (error) {
        console.error("Error fetching Firestore data:", error);
      }
    };

    fetchData();
  }, []);

  return socialLinks;
};

export default useSocialLinks;
