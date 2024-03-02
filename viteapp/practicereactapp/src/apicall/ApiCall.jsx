import React, { useEffect, useState } from "react";
import "./ApiCall.css";

const ApiCall = () => {
  // https://pokeapi.co/api/v2/pokemon

  const [nameList, setNameList] = useState([]);

  const fetchData = async () => {
    const apicall = await fetch("https://pokeapi.co/api/v2/pokemon");
    const response = await apicall.json();
    const results = response.results;
    // console.log(results);
    setNameList(results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSorting = () => {
    const sortedNames = [...nameList].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setNameList(sortedNames);
  };

  return (
    <div>
      <button style={{ cursor: "pointer" }} onClick={handleSorting}>
        Sort Names
      </button>
      {nameList &&
        nameList.map((name, index) => <li key={index}>{name.name}</li>)}
    </div>
  );
};

export default ApiCall;
