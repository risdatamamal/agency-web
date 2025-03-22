import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import firestoreInitialization from "../../firebase/firestore.init";

const db = firestoreInitialization();

const useMenus = () => {
  const [menus, setMenus] = useState([]);
  // const [sub_menus, setSubMenus] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "menus"));

        if (querySnapshot.empty) {
          console.log("No data found in Firestore.");
        }

        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setMenus(data);
        // const extractedSubMenus = data.flatMap((menu) => menu.sub_menus || []);
        // setSubMenus(extractedSubMenus);
      } catch (error) {
        console.error("Error fetching Firestore data:", error);
      }
    };
    fetchData();
  }, []);
  
  return menus;
  // return { menus, sub_menus };
};

export default useMenus;
