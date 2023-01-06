import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./login/Login";
import Axxios from "./freeapi/Api";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="api" element={<Axxios />} />
      </Routes>
    </div>
  );
}
