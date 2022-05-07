import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [modes, setMode] = useState("light");
  const [textStyle, setTextStyle] = useState({
    color: "black"
  });
  const [text, setText] = useState("Dark Mode");

  // toogle method
  const toggleMode = () => {
    if (modes === "light") {
      setMode("dark");
      setText("Light Mode");
      setTextStyle({
        color: "white",
      });
      document.body.style.backgroundColor = "rgb(34, 48, 60)";
      document.body.style.color = "white";
      document.title = "TextUtils - Dark";
    } else {
      setMode("light");
      setText("Dark Mode");
      setTextStyle({
        color: "black",
      });
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.title = "TextUtils";
    }
  };

  return (
    <>
      <Router>
        {/* passing varaibles to components */}
        <Navbar
          title="TextUtils"
          text1="About"
          mode={modes}
          toggleMode={toggleMode}
          text={text}
          style={textStyle}
        />


        <Routes>
          {/* <div className="container my-3"> */}
          <Route exact path="/" element={<TextForm heading="Write below" />} />
          {/* </div> */}

          <Route exact path="/about" element={<About mode={modes}/>} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
