import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Fleet from "./pages/Fleet";
import Captains from "./pages/Captains";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/ships" element={<Fleet />} />

      <Route path="/captains" element={<Captains />} />
    </Routes>
  );
}

export default App;