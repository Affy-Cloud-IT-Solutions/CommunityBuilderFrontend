import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"
import { Home } from "./Pages/Home";
import { NotFound } from "./Pages/NotFound";
import Admin from "./Pages/admin/Admin";
import Login from "./Pages/admin/Login";



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
