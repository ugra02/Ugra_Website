import { useRef, useEffect, useState } from "react";
import arrow from "../../assets/arrow.svg";
import Lottie from "lottie-react";
import cashbackAnimation from "../../assets/cashbackAnimation.json";

import people from "../../assets/post.png";
import overlay from "../../assets/overlay.avif";
import money from "../../assets/money.avif";
import icon from "../../assets/icon.svg";
import imgs41 from "../../assets/imgs41.png";
import imgs42 from "../../assets/imgs42.avif";
import imgs43 from "../../assets/imgs43.avif";
import axios from "axios";

const Services = () => {
  const [service, setService] = useState([]);
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect(); // run once
        }
      },
      {
        threshold: 0.3, // 30% visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    getServices();
  }, []);
  function getServices() {
    axios.get("https://demo.trubizmedia.com/api/services").then(function (response) {
      setService(response.data.services);
    });
  }
  return (
    <>
      <div className="pt-[100px]">
        <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden">
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
            <h1 className="text-white font-geist font-extrabold animate-zoomInText text-[40px] sm:text-[55px] md:text-[70px] leading-tight">
              Services
            </h1>
          </div>
        </div>
      </div>

      {/**/}
      <div className="py-[130px]">
        <section className="section container mx-auto px-[15px]">
          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.isArray(service) &&
              service.map((services, index) => (
                <a
                  href={`/services/${services.seo_name}`}
                  className="group bg-[#085c44] p-6 rounded-3xl text-left hover:bg-[#ecf86e] transition duration-300 flex flex-col justify-between relative overflow-hidden h-[300px] md:h-[340px] lg:h-[380px]"
                >
                  <div className="relative z-10">
                    {/* Responsive Text */}
                    {/* <p className="text-[#ecf86e] text-lg md:text-xl group-hover:text-[#043c33] font-geist font-medium">{item.category}</p> */}

                    <h3
                      key={index}
                      className="text-white text-2xl md:text-3xl lg:text-4xl group-hover:text-[#043c33] font-geist font-bold mt-2"
                    >
                      {services.name}
                    </h3>
                  </div>

                  {/* Arrow */}
                  <img
                    src="https://cdn.prod.website-files.com/66a1ffb90a9a7d95f6b2c522/66a37b6f798b3e57b4262847_arrow-right%20(1).svg"
                    alt="Arrow icon"
                    className="w-8 h-8 md:w-9 md:h-9 absolute bottom-6 left-6 z-10 transition-filter duration-300 group-hover:invert group-hover:brightness-125"
                  />

                  {/* Ellipse Decoration */}
                  <img
                    src="https://cdn.prod.website-files.com/66a1ffb90a9a7d95f6b2c522/66a37c55c23a26699735353a_Ellipse%20670.avif"
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="pointer-events-none absolute inset-0 opacity-0 transform -translate-x-3 -translate-y-19 duration-500 transition-transform group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
                    style={{
                      transformStyle: "preserve-3d",
                      zIndex: 0,
                      transform: "translateX(-10px) translateY(-0px)",
                    }}
                  />
                </a>
              ))}
          </div>

          {/* Single Centered Card Responsive */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 mt-6">
            <div className="col-span-1 md:col-start-2 md:col-end-3 flex justify-center">
              {Array.isArray(service) &&
                service.map((services, index) => (
                  <a
                    href={`/services/${services.seo_name}`}
                    className="group bg-[#085c44] w-full md:w-[365px] p-6 rounded-3xl text-left hover:bg-[#ecf86e] transition duration-300 flex flex-col justify-between relative overflow-hidden h-[300px] md:h-[340px] lg:h-[380px] "
                  >
                    <div className="relative z-10">
                      
                      <h3 className="text-white text-2xl md:text-3xl lg:text-4xl group-hover:text-[#043c33] font-geist font-bold mt-2">
                        {services.name}
                      </h3>
                    </div>

                    <img
                      src="https://cdn.prod.website-files.com/66a1ffb90a9a7d95f6b2c522/66a37b6f798b3e57b4262847_arrow-right%20(1).svg"
                      alt="Arrow icon"
                      className="w-8 h-8 md:w-9 md:h-9 absolute bottom-6 left-6 z-10 transition-filter duration-300 group-hover:invert group-hover:brightness-125"
                    />
                    <img
                      src="https://cdn.prod.website-files.com/66a1ffb90a9a7d95f6b2c522/66a37c55c23a26699735353a_Ellipse%20670.avif"
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      className="pointer-events-none absolute inset-0 opacity-0 transform -translate-x-3 -translate-y-19 duration-500 transition-transform group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
                      style={{
                        transformStyle: "preserve-3d",
                        zIndex: 0,
                        transform: "translateX(-0px) translateY(0px)",
                      }}
                    />
                  </a>
                ))}
            </div>
          </div> */}
        </section>
      </div>
      {/**/}

      <section
        className="py-[40px] sm:py-[60px] md:py-[100px]"
        ref={sectionRef}
      >
        <div className="container mx-auto px-4">
          <div
            className={`text-center transform transition-all duration-700 ease-out ${
              animate ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <div className="flex flex-col items-center text-center px-4 sm:px-8 md:px-12 py-6 space-y-6">
              {/* Heading */}
              <div className="text-[28px] sm:text-[28px] md:text-[90px] lg:text-[110px] font-geist font-extrabold text-[#043c33] leading-normal mb-0">
                Your trusted&nbsp;partner in
              </div>

              {/* Financial + Arrow + Growth Row */}
              <div className="flex flex-nowrap justify-center items-center gap-4 overflow-x-auto">
                <div className="underline decoration-2 underline-offset-4 text-[#085c44] font-geist font-extrabold text-3xl sm:text-5xl md:text-[70px] lg:text-[85px]">
                  digital
                </div>

                <a
                  href="/compare"
                  className="group flex bg-[#ecf86e] text-primary-dark rounded-full justify-center items-center w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] lg:w-[125px] lg:h-[125px] transition-all duration-300 hover:bg-[#ebeeee]"
                >
                  <img
                    src={arrow} // Make sure this image is imported or defined above
                    alt="arrow right"
                    loading="lazy"
                    className="sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-14 lg:h-14 transition-transform duration-300 group-hover:rotate-180"
                  />
                </a>

                <div className="underline decoration-2 underline-offset-4 text-[#085c44] font-bold text-3xl sm:text-5xl md:text-[70px] lg:text-[85px]">
                  growth
                </div>
              </div>

              {/* Subtext */}
              <p className="mt-4 text-[#2a725e] text-[20px] sm:text-lg md:text-xl max-w-[900px] mx-auto font-geist">
                Our user-friendly platform leverages the latest technology,
                making banking seamless and efficient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Start */}

      <style>{`
        .fade-up {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <section>
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Block A */}
          <div className="hidden sm:flex col-span-1 lg:col-span-3 bg-[#EBEEEE] px-10 py-8 rounded-3xl min-h-[420px] items-center justify-center relative">
            <img
              src={imgs43}
              alt="Backside of card"
              className="absolute z-0"
              style={{
                width: "auto",
                maxWidth: "40%",
                animation: "slideRightLeftOffset 4s ease-in-out infinite",
              }}
            />
            <img
              src={imgs42}
              alt="Backside of card"
              className="absolute z-0"
              style={{
                width: "auto",
                maxWidth: "45%",
                animation: "slideRightLeftOffset2 4s ease-in-out infinite",
              }}
            />
            <img
              src={imgs41}
              alt="Front of card"
              className="relative z-10 -left-14"
              style={{ width: "auto", maxWidth: "60%" }}
            />
          </div>

          {/* Block B */}
          <div className="col-span-1 lg:col-span-3 bg-[#ECF86E] px-6 py-8 text-start rounded-3xl flex flex-col cursor-pointer hover:scale-[1.01] transition-transform duration-300">
            <h1 className="text-[#043c33] font-geist font-bold text-[30px] md:text-[50px] xl:text-[70px] leading-tight">
              Payment Gateway
            </h1>
            <p className="text-[#085c44] font-geist text-[20px] md:text-[25px] mb-auto">
              Let's finish your card setup!
            </p>

            <div className="mt-10" />

            <p className="font-bold font-geist text-[#043c33] mb-2 text-[18px] md:text-[40px]"></p>

            <div className="w-full bg-[#bfd866] rounded-full h-6 overflow-hidden">
              <div className="bg-[#043c33] h-full rounded-full transition-all duration-500 ease-in-out" />
            </div>
          </div>

          {/* Block C */}
          <div className="col-span-1 lg:col-span-3 bg-[#043c33] p-6 rounded-3xl text-white relative overflow-hidden">
            <img
              src={overlay}
              alt=""
              className="absolute top-0 right-0 h-[60%] sm:h-[80%] opacity-20 pointer-events-none z-0"
            />
            <div className="relative z-10">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-geist font-bold leading-snug">
                We pride ourselves on collaborating with a network of esteemed
                partners who share our commitment to excellence.
              </h1>
              <div className="flex items-center gap-3 mt-8 sm:mt-20">
                <img src={people} alt="people icon" className="h-8 sm:h-12" />
                <p className="text-[#ECF86E] text-base sm:text-lg font-geist font-semibold">
                  10k+{" "}
                  <span className="text-white font-normal">
                    people trusted our services
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Block D */}
          <div className="col-span-1 lg:col-span-2 relative rounded-3xl overflow-hidden flex justify-center items-center">
            <img
              src={money}
              alt="money"
              className="absolute inset-0 w-full h-full object-cover z-0 rounded-3xl"
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/60 via-transparent to-transparent rounded-3xl"></div>
            <div className="relative z-10 p-4 text-white space-y-3 flex flex-col items-center">
              {["Fast.", "Secure.", "Simple."].map((text) => (
                <div
                  key={text}
                  className="flex items-center justify-center gap-2 text-[#043c33] font-geist bg-white rounded-full px-4 py-1"
                >
                  <img
                    src={icon}
                    alt="icon"
                    className="w-4 h-4 object-contain"
                  />
                  <span className="font-bold text-base sm:text-xl">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Block E */}
          <div className="col-span-1 lg:col-span-1 bg-[#043c33] p-6 rounded-3xl flex flex-col justify-center">
            <div className="w-full">
              <Lottie
                animationData={cashbackAnimation}
                loop
                autoplay
                className="w-full h-48"
              />
              <div className="text-white mt-4 text-base leading-relaxed">
                Experience peace of mind with a secure payment gateway that
                protects your data and ensures every transaction is safe.
              </div>
            </div>
          </div>

          {/* Block F - Logos with Marquee */}
          {/* <div className="col-span-1 lg:col-span-6 bg-[#ebeeee] p-6 sm:p-[50px] rounded-3xl text-[#043c33] relative">
            <h1 className="font-extrabold font-geist text-3xl sm:text-4xl md:text-5xl max-w-full sm:max-w-[60%] md:max-w-[40%] leading-tight">
              We helped more than 100 online journeys
            </h1>

            <div className="mt-16">
              <Marquee speed={100}>
                {logos.map((logo, idx) => (
                  <div key={idx} className="flex-shrink-0 mx-6">
                    <img
                      src={logo}
                      alt={`Logo ${idx}`}
                      className="h-12 object-contain"
                    />
                  </div>
                ))}
              </Marquee>
            </div>

            <div className="absolute -bottom-4 -right-4 p-4">
              <img src={number} alt="100+" className="w-16 sm:w-auto" />
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};
export default Services;
