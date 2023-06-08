import { Route, Routes } from "react-router-dom";
import "../css/App.css"
import Navbar from "./Navbar"
import About from "../pages/About";
import Contactme from "../pages/Contactme";
import Mywork from "../pages/Mywork";
import Profile from "../pages/Profile";

function App() {
  return (
    <div className="container">
      <Navbar/>
      <div className="main">
      <Routes>
        <Route path="/" element={<Profile/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact_me" element={<Contactme/>}/>
        <Route path="/my_work" element={<Mywork/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
