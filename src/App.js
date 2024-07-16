import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"
import { Home } from "./Pages/Home";
import { NotFound } from "./Pages/NotFound";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
