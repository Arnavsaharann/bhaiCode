import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Home() {
  const [sheets, setSheets] = useState([]);

  useEffect(() => {
    const fetchSheets = async () => {
      try {
        const sheetsCollection = collection(db, "sheets");
        const snapshot = await getDocs(sheetsCollection);
        const sheetsData = snapshot.docs.map((doc) => ({
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
      <h1>LeetCode Sheets</h1>
      <ul>
        {sheets.map((sheet) => (
          <li key={sheet.id}>
            <Link to={`/sheet/${sheet.id}`}>{sheet.sheetName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
