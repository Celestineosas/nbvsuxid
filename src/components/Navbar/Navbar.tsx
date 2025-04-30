import { useState } from "react";
import { Link } from "react-router"
import { navLinks } from "../../constants"
import { Menu, X, Briefcase, Bookmark } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";




const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);

    const mobileVariants = {
        hidden: {
          opacity: 0,
          x: '-100vw',
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            delay: 0.1,
            type: 'spring',
            stiffness: 150,
            mass: 0.1,
            when: 'beforeChildren',
            staggerChildren: 0.3,
            delayChildren: 0.3,
          },
        },
        exit: {
          opacity: 0,
          x: '-100vw',
          transition: { duration: 0.3 },
        },
      };
    
      const childVariants = {
        hidden: {
          opacity: 0,
          x: -50,
        },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            type: 'spring',
            stiffness: 100,
          },
        },
      };
    

    return (
        <motion.header 
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 120, mass: 0.1 }}
        className="bg-anon-dark pb-5 sm:pt-0 pt-0 w-full">
            <motion.nav
             className="sm:px-20 px-8 flex justify-between py-6 items-center w-full">

                <ul className="lg:flex items-center gap-5 hidden">
                    {navLinks.map((item) => (
                        <div key={item.label} className="relative">
                            <Link to={`/${item.link}`} className="font-melodrama text-white font-extralight text-sm">
                                {item.label}
                            </Link>
                        </div>
                    ))}
                </ul>
                <Link to="/" onClick={closeMenu}>
                    <h1 className="text-4xl text-gray-100 font-melodrama font-bold lg:mr-20">Nbvsuxid</h1>
                </Link>

                {/* Mobile Section */}
                <button className="lg:hidden text-2xl text-gray-100" onClick={() => setMenuOpen(true)}>
                    <Menu />
                </button>

                 {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobileMenu"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileVariants}
              className="fixed top-0 left-0 h-full w-full bg-white shadow-md z-50"
            >
              <button
                className="absolute top-5 right-5 text-2xl text-anon-dark"
                onClick={closeMenu}
              >
                <X
                  size={70}
                  className="text-white bg-anon-dark p-6 rounded-full"
                />
              </button>

              <motion.ul
                variants={mobileVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-col items-start px-6 pt-20 mt-10 space-y-5"
              >
                {navLinks.map((item) => (
                  <motion.div
                    key={item.label}
                    className="relative w-full"
                    variants={childVariants}
                  >
                    <Link
                      to={`/${item.link}`}
                      className="block font-melodrama text-7xl text-anon-dark py-2"
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
                <div className="flex sm:gap-3">
                    <Bookmark className="text-3.5xl text-gray-100" />
                    <Link to="/cart" className="flex lg:justify-end justify-center ml-3 relative" onClick={closeMenu}>
                        <Briefcase className="text-3.5xl text-gray-100" />
                        <span className="text-[10px] p-[1px_5px] text-anon-dark bg-gray-100 rounded-full absolute -left-1">
                            2
                        </span>
                    </Link>
                </div>
            </motion.nav>
        </motion.header>
    );
};

export default Navbar;
