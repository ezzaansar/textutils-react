import React from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

let myStyle = {};

if (props.mode === 'dark') {
  myStyle = {
    color: 'white',
    backgroundColor: '#042748'
  };
} else if (props.mode === 'pink') {
  myStyle = {
    color: 'white',
    backgroundColor: '#533B4D'
  };
} else {
  myStyle = {
    color: '#042748',
    backgroundColor: 'white'
  };
}

  return (
    <div className="container my-2" style={myStyle} >
      <h2 className="my-3">About Us</h2>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              Text Transformation Tools
            </button>
          </h2>

          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body">
              Easily convert your text into various formats — uppercase,
              lowercase, title case, or even remove extra spaces. Perfect for
              quick editing and formatting needs.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Real-Time Text Analysis
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body">
              Get instant insights such as word count, character count, reading
              time, and sentence statistics while typing or pasting your
              content.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Smart Copy and Export
            </button>
          </h2>
          <div
            id="collapseThree"

            
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body">
              Copy your refined text with a single click or export it for use in
              documents, emails, or coding projects effortlessly
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
