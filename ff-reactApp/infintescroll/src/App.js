import { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import FormState from "./context/FormState";
import Layout from "./components/condition/Layout";

function App() {
  return (
    <FormState>
      <Router>
        <Routes>
          <Route exact path="/" element={<Layout />} />
        </Routes>
      </Router>
    </FormState>
  );
}

export default App;
