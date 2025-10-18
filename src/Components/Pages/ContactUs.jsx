import { motion } from "framer-motion";
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // null | 'success' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.mobile.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setStatus("error");
      return;
    }

    try {
      const response = await fetch(
        "https://demo.trubizmedia.com/api/enquiry.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok && result.status === "success") {
        setStatus("success");
        setFormData({
          name: "",
          mobile: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission failed:", error);
      setStatus("error");
    }
  };

  return (
    <>
      <div className="pt-[100px]">
        <div className="relative w-full h-[350px] overflow-hidden">
          {/* Image background */}
          <img
            src="https://images.pexels.com/photos/5077045/pexels-photo-5077045.jpeg"
            alt="Support Background"
            className="absolute inset-0 w-full h-full object-cover animate-zoomSlow"
            loading="lazy"
          />
          {/* Dark green overlay */}
          <div className="absolute inset-0 bg-[#085c4466]"></div>
          {/* Content container */}
          <div className="relative z-10 flex justify-center items-center h-full uppercase">
            <h1
              className="text-white font-geist text-[70px] font-extrabold animate-zoomInText
            sm:text-[50px] md:text-[70px] lg:text-[70px]"
            >
              Support
            </h1>
          </div>
        </div>
      </div>

      <section className="py-[130px] pb-[60px] bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center text-center">
            <motion.div
              className="max-w-5xl"
              style={{ transformStyle: "preserve-3d" }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="mb-6">
                <h2 className="text-[#043c33] font-geist font-extrabold mb-4 text-[32px] sm:text-[40px] md:text-[50px]">
                  We're Here to Help
                </h2>
                <p className="text-[#085c44] font-geist text-[18px] sm:text-[20px] md:text-[24px] border-b-2 border-[#cccc] pb-4">
                  At Ugra, we value our customers and partners. Whether you have
                  a question about our services, need assistance, or want to
                  provide feedback, our team is here to assist you. Please
                  choose the most convenient way to get in touch with us.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <a
                  href="mailto:support@ugra.in"
                  className="text-white bg-[#043c33] py-[8px] px-[20px] rounded-3xl text-center hover:bg-[#ecf86e] hover:text-[#043c33]"
                >
                  support@ugra.in
                </a>
                <a
                  href="tel:+9104045352790"
                  className="text-white bg-[#043c33] py-[8px] px-[20px] rounded-3xl text-center hover:bg-[#ecf86e] hover:text-[#043c33]"
                >
                  +91 040 45352790
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Starts */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        className="p-6 sm:p-8 rounded-md max-w-6xl mx-auto"
        id="contact-form"
      >
        <h2 className="text-[40px] sm:text-[50px] font-geist font-extrabold text-center text-[#043c33] mb-6">
          Do you have questions?
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-[#ecf86e] p-6 sm:p-[40px] rounded-3xl"
          aria-label="Contact form"
          noValidate
        >
          {/* Inputs row */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name*"
              maxLength={256}
              className="flex-1 min-w-[150px] px-4 py-3 bg-white placeholder:text-[#043c33] font-geist font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-[#043c33]"
              required
            />
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Phone*"
              maxLength={256}
              className="flex-1 min-w-[150px] px-4 py-3 bg-white placeholder:text-[#043c33] font-geist font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-[#043c33]"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email*"
              maxLength={256}
              className="flex-1 min-w-[200px] px-4 py-3 bg-white placeholder:text-[#043c33] font-geist font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-[#043c33]"
              required
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject*"
              maxLength={256}
              className="flex-1 min-w-[150px] px-4 py-3 bg-white placeholder:text-[#043c33] font-geist font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-[#043c33]"
              required
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message*"
            maxLength={5000}
            rows={6}
            className="w-full px-4 py-3 bg-white placeholder:text-[#043c33] font-geist font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-[#043c33]"
            required
          />

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#043c33] text-white font-semibold px-6 py-3 rounded-md 
                       hover:bg-transparent hover:text-[#043c33] hover:border hover:border-[#043c33] transition w-full sm:w-auto max-w-xs"
            >
              Send message
            </button>
          </div>
        </form>

        {status === "success" && (
          <div
            className="mt-4 p-4 bg-green-100 text-green-700 rounded-md text-center"
            role="alert"
            tabIndex={-1}
          >
            Thank you! Your submission has been received!
          </div>
        )}

        {status === "error" && (
          <div
            className="mt-4 p-4 bg-red-100 text-red-700 rounded-md text-center"
            role="alert"
            tabIndex={-1}
          >
            Oops! Please fill out all required fields.
          </div>
        )}
      </motion.section>
      {/* Contact Form Ends */}
    </>
  );
};

export default ContactUs;
