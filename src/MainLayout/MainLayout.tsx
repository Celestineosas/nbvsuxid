import { Routes, Route, useLocation } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import About from "../pages/About/About";
import Brand from "../pages/Brand/Brand";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import { AnimatePresence } from "framer-motion";
import Collection from "../pages/Collections/Collection";

const MainLayout = () => {
  const location = useLocation();
  return (
    <div>
      {/* Show fixed navbar on other pages or when scrolling */}
      {location.pathname !== '/' && <Navbar />}
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="brands" element={<Brand />} />
          <Route path="collections" element={<Collection />} />
          {/* Not Fount page */}
          <Route path="*" element={<Error />} />
        </Routes>

      </AnimatePresence>

    </div>
  )
}

export default MainLayout
