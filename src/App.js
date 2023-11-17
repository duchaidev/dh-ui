import React from "react";
import "../src/styles/global.css";
import "tailwindcss/tailwind.css";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import CreateTypeComponent from "./pages/CreateTypeComponent";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route
        path="/create-type"
        element={<CreateTypeComponent></CreateTypeComponent>}
      ></Route>
      {/* <HomePage></HomePage> */}
    </Routes>
  );
};

export default App;
