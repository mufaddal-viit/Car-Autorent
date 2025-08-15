import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export default function NavBar() {
  const { user, activeNavTab, setActiveNavTab } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", to: "/", tab: 1 },
    { label: "Rent a car", to: "/cars", tab: 2 },
    { label: "Add vehicle", to: "/addvehicle", tab: 3 },
    { label: "My cars", to: "/profile/mycars", tab: 4 },
  ];

  return (
    <header
      className={`w-full fixed z-10 top-0 flex items-center justify-between text-white font-bold text-base px-6 md:px-12 h-16 font-['Oxanium'] transition-all duration-500 ${
        scrolled ? "bg-[#101014] border-b border-white/10" : "bg-black"
      } animate-slideInDown`}
    >
      <h2 className="font-normal text-xl">AUTORENT</h2>

      {/* Desktop Nav */}
      <nav className="hidden md:flex uppercase border-b border-white/10 border-x rounded-b-2xl items-center">
        <ul className="flex gap-4 list-none">
          {navLinks.map(({ label, to, tab }) => (
            <li
              key={tab}
              className={`rounded-b-2xl text-center text-sm  ${
                activeNavTab === tab ? "bg-[#05caad]" : ""
              }`}
              onClick={() => setActiveNavTab(tab)}
            >
              <NavLink to={to} className="block w-32 py-4 text-white">
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile menu icon */}
      <div className="md:hidden z-20">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white text-2xl focus:outline-none"
        >
          {isMenuOpen ? <HiX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* User/Profile or Login */}
      {user ? (
        <div className="hidden lg:flex w-11 h-11 rounded-full bg-[#131317] border border-white/10 overflow-hidden ml-4 -translate-y-2.5">
          <NavLink
            to="/profile"
            className="w-full h-full flex items-center justify-center"
          >
            <img src="/user_icon.png" alt="Profile" className="w-5 h-5 pb-1" />
          </NavLink>
        </div>
      ) : (
        <div className="hidden lg:flex w-[100px] h-[40px] rounded-[10px] overflow-hidden border border-[#05caad] shadow-inner shadow-[#05caad] items-center justify-center relative cursor-pointer transition-transform duration-300 hover:scale-105 group ml-4">
          <span className="absolute top-0 left-0 h-full bg-[#05caad] w-0 transition-all duration-300 group-hover:w-full z-0"></span>
          <NavLink
            to="/login"
            className="w-full text-center relative z-10 text-white group-hover:text-white"
          >
            Login
          </NavLink>
        </div>
      )}

      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#101014] px-6 py-4 flex flex-col gap-4 md:hidden shadow-lg border-t border-white/10 z-10">
          {navLinks.map(({ label, to, tab }) => (
            <NavLink
              key={tab}
              to={to}
              onClick={() => {
                setActiveNavTab(tab);
                setIsMenuOpen(false);
              }}
              className={`block px-4 py-3 rounded-md ${
                activeNavTab === tab ? "bg-[#05caad] text-black" : "text-white"
              }`}
            >
              {label}
            </NavLink>
          ))}

          {user ? (
            <NavLink
              to="/profile"
              className="flex items-center gap-2 mt-4 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <img src="/user_icon.png" className="w-5 h-5" alt="Profile" />
              Profile
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              onClick={() => setIsMenuOpen(false)}
              className="border border-[#05caad] text-white px-4 py-2 rounded-md mt-4 hover:bg-[#05caad] hover:text-black transition"
            >
              Login
            </NavLink>
          )}
        </div>
      )}
    </header>
  );
}
