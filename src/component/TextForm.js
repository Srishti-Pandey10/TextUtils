import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case!", "success");
  };
  const handleLowClick = () => {
    console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case!", "success");
  };
  const handleClearClick = () => {
    console.log("Clear was clicked");
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };
  const handleSpaceClick = () => {
    console.log("Space was clicked");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space Handled!", "success");
  };
  const handleCopyClick = () => {
    console.log("Copy was clicked");
    console.log(text);
    var t = document.getElementById("myBox");
    console.log(t);
    t.select();
    navigator.clipboard.writeText(t.value);
    props.showAlert("Text Copied!", "success");
  };
  function camelCase(str) {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, "");
  }
  const handleCamelClick = () => {
    console.log("Camel was clicked");
    var t = text;
    t = camelCase(t);
    setText(t);
  };
  const handleOnChange = (event) => {
    console.log("Onchange");
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div className="container my-3">
        <div
          className="container"
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <h1>{props.heading} </h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              style={{
                backgroundColor: props.mode === "dark" ? "#0d6f82" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
              id="myBox"
              rows="10"
            ></textarea>
          </div>
          <button className="btn btn-primary" onClick={handleUpClick}>
            Convert to UpperCase
          </button>
          <button className="btn btn-primary mx-3" onClick={handleLowClick}>
            Convert to LowerCase
          </button>
          <button className="btn btn-primary mx-3" onClick={handleClearClick}>
            Clear Text
          </button>
          <button className="btn btn-primary mx-3" onClick={handleCopyClick}>
            Copy Text
          </button>
          <button className="btn btn-primary mx-3" onClick={handleSpaceClick}>
            Remove Extra Space
          </button>
          <button className="btn btn-primary mx-3" onClick={handleCamelClick}>
            Convert to Camelcase{" "}
          </button>
        </div>
        <div
          className="container my-3"
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <h2>Your text summary</h2>
          <p>
            {" "}
            {text.split(" ").length} words and {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").length} minutes read</p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
