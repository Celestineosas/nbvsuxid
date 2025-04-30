import Button from "../../utilies/Button";
import FixedNavbar from "../Navbar/FixedNavbar";
import { Link, useLocation } from "react-router";
import { motion } from "framer-motion";



const Hero = () => {
    const location = useLocation();
    return (
      <section className="hero-section flex w-full max-container lg:min-h-[600px] min-h-[800px] max-sm:min-h-[700px] mt-0 flex-col sm:gap-12 gap-15"
      >
         {/* Nav section here */}
            {/* Show Navbar inside Hero only on the home page */}
            {location.pathname === '/' && <FixedNavbar />} 
        {/* Hero content goes here */}
        <div className="flex sm:justify-center justify-end sm:px-16 px-8 sm:pt-16 sm:pb-10  pt-10 pb-0 items-center w-full flex-col sm:gap-32 gap-38">
            <motion.h1
             className="text-anon-dark text-center font-melodrama uppercase lg:text-[14vh] sm:text-[11vh] text-[7.7vh] sm:leading-28 leading-18" 
             initial={{ opacity : 0}}
             animate={{ opacity : 1 }}
             transition={{ duration: 1.5 , delay: 1.5, ease : "easeInOut" }}
             >Style <br/>furniture</motion.h1>
            <Link className="max-sm:mt-14" to='/shop'><Button label="SHOP NOW"/></Link>
        </div>
      </section>
    );
  };
  
  export default Hero;
  