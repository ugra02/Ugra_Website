import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Elevate() {
  return (
    <section className="relative bg-[#043c33] overflow-hidden py-[130px] px-6 flex flex-col justify-center items-center min-h-[600px]">
      {/* Left Image */}
      <img
        src="https://cdn.prod.website-files.com/66a1ffb90a9a7d95f6b2c522/66a780277fc3d12815c591b3_Ellipse%20671.avif"
        alt="image 33"
        loading="lazy"
        className="absolute left-0 top-0 opacity-100 animate-floatFrontBack"
      />

      {/* Right Image */}
      <img
        src="https://cdn.prod.website-files.com/66a1ffb90a9a7d95f6b2c522/66a78027e745290b8d5af0c0_Ellipse%20670.avif"
        alt="image 32"
        loading="lazy"
        className="absolute -right-12 -bottom-12 opacity-100 animate-floatFrontBack"
      />

      {/* Motion Content */}
      <motion.div
        className="relative max-w-4xl text-center text-white"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }} // triggers on scroll or if already in view on load
      >
        <h2 className="text-4xl md:text-[90px] max-w-4xl font-geist font-bold mb-6 mx-auto">
          Elevate Your Website with Ugra
        </h2>
        <p className="text-lg font-geist md:text-xl mb-10 max-w-3xl mx-auto">
          Connect with Ugra today to start building a powerful, effective online
          presence. Our expert team is ready to deliver outstanding results
          tailored for your success.
        </p>
        <Link
          to="/contactUs"
          id="contact-form"
          className="inline-block bg-[#ecf86e] text-[#053d33] font-geist font-bold transition-colors duration-300 rounded px-8 py-4"
        >
          Get started now
        </Link>
      </motion.div>
    </section>
  );
}

export default Elevate;
