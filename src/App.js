import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Developer } from "./Pages/Developer";
import { Education } from "./Pages/Education";
import { Tech } from "./Pages/Tech"
import { AllCommunity } from "./Pages/AllCommunity";
import { CommunityById } from "./Pages/CommunityById";
import { TalkDash } from "./Pages/TalkDash";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Login } from "./Pages/Login";


function App() {

  return (
    <div>
      <Toaster position="top-right" />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />    
          <Route path="/about" element={<About/>}/>  
           <Route path="/contact" element={<Contact/>} />
           <Route path="/Developer_community" element={<Developer/>}/>
           <Route path="/education_finance" element={<Education/>}/>
           <Route path="/tech_startup" element={<Tech/>}/>

           <Route path="/all_community" element={<AllCommunity/>}/>
          <Route path="/community/:id" element={<CommunityById />} />
          <Route path="/:comm_id/Community_dash" element={<TalkDash />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
