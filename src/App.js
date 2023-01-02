import "./App.css";
import Home from "./components/Home";
import Attributes from "./components/Attributes";
import AddAttribute from "./components/Attributes/AddAttributes";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/attribute" element={<Attributes />} />
      <Route path="/addattribute" element={<AddAttribute />} />
    </Routes>
  );
}

export default App;
