import { useRef, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import icon from "../../assets/icon.svg";
import img1 from "../../assets/img1.avif";
import arrow from "../../assets/arrow.svg";
import img from "../../assets/imgg.jpg";
import img2 from "../../assets/imgg1.jpg";
import img3 from "../../assets/imgg2.jpg";
import Review from "../Common/Review";
import Elevate from "../Common/Elevate";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";

import { motion, useAnimationFrame } from "framer-motion";
import imgs41 from "../../assets/imgs41.png";
import imgs42 from "../../assets/imgs42.avif";
import imgs43 from "../../assets/imgs43.avif";
import people from "../../assets/post.png";
import overlay from "../../assets/overlay.avif";
import money from "../../assets/money.avif";
import Lottie from "lottie-react";
import cashbackAnimation from "../../assets/cashbackAnimation.json";
import number from "../../assets/100.avif";
import img111 from "../../assets/Nova.png";
import img22 from "../../assets/Artboard 2.png";
import img33 from "../../assets/Artboard 3.png";
import img4 from "../../assets/Artboard 4.png";
import img5 from "../../assets/Artboard 5.png";
import img6 from "../../assets/Artboard 6.png";
import img7 from "../../assets/Artboard 7.png";
import img8 from "../../assets/Artboard 8.png";
import img9 from "../../assets/Artboard 9.png";
import img10 from "../../assets/Artboard 10.png";
import img11 from "../../assets/Artboard 11.png";
import img12 from "../../assets/Artboard 12.png";
import img13 from "../../assets/Artboard 13.png";
import img14 from "../../assets/Artboard 14.png";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [industries, setIndustries] = useState([]);
  const [service, setService] = useState([]);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [fadeRef, fadeVisible] = useFadeUpOnScroll();
  const navigate = useNavigate();

  function useFadeUpOnScroll() {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        },
        {
          threshold: 0.1,
        }
      );

      if (ref.current) observer.observe(ref.current);

      return () => observer.disconnect();
    }, []);

    return [ref, visible];
  }

  function Marquee({ children, speed = 50 }) {
    const x = useRef(0);
    const containerRef = useRef(null);

    useAnimationFrame((t, delta) => {
      if (containerRef.current) {
        x.current -= (speed * delta) / 1000;
        containerRef.current.style.transform = `translateX(${x.current}px)`;

        const width = containerRef.current.scrollWidth / 2;
        if (Math.abs(x.current) >= width) {
          x.current = 0;
        }
      }
    });

    return (
      <div className="overflow-hidden w-full">
        <div ref={containerRef} className="flex w-max">
          {children}
          {children}
        </div>
      </div>
    );
  }
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    getIndustries();
  }, []);
  function getIndustries() {
    axios.get("http://localhost:80/api/industries").then(function (response) {
      setIndustries(response.data.industries);
    });
  }
  useEffect(() => {
    getServices();
  }, []);
  function getServices() {
    axios.get("http://localhost:80/api/services").then(function (response) {
      setService(response.data.services);
    });
  }
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
    setTimeout(() => setIsLoaded(true), 100);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    try {
      const response = await fetch("http://localhost/api/submit_email.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      // Parse JSON
      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setEmail(""); // clear input
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error connecting to server. Make sure Apache is running.");
    } finally {
      setLoading(false);
    }
  };

  const NavArrow = ({ rotate = false }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#043c33"
      viewBox="0 0 24 24"
      className={`w-9 h-9 ${rotate ? "rotate-180" : ""}`}
    >
      <path d="M10.293 6.707a1 1 0 011.414 0L17 12l-5.293 5.293a1 1 0 01-1.414-1.414L14.586 12l-4.293-4.293a1 1 0 010-1.414z" />
    </svg>
  );
  const handleClick = () => {
    navigate("/services/payment&smsgatewayintegration");
  };
  useEffect(() => {
    if (!fadeVisible) return;

    let current = 0;
    const interval = setInterval(() => {
      current += 2;
      setProgress(current);
      if (current >= 100) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, [fadeVisible]);
  const logos = [
    img111,
    img22,
    img33,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
  ];
  return (
    <>
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
      <div className="container mx-auto px-4 pt-[110px]">
        <div className="flex flex-col md:flex-row justify-between gap-6 relative">
          {/* Left Section */}
          <div
            className="bg-[#ecf86e] md:w-1/2 flex flex-col justify-center items-center rounded-3xl px-8 py-6 md:px-20 md:py-10"
            style={{
              transform: isLoaded ? "translate(0, 0)" : "translate(50%, 20px)",
              transition: "transform 0.8s ease-out",
              position: "relative",
              zIndex: 20,
            }}
          >
            <div className="inline-flex items-center gap-1.5 bg-white rounded-full px-5 py-1.5 text-base font-medium leading-tight">
              <span className="block w-4 h-4">
                <img
                  src={icon}
                  alt="icon"
                  className="w-full h-full object-contain"
                />
              </span>
              <span className="flex items-center font-geist text-[#186144]">
                Software Innovation Redefined
              </span>
            </div>

            <h1 className="text-[#023929] uppercase font-geist font-extrabold leading-tight tracking-tight mt-5 mb-6 text-3xl md:text-5xl xl:text-6xl max-w-xl text-center">
              Your Brand <br /> Our Mission
            </h1>
            <p className="max-w-md text-base leading-relaxed mt-0 mb-2 text-[#27714a] text-center font-geist">
              We are a rapidly growing web design company with extensive
              experience collaborating with renowned brands across diverse
              industry sectors.
            </p>
            {/* Form or Thank You Message */}
            <div className="hidden md:flex">
              <NavLink
                to="/contactUs"
                className="px-5 py-3 bg-[#043c33] text-white font-semibold rounded-md transition duration-150 whitespace-nowrap border border-transparent hover:bg-[#ecf86e] hover:text-[#043c33] hover:border-[#043c33] w-full sm:w-auto"
              >
                Get started now
              </NavLink>
            </div>
            {/* {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="w-full max-w-md mx-auto p-6"
                aria-label="Email Form"
              >
                <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={256}
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 font-medium font-geist bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#043c33] placeholder:text-[#043c33] w-full transition"
                    disabled={loading}
                  />

                  
                  {loading ? (
                    <div className="px-5 py-3 bg-transparent text-[#043c33] border border-[#043c33] rounded-md w-full sm:w-auto text-center select-none">
                      Please wait...
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className="px-5 py-3 bg-[#043c33] text-white font-semibold rounded-md transition duration-150 whitespace-nowrap border border-transparent hover:bg-[#ecf86e] hover:text-[#043c33] hover:border-[#043c33] w-full sm:w-auto"
                    >
                      Get started now
                    </button>
                  )}
                </div>
              </form>
            ) : (
              <p className="mt-4 text-[#043c33] font-medium text-center uppercase text-lg">
                Thank you! Your submission has been received!
              </p>
            )} */}
            {/* Trusted People Section */}
            <div className="flex items-center space-x-2 text-white font-semibold dark:text-gray-100 mt-6">
              <img
                src="https://cdn.prod.website-files.com/66a1ffb90a9a7d95f6b2c522/6864f20b312e9a06c066767c_trusted%20people.png"
                loading="lazy"
                alt="Trusted people"
                className="w-30 h-auto"
              />
              <div>
                <span className="text-[#043c33] font-geist font-bold text-xl">
                  10K+
                </span>{" "}
                <span className="text-[#085c44] font-geist font-bold text-[18px] leading-tight">
                  people trusted <br /> our services
                </span>
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div
            className="bg-[#085c44] md:w-1/2 rounded-3xl flex justify-center items-center md:px-[50px] relative overflow-hidden"
            style={{
              transform: isLoaded
                ? "translate(0, 0)"
                : "translate(-50%, -20px)",
              transition: "transform 0.8s ease-out",
              zIndex: 10,
            }}
          >
            {/* Floating Labels */}
            <div
              className={`absolute top-44 left-0 m-4 ml-[30px] text-[26px] font-semibold z-30 transform transition-all duration-700 ease-out ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
            >
              <div className="flex items-center bg-white rounded-3xl py-[6px] px-[20px] text-[#085c44] text-2xl">
                <span className="block w-4 h-4 mr-2">
                  <img
                    src={icon}
                    alt="icon"
                    className="w-full h-full object-contain"
                  />
                </span>
                Fast.
              </div>
            </div>

            <div
              className={`absolute bottom-[400px] right-0 m-4 text-[26px] font-semibold z-30 transform transition-all duration-700 ease-out delay-200 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
            >
              <div className="flex items-center bg-white rounded-3xl py-[6px] px-[20px] text-[#085c44] text-2xl">
                <span className="block w-4 h-4 mr-2">
                  <img
                    src={icon}
                    alt="icon"
                    className="w-full h-full object-contain"
                  />
                </span>
                Secure.
              </div>
            </div>

            <div
              className={`absolute bottom-48 left-14 m-4 text-[26px] font-semibold z-30 transform transition-all duration-700 ease-out delay-400 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
            >
              <div className="flex items-center bg-white rounded-3xl py-[6px] px-[20px] text-[#085c44] text-2xl">
                <span className="block w-4 h-4 mr-2">
                  <img
                    src={icon}
                    alt="icon"
                    className="w-full h-full object-contain"
                  />
                </span>
                Simple.
              </div>
            </div>

            {/* Right Image */}
            <img
              src={img1}
              alt="img"
              className="max-w-full h-auto rounded-2xl z-10"
            />
          </div>
        </div>
      </div>
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
      <div className="pb-[40px] sm:pb-[80px] md:pb-[130px]">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src={img}
              alt="img1"
              className="hidden sm:block w-full h-[200px] sm:h-[200px] md:h-[450px] object-cover rounded-3xl"
            />
            <img
              src={img2}
              alt="img2"
              className="hidden sm:block w-full h-[200px] sm:h-[200px] md:h-[450px] object-cover rounded-3xl"
            />
            <img
              src={img3}
              alt="img3"
              className="hidden sm:block w-full h-[200px] sm:h-[200px] md:h-[450px] object-cover rounded-3xl"
            />
          </motion.div>
          {/* Services section Starts */}
          <section
            ref={sectionRef}
            className={`bg-[#043c33] py-32 px-8 sm:px-12 md:px-20 mt-5 rounded-3xl relative transition-all duration-700 ease-out transform
        ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="container mx-auto text-center lg:text-left">
              <h2 className="text-white text-4xl md:text-5xl font-geist font-bold max-w-xl leading-tight">
                Our Core<span className="text-[#ecf86e]"> Services</span>
              </h2>

              <div className="mt-12 relative">
                {Array.isArray(service) && service.length > 0 && (
                  <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={24}
                    slidesPerView={1}
                    loop={service.length > 3} // loop only if more than 3 slides
                    speed={3000}
                    autoplay={{
                      delay: 0,
                      disableOnInteraction: false,
                    }}
                    navigation={{
                      prevEl: prevRef.current,
                      nextEl: nextRef.current,
                    }}
                    onSwiper={(swiper) => {
                      swiperRef.current = swiper;
                    }}
                    onInit={(swiper) => {
                      swiper.params.navigation.prevEl = prevRef.current;
                      swiper.params.navigation.nextEl = nextRef.current;
                      swiper.navigation.init();
                      swiper.navigation.update();
                    }}
                    breakpoints={{
                      640: { slidesPerView: 1 },
                      768: { slidesPerView: 2 },
                      1024: { slidesPerView: 3 },
                      1280: { slidesPerView: 4 },
                    }}
                  >
                    {service.map((services, index) => (
                      <SwiperSlide key={index}>
                        <a
                          href={`/services/${services.seo_name}`}
                          className="group bg-[#085c44] p-6 rounded-3xl text-left hover:bg-[#ecf86e] transition duration-300 flex flex-col justify-between h-100 relative overflow-hidden"
                          onMouseEnter={() =>
                            swiperRef.current?.autoplay.stop()
                          }
                          onMouseLeave={() =>
                            swiperRef.current?.autoplay.start()
                          }
                        >
                          <div className="relative z-10">
                            <h3 className="text-white text-4xl group-hover:text-[#043c33] font-geist font-bold mt-2">
                              {services.name}
                            </h3>
                          </div>

                          <img
                            src="https://cdn.prod.website-files.com/66a1ffb90a9a7d95f6b2c522/66a37b6f798b3e57b4262847_arrow-right%20(1).svg"
                            alt="Arrow icon"
                            className="w-9 h-9 absolute bottom-6 left-6 z-10 transition-filter duration-300 group-hover:invert group-hover:brightness-125"
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
                              transform: "translateX(-46px) translateY(-53px)",
                            }}
                          />
                        </a>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}

                <div className="absolute inset-y-0 w-full z-10 pointer-events-none">
                  <button
                    ref={prevRef}
                    className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 pointer-events-auto bg-white rounded-full p-2 transition"
                    aria-label="Previous"
                  >
                    <NavArrow rotate />
                  </button>
                  <button
                    ref={nextRef}
                    className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 pointer-events-auto bg-white rounded-full p-2 transition"
                    aria-label="Next"
                  >
                    <NavArrow />
                  </button>
                </div>
              </div>
            </div>
          </section>
          {/* Services Section Ends */}
          {/* Industry Section Starts */}
          <section className="py-[130px]">
            <div className="max-w-7xl mx-auto px-[15px]">
              {/* Header */}
              <div className="text-center max-w-4xl mx-auto mb-12">
                <h2
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="text-3xl sm:text-4xl md:text-[50px] font-geist font-extrabold mb-4 text-[#043c33]"
                >
                  Industries We Serve
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="text-lg md:text-[24px] text-[#085c44]"
                >
                  Providing tailored solutions across diverse industries to
                  drive growth and innovation.
                </p>
              </div>

              {/* Carousel Features */}
              <div className="relative">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  spaceBetween={16}
                  slidesPerView={1}
                  loop={true}
                  speed={3000}
                  autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                  }}
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  breakpoints={{
                    640: { slidesPerView: 1, spaceBetween: 16 },
                    768: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 24 },
                  }}
                >
                  {Array.isArray(industries) &&
                    industries.map((industry, index) => (
                      <SwiperSlide
                        key={index}
                        className="px-3 flex justify-center"
                      >
                        <div
                          className={`bg-[#ebeeee] rounded-3xl p-6 flex flex-col justify-between hover:bg-[#ecf86e] transition-colors duration-300 w-full max-w-[393px] h-[378px]`}
                          data-aos="fade-up"
                          data-aos-delay={index * 100}
                        >
                          {/* Title with Icon */}
                          <a
                            href={`/industries/${industry.seo_name}`}
                            className="flex items-center gap-3 text-[#043c33] font-geist text-[24px] font-extrabold mb-4 hover:text-[#085c44]"
                          >
                            {/* <span className="flex items-center justify-center">
                              {industry.icon && <industry.icon size={28} />}
                            </span> */}
                            <span className="leading-none">
                              {industry.name}
                            </span>
                          </a>

                          {/* Description and Action */}
                          <div className="flex-1 flex flex-col justify-between mt-[35px]">
                            <a
                              href={`/industries/${industry.seo_name}`}
                              className="hover:text-[#085c44]"
                            >
                              <p className="text-[#085c44] text-[18px] sm:text-base mb-6">
                                {industry.descr}
                              </p>
                            </a>
                            <div>
                              <div className="w-full h-[1px] bg-[#cccc] my-4"></div>
                              <a
                                href={`/industries/${industry.seo_name}`}
                                className="inline-block bg-[#085c44] rounded-full p-3 transition"
                              >
                                <img
                                  src="https://cdn.prod.website-files.com/66a1ffb90a9a7d95f6b2c522/66a8dfd1b0ab2e60140439cc_plus.svg"
                                  alt="plus icon"
                                  className="w-7 h-7 sm:w-6 sm:h-6"
                                  loading="lazy"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            </div>
          </section>
          {/* Industry Section Ends */}
        </div>
        {/* Card Setup Section Starts */}

        <section
          ref={fadeRef}
          className={`container mx-auto px-4 pb-[130px] py-10 fade-up ${
            fadeVisible ? "visible" : ""
          }`}
        >
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
            <div
              onClick={handleClick}
              className="col-span-1 lg:col-span-3 bg-[#ECF86E] px-6 py-8 text-start rounded-3xl flex flex-col cursor-pointer hover:scale-[1.01] transition-transform duration-300"
            >
              <h1 className="text-[#043c33] font-geist font-bold text-[30px] md:text-[50px] xl:text-[70px] leading-tight">
                Payment Gateway
              </h1>
              <p className="text-[#085c44] font-geist text-[20px] md:text-[25px] mb-auto">
                Let’s finish your card setup!
              </p>

              <div className="mt-10" />

              <p className="font-bold font-geist text-[#043c33] mb-2 text-[18px] md:text-[40px]">
                {progress}%
              </p>

              <div className="w-full bg-[#bfd866] rounded-full h-6 overflow-hidden">
                <div
                  className="bg-[#043c33] h-full rounded-full transition-all duration-500 ease-in-out"
                  style={{ width: `${progress}%` }}
                />
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
                    <span className="font-bold text-base sm:text-xl">
                      {text}
                    </span>
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
            <div className="col-span-1 lg:col-span-6 bg-[#ebeeee] p-6 sm:p-[50px] rounded-3xl text-[#043c33] relative">
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
            </div>
          </div>
        </section>
        {/* Card Setup Section Ends */}
        <Review />
        <Elevate />
      </div>
    </>
  );
};
export default Home;
