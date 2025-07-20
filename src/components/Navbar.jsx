    import { useState } from "react";

    const navLinks = [
    { id: "home", name: "Home" },
    { id: "about", name: "About" },
    { id: "projects", name: "Projects" },
    { id: "skills", name: "Skills" },
    { id: "contact", name: "Contact" },
    ];

    export default function Navbar() {
    const [active, setActive] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50 py-4">

         <div className="w-full px-4 md:px-8 py-4 flex justify-between items-center">

            {/* Logo */}
     <div className="text-3xl md:text-5xl font-extrabold text-blue-700">Rudresh Sharma</div>





            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
                <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setActive(link.id)}
                className={`relative px-4 py-2 rounded-md text-lg font-semibold overflow-hidden group transition-colors duration-300 ease-in-out ${
                    active === link.id ? "bg-blue-100 text-blue-700" : "text-gray-700"
                }`}
                >
                <span className="relative z-10">{link.name}</span>
                <span
                    className="absolute inset-0 bg-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0"
                    aria-hidden="true"
                ></span>
                <span
                    className="absolute inset-0 z-0 group-hover:opacity-100 opacity-0 transition-opacity duration-300 ease-in-out"
                ></span>
                <style jsx>{`
                    a:hover span.relative {
                    color: white;
                    }
                `}</style>
                </a>
            ))}
            </div>

            {/* Mobile Menu Icon */}
            <div
            className="md:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            >
            <svg
                className="h-7 w-7 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                {menuOpen ? (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                />
                ) : (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                />
                )}
            </svg>
            </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
            <div className="md:hidden px-4 pb-4 space-y-2 animate-slide-down">
            {navLinks.map((link) => (
                <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => {
                    setActive(link.id);
                    setMenuOpen(false);
                }}
                className={`block px-4 py-2 rounded-md text-lg font-semibold transition-all duration-200 ${
                    active === link.id
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-800 hover:bg-blue-600 hover:text-white"
                }`}
                >
                {link.name}
                </a>
            ))}
            </div>
        )}
        </nav>
    );
    }
