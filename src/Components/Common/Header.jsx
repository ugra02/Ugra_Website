import { NavLink } from "react-router-dom";
import logo from "../../assets/loogo.svg";
import { useEffect, useState } from "react";
import axios from "axios";

const Header = () => {
  const [user, setUser] = useState([]);
  const [industries, setIndustries] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    getUser();
  }, []);
  function getUser() {
    axios.get("https://demo.trubizmedia.com/api/user").then(function (response) {
      setUser(response.data.services);
    });
  }

  useEffect(() => {
    getIndustries();
  }, []);

  function getIndustries() {
    axios.get("https://demo.trubizmedia.com/api/industries").then((response) => {
      setIndustries(response.data.industries);
    });
  }

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 p-4`}
      >
        <div className="container mx-auto flex justify-between items-center bg-[#ebeeee] p-4 rounded-lg">
          <div className="flex-shrink-0">
            <NavLink to="/">
              <img
                src={logo}
                alt="Logo"
                className="h-10 w-auto"
                loading="lazy"
              />
            </NavLink>
          </div>
          <ul className="hidden md:flex space-x-10 text-[16px] font-medium text-[#222222]">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-green-600 font-bold" : "text-gray-700"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutUs"
                className={({ isActive }) =>
                  isActive ? "text-green-600 font-bold" : "text-gray-700"
                }
              >
                About Us
              </NavLink>
            </li>
            {/* Dropdown Starts */}
            <li className="relative">
              <button
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "services" ? null : "services"
                  )
                }
                className="text-gray-700 hover:text-green-600 flex items-center"
              >
                Services
                <svg
                  className={`ml-1 h-4 w-4 transition-transform ${
                    openDropdown === "services" ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openDropdown === "services" && (
                <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg">
                  {Array.isArray(user) &&
                    user.map((services, index) => (
                      <li key={index}>
                        <NavLink
                          to={`/services/${services.seo_name}`}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          {services.name}
                        </NavLink>
                      </li>
                    ))}
                </ul>
              )}
            </li>
            {/* Dropdown Ends */}

            {/* Dropdown Starts */}
            <li className="relative">
              <button
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "industries" ? null : "industries"
                  )
                }
                className="text-gray-700 hover:text-green-600 flex items-center"
              >
                Industries
                <svg
                  className={`ml-1 h-4 w-4 transition-transform ${
                    openDropdown === "industries" ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openDropdown === "industries" && (
                <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg">
                  {Array.isArray(industries) &&
                    industries.map((industry, index) => (
                      <li key={index}>
                        <NavLink
                          to={`/industries/${industry.seo_name}`}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          {industry.name}
                        </NavLink>
                      </li>
                    ))}
                </ul>
              )}
            </li>
            {/* Dropdown Ends */}
            <li>
              <NavLink
                to="/outSourcing"
                className={({ isActive }) =>
                  isActive ? "text-green-600 font-bold" : "text-gray-700"
                }
              >
                OutSourcing
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/career"
                className={({ isActive }) =>
                  isActive ? "text-green-600 font-bold" : "text-gray-700"
                }
              >
                Career
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contactUs"
                className={({ isActive }) =>
                  isActive ? "text-green-600 font-bold" : "text-gray-700"
                }
              >
                ContactUs
              </NavLink>
            </li>
          </ul>
          <div className="hidden md:flex">
            <NavLink
              to="/contactUs"
              className="hover:bg-[#043c3f] border border-[#c1d3cf] text-[#043c3f] hover:text-white font-semibold text-sm px-6 py-2 rounded transition text-[16px]"
            >
              Get in Touch
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
