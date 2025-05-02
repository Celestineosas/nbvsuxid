import { Routes, Route, useLocation } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";

const MainLayout = () => {
    const location = useLocation();
  return (
    <div>
        {/* Show fixed navbar on other pages or when scrolling */}
        {location.pathname !== '/' && <Navbar/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        {/* Not Fount page */}
        <Route path="*" element={<Error />} />
      </Routes>
  
    </div>
  )
}

export default MainLayout
