import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Developer } from "./Pages/Developer";
import { Education } from "./Pages/Education";
import {Tech} from "./Pages/Tech"
import {Product} from "./Pages/Product"
import { AllCommunity } from "./Pages/AllCommunity";
import { CommunityById } from "./Pages/CommunityById";
import { TalkDash } from "./Pages/TalkDash";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Login } from "./Pages/Login";


function App() {

  // useEffect(() => {
  //   localStorage.setItem("cfs_token", `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk4OTU2ODI3Mzc4NzMzOGZiNzgzZTMiLCJmaXJzdE5hbWUiOiJBbWJyZWVuIiwibGFzdE5hbWUiOiJTeWVkIiwiZW1haWwiOiJhbWJyZWVuMkBnbWFpbC5jb20iLCJnZW5kZXIiOiJGZW1hbGUiLCJjaXR5IjoiQmhvcGFsIiwic3RhdGUiOiJNYWRoeWEgUHJhZGVzaCIsIm9jY3VwYXRpb24iOiJTb2Z0d2FyZSBEZXZlbG9wZXIiLCJzdGF0dXMiOnRydWUsImNyZWF0ZWRBdCI6IjIwMjQtMDctMThUMDQ6MDk6MTIuMDY4WiIsInVwZGF0ZWRBdCI6IjIwMjQtMDctMThUMDQ6MDk6MTIuMDc3WiIsIl9fdiI6MCwicHJvZmlsZVBpY3R1cmUiOiJodHRwOi8vbG9jYWxob3N0Ojg3MTUvcHVibGljL2RhdGEvcHJvZmlsZS82Njk4OTU2ODI3Mzc4NzMzOGZiNzgzZTMvMjAyNDA3MThUMDQwOTEyMDcxWjI0MzA5NS5qcGciLCJpYXQiOjE3MjE0OTQ1MDIsImV4cCI6MTcyMTU4MDkwMn0.nWHg8k1JYZoskovolX1PED5MLKV7n0nLuoCFr2F3Iyg`)
  // }, [])

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
           <Route path="/product" element={<Product/>}/>
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
