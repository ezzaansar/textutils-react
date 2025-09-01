
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import { useState } from "react";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };

  const goggleMode = () => {
    if (mode === "light") {
      setMode("pink");
      document.body.style.backgroundColor = "#533B4D";
      showAlert("Pink mode has been enabled", "success");
      document.title = "Textutilis-PinkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Textutilis-LightMode";
    }
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Textutilis-DarkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Textutilis-LightMode";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
          goggleMode={goggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
             exact path="/"
              element={
                <Textform
                  heading="Enter the text to analyze"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
            <Route exact path="/about" element={<About  mode={mode}/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
