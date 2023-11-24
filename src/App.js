import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./components/Dashboard"
import AdminDashboard from "./components/AdminDashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Login />} />
        <Route path="/tickets" element={<Dashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/contact" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
