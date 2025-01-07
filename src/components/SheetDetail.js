import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, doc } from "firebase/firestore";
import { db } from "../firebase";

function SheetDetail() {
  const { id: sheetId } = useParams();
  const [sheet, setSheet] = useState(null);
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    const fetchSheetData = async () => {
      try {
        const sheetDoc = doc(db, "sheets", sheetId);
        const problemsCollection = collection(sheetDoc, "problems");

        const problemsSnapshot = await getDocs(problemsCollection);
        const problemsData = problemsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const sheetSnapshot = await getDocs(collection(db, "sheets"));
        const sheetData = sheetSnapshot.docs
          .find((doc) => doc.id === sheetId)
          ?.data();

        setSheet(sheetData || {});
        setProblems(problemsData);
      } catch (error) {
        console.error("Error fetching sheet data:", error);
      }
    };

    fetchSheetData();
  }, [sheetId]);

  if (!sheet) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{sheet.sheetName}</h1>
      <ul>
        {problems.map((problem) => (
          <li key={problem.id}>
            <a href={problem.url} target="_blank" rel="noopener noreferrer">
              {problem.name}
            </a>
            <p>Difficulty: {problem.difficulty}</p>
            <p>Notes: {problem.notes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SheetDetail;
