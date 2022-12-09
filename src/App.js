import "./App.css";
import Home from "./components/Home";
import InputField from "./components/InputField";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/input" element={<InputField />} />
    </Routes>
  );
}

export default App;
