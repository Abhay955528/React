/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alerts";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Dark Mood Enable
  const [alert, setAlert] = useState(null); // Alert

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "light";
      showAlert("Light mode has been Enabled", "success");
    }
  };

  return (
    <>
      {/* <Router> */}
      <NavBar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        {/* <Routes>
            <Route path="/about" element={<About />}></Route> */}
        {/* <Route
              path="/home"
              element={<TextForm heading="Enter the text to analiye" />}
            ></Route>
          </Routes> */}

        <TextForm heading="Enter the text to analiye" />
        {/* <About /> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
