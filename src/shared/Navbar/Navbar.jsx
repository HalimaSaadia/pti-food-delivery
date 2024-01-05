import { useState } from "react";
import "./navbar.css";
import { AiOutlineUser } from "react-icons/ai";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("MENU");
  return (
    <div className="grid grid-cols-12 max-w-6xl mx-auto justify-between  px-2 py-5 md:p-10 xl:px-0  ">
      <div className="text-xl md:text-4xl flex-1 col-span-2 text-[#3C2F30] font-bold navbarName">pti.</div>
      <div className="flex items-center col-span-10 md:col-span-8 md:gap-5  justify-end md:flex-1   ">
        {" "}
        <input
          type="text"
          placeholder="Search Audion Book"
          className="input  input-bordered md:flex-1 bg-white focus:outline-none"
        />{" "}
        <div className="relative ">
          <div>
            <button
              type="button"
              className="inline-flex md:min-w-40 w-full justify-center md:gap-x-1.5 rounded-md bg-white md:px-3 py-3 text-sm  text-[#2B3E51] font-bold "
              onClick={() => setIsOpen(!isOpen)}
            >
              {dropdownValue}
              <svg
                className="md:-mr-1 h-5 w-8 text-orange-500"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                />
              </svg>
            </button>
          </div>

          <div
            className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ${
              isOpen ? "block" : "hidden"
            } `}
          >
            <div className="py-1 shadow-none">
              <li
                className="text-gray-400 block px-4 py-2 text-md  hover:bg-[#E7E9EC] hover:text-orange-500 font-semibold"
                role="menuitem"
                id="menu-item-0"
                onClick={() => {
                  setDropdownValue("Home"), setIsOpen(false);
                }}
              >
                Home
              </li>
              <li
                className="text-gray-400 block px-4 py-2 text-md  hover:bg-[#E7E9EC] hover:text-orange-500 font-semibold"
                onClick={() => {
                  setDropdownValue("Details"), setIsOpen(false);
                }}
              >
                Details
              </li>
              <li
                className="text-gray-400 block px-4 py-2 text-md  hover:bg-[#E7E9EC] hover:text-orange-500 font-semibold"
                onClick={() => {
                  setDropdownValue("Category"), setIsOpen(false);
                }}
              >
                Category
              </li>
              <li
                className="text-gray-400 block px-4 py-2 text-md  hover:bg-[#E7E9EC] hover:text-orange-500 font-semibold"
                onClick={() => {
                  setDropdownValue(" My Favorites"), setIsOpen(false);
                }}
              >
                My Favorites
              </li>
              <li
                className="text-gray-400 block px-4 py-2 text-md  hover:bg-[#E7E9EC] hover:text-orange-500 font-semibold"
                onClick={() => {
                  setDropdownValue("Profile"), setIsOpen(false);
                }}
              >
                Profile
              </li>
              <li
                className="text-gray-400 block px-4 py-2 text-md  hover:bg-[#E7E9EC] hover:text-orange-500 font-semibold"
                onClick={() => {
                  setDropdownValue("Login/Sign Up"), setIsOpen(false);
                }}
              >
                Login/Sign Up
              </li>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 hidden md:flex justify-end ">
       <div>
       <div className="bg-orange-500 p-2 rounded-full w-fit">
          <AiOutlineUser className="text-white text-3xl" />
        </div>
       </div>
      </div>
    </div>
  );
};

export default Navbar;
