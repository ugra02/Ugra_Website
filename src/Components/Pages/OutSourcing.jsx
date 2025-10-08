import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBriefcase, FaProjectDiagram, FaDollarSign } from "react-icons/fa";
const OutSourcing = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="pt-[100px]">
        <div className="relative w-full h-[350px] overflow-hidden">
          <img
            src="https://images.pexels.com/photos/5077045/pexels-photo-5077045.jpeg"
            alt="Support Background"
            className="absolute inset-0 w-full h-full object-cover animate-zoomSlow"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[#085c4466]"></div>
          <div className="relative z-10 flex justify-center items-center h-full uppercase">
            <h1 className="text-white font-geist text-[70px] font-extrabold animate-zoomInText sm:text-[50px] md:text-[70px] lg:text-[70px]">
              Outsourcing
            </h1>
          </div>
        </div>
      </div>
      <section className="relative py-[80px] bg-white overflow-hidden">
        <div className="container mx-auto px-4 lg:px-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            {/* LEFT CONTENT */}
            <div data-aos="fade-right">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#043c33] mb-6 leading-tight font-geist">
                Outsource Smarter with Ugra
              </h2>
              <p className="text-lg text-[#085c44] mb-8 leading-relaxed">
                In a rapidly evolving digital economy, businesses need reliable
                outsourcing partners. Ugra delivers excellence through
                innovation, expertise, and efficiency.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Advanced Technologies",
                    desc: "From AI to cloud access cutting-edge tools without the in-house cost.",
                  },
                  {
                    title: "Scalable Workforce",
                    desc: "Quickly scale up with highly skilled teams across domains and time zones.",
                  },
                  {
                    title: "Operational Efficiency",
                    desc: "Reduce operational load and focus on business growth while we manage execution.",
                  },
                ].map((item, idx) => (
                  <div className="flex items-start gap-4" key={idx}>
                    <div className="w-10 h-10 bg-[#085c44] text-white rounded-full flex items-center justify-center text-xl font-bold shadow-md">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-[#043c33]">
                        {item.title}
                      </h4>
                      <p className="text-[#085c44] text-base">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative" data-aos="zoom-in">
              <div className="bg-[#f6fefc] rounded-3xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300 ease-in-out">
                <img
                  src="https://cdn.prod.website-files.com/666c164de03583e77cb9f55a/666c2d9b3027a7d2c353328a_5f88153da274b542c53b1c48_Advantages-Of-Outsourcing-Web-Development.jpeg"
                  alt="Outsourcing Illustration"
                  className="object-cover w-full h-[400px]"
                />
              </div>
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#baf0e3] rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#d1f5ec] rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="bg-[#f5fff7] py-20 px-4" data-aos="fade-up">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#043c33] font-geist mb-10">
            Why Choose UGRA for Outsourcing?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Domain Expertise",
                description:
                  "UGRA’s experienced professionals bring deep knowledge in IT, customer service, marketing, and more—tailored to your business needs.",
                icon: <FaBriefcase size={32} className="text-[#085C44]" />,
              },
              {
                title: "End-to-End Support",
                description:
                  "From onboarding to project delivery, we ensure smooth communication, clear milestones, and measurable outcomes every step of the way.",
                icon: <FaProjectDiagram size={32} className="text-[#085C44]" />,
              },
              {
                title: "Cost Optimization",
                description:
                  "We help reduce operational costs while improving performance, thanks to our efficient delivery models and resource flexibility.",
                icon: <FaDollarSign size={32} className="text-[#085C44]" />,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md border border-[#d4f5e5] transition-transform hover:scale-[1.02]"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-xl font-semibold text-[#043c33] mb-2">
                  {item.title}
                </h4>
                <p className="text-[#085c44] text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default OutSourcing;
