import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import img from "../../assets/aboutbg.avif";
import icon from "../../assets/icon.svg";
import Teamsection from "../Common/TeamSection";
const stats = [
  {
    value: "1M",
    description:
      "Trustly is proud to serve over one million satisfied customers.",
  },
  { value: "2B", description: "Trustly manages over $10 billion in assets." },
  {
    value: "2M",
    description: "Trustly customers have earned over 2M rewards.",
  },
  { value: "98%", description: "Commitment to exceptional customer service." },
];
const AboutUs = () => {
  return (
    <>
      <div className="pt-[100px]">
        <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 xl:py-[120px] min-h-[300px] sm:min-h-[450px] xl:min-h-[600px]">
          <div className="absolute inset-0 h-full w-full">
            <motion.img
              src={img}
              alt="Nature Background"
              initial={{ scale: 1 }}
              whileInView={{ scale: 1.1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 10, ease: "easeInOut" }}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#085c4466]"></div>
          </div>

          {/* Content container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 max-w-full sm:max-w-xl md:max-w-3xl xl:max-w-4xl mx-auto lg:ml-[190px] px-6 sm:px-4 flex flex-col items-start"
          >
            <h1 className="text-white font-black capitalize tracking-tight leading-tight mt-6 mb-6 max-w-full">
              <div className="text-2xl sm:text-4xl md:text-5xl xl:text-7xl">
                Your Vision
              </div>
              <div className="text-2xl sm:text-4xl md:text-5xl xl:text-7xl text-[#ecf86e] underline">
                Our Digital Execution
              </div>
            </h1>

            <p className="text-white text-base sm:text-lg max-w-full sm:max-w-xl md:max-w-2xl mb-6">
              We don’t just build websites - we create digital ecosystems that
              enable growth, engagement, and excellence.
            </p>
            <div className="hidden md:flex">
              <NavLink
                to="/contactUs"
                className="w-full sm:w-auto bg-[#ecf86e] hover:text-white text-[#043c33] px-6 py-3 rounded-md font-medium text-sm sm:text-base hover:bg-[#043c40] transition"
              >
                Get started now
              </NavLink>
            </div>
            {/* Email form */}
            {/* <form
              className="w-full max-w-md flex flex-col sm:flex-row gap-3 items-center"
              method="GET"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:flex-1 px-6 py-3 bg-[#f3f4f6] font-geist rounded-md placeholder-[#043c40] font-bold text-sm sm:text-base"
                required
              />

              <button
                type="submit"
                className="w-full sm:w-auto bg-[#ecf86e] hover:text-white text-[#043c33] px-6 py-3 rounded-md font-medium text-sm sm:text-base hover:bg-[#043c40] transition"
              >
                Get started now
              </button>
            </form> */}
          </motion.div>
        </section>
      </div>
      <section className="pt-[130px] fadeInUp-animation">
        <div className="container mx-auto px-4">
          <div className="mb-12 max-w-4xl mx-auto text-center px-4 pb-4">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#043c33] leading-tight mb-4 font-geist relative inline-block">
              UGRA Empowering Brands with Digital Brilliance
              <span className="block w-20 h-1 bg-[#ecf86e] mt-2 rounded-full mx-auto"></span>
            </h1>
            <span className="block text-lg sm:text-xl text-[#186750] font-semibold mb-6">
              Your Partner for Seamless Digital Growth
            </span>
            <p className="text-[#186750] text-base sm:text-lg leading-relaxed font-geist">
              For over 10 years, UGRA has been the catalyst behind
              transformative digital journeys. We don’t just build websites or
              run campaigns we craft tailored, end-to-end solutions that fuel
              growth across Pharma, Energy, Healthcare, E-commerce, and beyond.
              Join the hundreds of brands trusting UGRA to amplify their
              presence, engage audiences, and unlock new business potential.
            </p>
          </div>

          {/* Grid Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 max-w-full lg:max-w-xl px-2">
              <div className="inline-flex items-center bg-[#ecf86e] rounded-3xl px-3 py-1 font-geist font-semibold tracking-wider w-max mx-auto lg:mx-0">
                <span className="block w-4 h-4">
                  <img
                    src={icon}
                    alt="icon"
                    className="w-full h-full object-contain"
                  />
                </span>
                <span className="flex ml-1 items-center font-geist text-[#186144]">
                  Key Benefits
                </span>
              </div>

              <h2 className="text-3xl sm:text-[50px] font-geist font-extrabold text-[#043c33] leading-tight max-w-full">
                Why Choose Us
              </h2>

              <ul className="list-disc list-inside text-[#186750] text-base sm:text-lg mb-6 space-y-2 max-w-full">
                <li>10+ Years of Industry Expertise</li>
                <li>Cross-Industry Experience with Renowned Brands</li>
                <li>Creative, Custom & Scalable Digital Solutions</li>
                <li>Dedicated Team for Strategy, Design & Execution</li>
                <li>Supportive, Agile, and Future-Ready Approach</li>
              </ul>
            </div>

            {/* Image */}
            <div className="w-full overflow-hidden rounded-[24px] max-h-[400px]">
              <img
                src="https://cdn.prod.website-files.com/66a1ffb90a9a7d95f6b2c522/66b0ae9be0eb9722de813ef0_104763.avif"
                alt="People choose us"
                className="w-full h-auto object-cover rounded-[24px]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="border-b-2 border-[#CCCCCC] mt-[80px] w-full"></div>

          {/* Numbers Section */}
          <div
            id="numbers-section"
            className="numbers-wrap bottom-top pt-[70px] flex flex-wrap justify-between gap-6"
          >
            {stats.map(({ value, description }, i) => (
              <div className="number-block flex flex-col items-start max-w-xs flex-1 min-w-[150px]">
                <div className="flex items-baseline text-4xl font-geist font-extrabold text-[#085c44] flex-wrap">
                  <span className="text-[60px] sm:text-[80px]">{value}</span>
                  <span className="text-[70px] sm:text-[100px] ml-1 text-[#ecf86e] leading-none">
                    +
                  </span>
                </div>
                <p className="mt-2 text-[16px] sm:text-[20px] text-[#085c44] w-full">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Teamsection />
    </>
  );
};
export default AboutUs;
