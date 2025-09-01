import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    console.log("UpperCase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };
  const handleOnChange = (event) => {
    console.log("on Change");
    setText(event.target.value);
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };
  const handleLowClick = () => {
    console.log("LowerCase was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  }; // setText('Enter text here3');
  const handleCounter = () => {
    let newText = text.split(".").length;
    setText(newText.toString());
    props.showAlert("Sentence Counted", "success");
  };
  const handleCopy = () => {
    console.log("i am copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard!", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Spaces Removed", "success");
  };
  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div>
        <div
          className="container mb-3"
          style={{
            color:
              props.mode === "dark"
                ? "white"
                : "#042743" && props.mode === "pink"
                ? "white"
                : "#042743",
          }}
        >
          <h1>{props.heading}</h1>
          {/* <label htmlFor="myBox" className="form-label">Example textarea</label> */}
          <textarea
         
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor:
                props.mode === "dark"
                  ? "#13466e"
                  : props.mode === "pink"
                  ? "#FAE3C6"
                  : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
          <button
          disabled ={text.length===0}
            className="btn btn-primary my-3 mx-1"
            onClick={handleUpClick}
            style={{
              backgroundColor:
                props.mode === "pink" ? "rgb(245, 100, 169)" : "#0d6efd",
              border: props.mode === "pink" ? "2px solid pink" : "#0d6efd",
              color: props.mode === "pink" ? "#533B4D" : "white",
            }}
          >
            Convert to UpperCase
          </button>
          <button
          disabled ={text.length===0}
            className="btn btn-primary my-3 mx-1"
            onClick={handleLowClick}
            style={{
              backgroundColor:
                props.mode === "pink" ? "rgb(245, 100, 169)" : "#0d6efd",
              border: props.mode === "pink" ? "2px solid pink" : "#0d6efd",
              color: props.mode === "pink" ? "#533B4D" : "white",
            }}
          >
            Convert to LowerCase
          </button>
          <button
          disabled ={text.length===0}
            className="btn btn-primary my-3 mx-1"
            onClick={handleClearClick}
            style={{
              backgroundColor:
                props.mode === "pink" ? "rgb(245, 100, 169)" : "#0d6efd",
              border: props.mode === "pink" ? "2px solid pink" : "#0d6efd",
              color: props.mode === "pink" ? "#533B4D" : "white",
            }}
          >
            Clear
          </button>
          <button
          disabled ={text.length===0}
            className="btn btn-primary my-3 mx-1"
            onClick={handleCounter}
            style={{
              backgroundColor:
                props.mode === "pink" ? "rgb(245, 100, 169)" : "#0d6efd",
              border: props.mode === "pink" ? "2px solid pink" : "#0d6efd",
              color: props.mode === "pink" ? "#533B4D" : "white",
            }}
          >
            Count Sentences
          </button>
          <button
          disabled ={text.length===0}
            className="btn btn-primary my-3 mx-1"
            onClick={handleCopy}
            style={{
              backgroundColor:
                props.mode === "pink" ? "rgb(245, 100, 169)" : "#0d6efd",
              border: props.mode === "pink" ? "2px solid pink" : "#0d6efd",
              color: props.mode === "pink" ? "#533B4D" : "white",
            }}
          >
            Copy Text
          </button>
          <button
          disabled ={text.length===0}
            className="btn btn-primary my-3 mx-1"
            onClick={handleExtraSpaces}
            style={{
              backgroundColor:
                props.mode === "pink" ? "rgb(245, 100, 169)" : "#0d6efd",
              border: props.mode === "pink" ? "2px solid pink" : "#0d6efd",
              color: props.mode === "pink" ? "#533B4D" : "white",
            }}
          >
            Remove Extra Spaces
          </button>
          <div className="container my-3">
            <h2>Your Text Summary</h2>

            <p>
              {text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length}{" "}
              and {text.length} characters
            </p>
            <p>
              {0.008 *
                text.split(" ").filter((element) => {
                  return element.length !== 0;
                }).length}{" "}
              Minutes Read
            </p>

            <h3>Preview</h3>
            <p>
              {text && text.length > 0
                ? text
                : "Enter something in your text to preview here"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
