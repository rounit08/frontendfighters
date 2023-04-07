import React, { useContext, useState } from "react";
import "./Form.css";
import { Link } from "react-router-dom";
import FormContext from "./FormContext";

function Form() {
  const form = useContext(FormContext);

  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="form">
        <form className="regform">
          <h3>Name: </h3>
          <input
            type="text"
            value={form.name}
            onChange={form.handleName}
            placeholder="Enter Name"
          />
          <h3>Age: </h3>
          <input
            type="text"
            value={form.age}
            onChange={form.handleAge}
            placeholder="Enter Age"
          />
          <h3>Roll Number: </h3>
          <input
            type="text"
            value={form.roll}
            onChange={form.handleRoll}
            placeholder="Enter Roll Number"
          />
          <h3>Branch: </h3>
          <input
            type="text"
            value={form.branch}
            onChange={form.handleBranch}
            placeholder="Enter Branch"
          />
        </form>
        <button className="submit" onClick={submitForm}>
          <Link to="/home">SUBMIT</Link>
        </button>
      </div>
    </>
  );
}

export default Form;
