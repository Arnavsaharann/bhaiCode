import React from "react";

function Problems({ problems }) {
  return (
    <ul>
      {problems.map((problem, index) => (
        <li key={index}>{problem}</li>
      ))}
    </ul>
  );
}

export default Problems;
