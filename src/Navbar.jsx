// import "./App.css"
// import "./index.css"
// const Navbar =()=>{
//     return(
//         <>
//             <div className="flex flex-row items-center h-[17vh] justify-around mb-[1%] font-mono text-white">
//                 <div className="cursor-pointer">
//                     Ibrahim AbdulQuadri Abiodun
//                 </div>
//                 <div className="flex gap-3 text-2xl ">
//                     <span className="hover:underline hover:underline-offset-4 cursor-pointer">Skills</span>
//                     <span className="hover:underline hover:underline-offset-4 cursor-pointer">Projects</span>
//                     <span className="hover:underline hover:underline-offset-4 cursor-pointer">Contact</span>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Navbar

import { useState } from "react";
import "./App.css";
import "./index.css";
import { Link } from "react-router";
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className="flex flex-row items-center h-[17vh] justify-around px-6 mb-[1%] font-mono text-white">
                {/* Logo or Name */}
                <div className="cursor-pointer text-xl">
                    <Link to="/">Ibrahim AbdulQuadri Abiodun</Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-4 text-2xl">
                    <Link to="/skills">
                    <span className="hover:underline hover:underline-offset-4 cursor-pointer">
                        Skills
                    </span>
                    </Link>
                    <Link to="projects">
                    <span className="hover:underline hover:underline-offset-4 cursor-pointer">
                        Projects
                    </span>
                    </Link>
                    <Link to="contacts">
                    <span className="hover:underline hover:underline-offset-4 cursor-pointer">
                        Contact
                    </span>
                    </Link>
                </div>

                {/* Hamburger Menu for Small Screens */}
                <div
                    className="md:hidden cursor-pointer"
                    onClick={toggleMenu}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-8 h-8"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 5h18M3 12h18m-9 7h9"
                        />
                    </svg>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden flex flex-col font-mono items-center bg-black text-white gap-3 text-lg py-4">
                    <Link to="/skills">
                        <span
                        className="hover:underline hover:underline-offset-4 cursor-pointer"
                        onClick={() => setMenuOpen(false)}
                    >
                        Skills
                    </span>
                    </Link>
                    <Link to="/projects">
                        <span
                        className="hover:underline hover:underline-offset-4 cursor-pointer"
                        onClick={() => setMenuOpen(false)}
                    >
                        Projects
                    </span>
                    </Link>
                    <Link to="/contacts">
                        <span
                        className="hover:underline hover:underline-offset-4 cursor-pointer"
                        onClick={() => setMenuOpen(false)}
                    >
                        Contact
                    </span>
                    </Link>
                </div>
            )}
        </>
    );
};

export default Navbar;
