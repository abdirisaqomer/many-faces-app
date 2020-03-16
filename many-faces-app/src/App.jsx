import React from "react";
import "./App.module.scss";
import Face from "./components/Face/Face";
// import Eyes from "./components/Eyes/Eyes";
import Image from "../src/assets/Shea.png";

const App = () => {
  return (
    <>
      <Face image={Image} alt="shea face" />
    </>
  );
};

export default App;
