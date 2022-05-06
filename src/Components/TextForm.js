import React, { useState } from "react";

export default function TextForm(props) {
  // hook creation
  const [text, setText] = useState("");

  // logics
  const handleUpClick = () => {
    console.log("Upppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };

  // method 1
  // const copyText = () => {
  //   console.log("Copy was clicked");
  //   let copyText = text;
  //   navigator.clipboard.writeText(copyText.toString());
  //   alert("Copied");
  // };

  // method 2
  const copyText = () => {
    console.log("Copy was clicked");
    let copyText = document.getElementById("myBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  };
  const handleExtraSpaces = () => {
    console.log("Remove Extra spaces was clicked");
    let newText = text.split(/[ ] +/);
    setText(newText.join(" "));
  };

  const clearText = () => {
    console.log("Reset was clicked");
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("Text was updated.");
    // takes input as sets it to text
    setText(event.target.value);
  };
  // return statement
  return (
    <div>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert To LowerCase
        </button>
        <button className="btn btn-success mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-secondary mx-2" onClick={copyText}>
          Copy to clipboard
        </button>
        <button className="btn btn-danger mx-2" onClick={clearText}>
          Reset
        </button>
      </div>
      <div className="container my-3">
        <h3>Text Summary</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{text.split(" ").length * 0.08} min read</p>
        {/* <h2>Preview</h2>
        <p>{text}</p> */}
      </div>
    </div>
  );
}
