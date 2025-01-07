import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Sheets() {
  const [sheets, setSheets] = useState([]);

  useEffect(() => {
    const fetchSheets = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "sheets"));
        const sheetsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSheets(sheetsData);
      } catch (error) {
        console.error("Error fetching sheets:", error);
      }
    };

    fetchSheets();
  }, []);

  return (
    <div>
      <h1>DSA Sheets</h1>
      <ul>
        {sheets.map((sheet) => (
          <li key={sheet.id}>
            <h2>{sheet.sheetName}</h2>
            <ul>
              {sheet.problems.map((problem, index) => (
                <li key={index}>{problem}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sheets;
