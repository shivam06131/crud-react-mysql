import "./App.css";
import React, { useRef, useState, useEffect } from "react";
import axios from "axios";

function App() {
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const countryRef = useRef(null);
  const positionRef = useRef(null);
  const wageRef = useRef(null);

  useEffect(() => {
    const getData = async () => {
      const {data} = await axios.get("http://localhost:3005/getEmployees");
      console.log("data", data);
    };
    getData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3005/create", {
        name: nameRef.current.value,
        age: ageRef.current.value,
        country: countryRef.current.value,
        position: positionRef.current.value,
        wage: wageRef.current.value,
      })
      .then(() => console.log("sucess"));
  };

  return (
    <div className="App">
      <div className="innerDiv">
        <label>Name:</label>
        <input type="text" ref={nameRef} />
        <label>Age:</label>
        <input type="number" ref={ageRef} />
        <label>Country:</label>
        <input type="text" ref={countryRef} />
        <label>Position:</label>
        <input type="text" ref={positionRef} />
        <label>Wage:</label>
        <input type="number" ref={wageRef} />
        <button type="submit" onClick={handleSubmit}>
          Add Employee
        </button>
      </div>
    </div>
  );
}

export default App;
