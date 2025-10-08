import flogo from "../../assets/loogo.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Fade-Jump CTA --- */}
        <div className="pt-16 text-center mb-[70px]">
          {/* Animations */}
          <style>{`
          @keyframes fadeJump {
            0% { opacity: 0; transform: scale(0.9); }
            50% { opacity: 1; transform: scale(1.05); }
            100% { opacity: 1; transform: scale(1); }
          }
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>

          <div className="border-t-2 border-[#cccccc] w-full"></div>

          <div
            className={`flex flex-col sm:flex-row items-center justify-between gap-6 py-[40px]`}
            style={{ animation: "fadeJump 0.6s ease forwards" }}
          >
            <h1 className="text-[#043c33] font-geist font-extrabold text-[50px] md:text-[60px] lg:text-[80px] text-center sm:text-left">
              Work With Us
            </h1>
            <a
              href="mailto:support@ugra.in"
              className="text-[#085c44] underline font-geist font-extrabold text-[32px] md:text-[60px] lg:text-[80px]"
            >
              support@ugra.in
            </a>
          </div>

          <div className="border-b-2 border-[#cccccc] w-full mb-6"></div>
        </div>

        {/* --- Footer Content --- */}
        <footer
          className="mb-24"
          style={{
            animation: "fadeUp 0.8s ease forwards",
            opacity: 0,
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Logo */}
            <div>
              <a href="/">
                <img
                  src={flogo}
                  alt="UGRA Logo"
                  className="w-auto sm:h-12 md:h-16"
                  loading="lazy"
                />
              </a>
              <address className="not-italic text-base font-geist text-[#84908e] mt-6 space-y-2">
                <div className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 mt-1 text-[#085c44] fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5 14.5 7.6 14.5 9 13.4 11.5 12 11.5z" />
                  </svg>

                  <p>3rd Floor, ZS Avenue, Kavuri Hills, Madhapur - 500033</p>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-[#085c44]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.55 1.13 1 1 0 01.89 1v3.5a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.5a1 1 0 011 .89 11.36 11.36 0 001.13 3.55 1 1 0 01-.21 1.11l-2.2 2.2z" />
                  </svg>
                  <p className="ml-2 text-[#085c44]">+91 040-45352790</p>
                </div>
              </address>
              {/* Social Media Icons */}
              <div className="flex gap-8 mt-4">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#085c44] transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9a3.5 3.5 0 0 1 3.7-3.8c1.1 0 2.3.2 2.3.2v2.6H15c-1.2 0-1.5.8-1.5 1.5v1.8H17l-.5 3h-2v7A10 10 0 0 0 22 12z" />
                  </svg>
                </a>

                {/* Twitter */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#085c44] transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.38c-.85.51-1.78.87-2.78 1.07a4.29 4.29 0 0 0-7.32 3.91A12.2 12.2 0 0 1 3.1 4.88a4.3 4.3 0 0 0 1.33 5.73 4.26 4.26 0 0 1-1.94-.54v.06a4.3 4.3 0 0 0 3.44 4.21 4.28 4.28 0 0 1-1.93.07 4.3 4.3 0 0 0 4 2.98A8.6 8.6 0 0 1 2 19.54a12.2 12.2 0 0 0 6.59 1.93c7.91 0 12.23-6.56 12.23-12.23 0-.19 0-.38-.01-.57A8.66 8.66 0 0 0 24 5.3a8.55 8.55 0 0 1-2.54.7z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#085c44] transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14C2.25 0 0 2.25 0 5v14c0 2.75 2.25 5 5 5h14c2.75 0 5-2.25 5-5V5c0-2.75-2.25-5-5-5zM8.339 18.339H5.67V9.339h2.67v9zm-1.335-10.2a1.543 1.543 0 1 1 0-3.086 1.543 1.543 0 0 1 0 3.086zm11.335 10.2h-2.669v-4.5c0-1.07-.021-2.444-1.49-2.444-1.491 0-1.719 1.164-1.719 2.367v4.577h-2.668V9.339h2.564v1.23h.036c.357-.676 1.227-1.39 2.522-1.39 2.697 0 3.193 1.774 3.193 4.08v5.08z" />
                  </svg>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#085c44] hover:text-[#ec4899] transition"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M7.75 2C4.15 2 2 4.15 2 7.75v8.5C2 19.85 4.15 22 7.75 22h8.5C19.85 22 22 19.85 22 16.25v-8.5C22 4.15 19.85 2 16.25 2h-8.5zm0 2h8.5c2.4 0 3.75 1.35 3.75 3.75v8.5c0 2.4-1.35 3.75-3.75 3.75h-8.5C5.35 20 4 18.65 4 16.25v-8.5C4 5.35 5.35 4 7.75 4zm4.25 3.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm0 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm4.75-2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Menu */}
            <div>
              <h4 className="text-2xl font-bold mb-4 text-[#043c33] font-geist"></h4>
              <ul className="flex flex-wrap w-full gap-x-4 gap-y-1 text-base font-geist max-w-md">
                <li className="w-1/2 min-w-0">
                  <a
                    href="/"
                    className="text-[#84908e] hover:text-[#085c44] transition block"
                  >
                    Home
                  </a>
                </li>
                <li className="w-1/2 min-w-0">
                  <a
                    href="/aboutus"
                    className="text-[#84908e] hover:text-[#085c44] transition block"
                  >
                    About Us
                  </a>
                </li>
                <li className="w-1/2 min-w-0">
                  <a
                    href="/services"
                    className="text-[#84908e] hover:text-[#085c44] transition block"
                  >
                    Services
                  </a>
                </li>
                <li className="w-1/2 min-w-0">
                  <a
                    href="/industries"
                    className="text-[#84908e] hover:text-[#085c44] transition block"
                  >
                    Industries
                  </a>
                </li>
                <li className="w-1/2 min-w-0">
                  <a
                    href="/outsourcing"
                    className="text-[#84908e] hover:text-[#085c44] transition block"
                  >
                    Outsourcing
                  </a>
                </li>
                <li className="w-1/2 min-w-0">
                  <a
                    href="/career"
                    className="text-[#84908e] hover:text-[#085c44] transition block"
                  >
                    Career
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-2xl font-bold mb-4 text-[#043c33] font-geist">
                Subscribe to our latest news.
              </h4>
              <div className="hidden md:flex">
                <NavLink
                  to="/contactUs"
                  className="px-6 py-4 bg-[#085c44] text-white font-geist font-semibold rounded-md hover:bg-[#ecf86e] hover:text-[#085c44] border border-transparent hover:border-[#085c44] transition"
                >
                  Get in Touch
                </NavLink>
              </div>
              {/* <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-[#ebeeee] font-geist rounded-md placeholder-[#053d34]"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-4 bg-[#085c44] text-white font-geist font-semibold rounded-md hover:bg-[#ecf86e] hover:text-[#085c44] border border-transparent hover:border-[#085c44] transition"
                >
                  Submit
                </button>
              </form> */}
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 pt-6">
            <div className="text-center md:text-right text-sm font-geist text-[#0e443b] leading-relaxed">
              © 2025{" "}
              <span className="text-[#043c33] font-bold">
                Ugra and Trubiz Media.
              </span>{" "}
              All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
export default Footer;
