import { useEffect, useState } from "react";
import axios from "axios";
const Industries = () => {
  const [industries, setIndustries] = useState([]);
  useEffect(() => {
    getIndustries();
  }, []);
  function getIndustries() {
    axios.get("https://demo.trubizmedia.com/api/industries").then(function (response) {
      setIndustries(response.data.industries);
    });
  }
  return (
    <>
      <section className="pt-[100px]">
        <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden">
          <img
            src="https://images.pexels.com/photos/5077045/pexels-photo-5077045.jpeg"
            alt="Industry background"
            className="absolute inset-0 w-full h-full object-cover animate-zoomSlow"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[#085c4466]"></div>
          <div className="relative z-10 flex justify-center items-center h-full uppercase">
            <h1 className="text-white font-geist font-extrabold animate-zoomInText text-[40px] sm:text-[55px] md:text-[70px] leading-tight">
              Industries
            </h1>
          </div>
        </div>
      </section>
      {/* Industries Section */}
      <section className="py-[130px] px-[15px] mx-auto">
        <header className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-[55px] font-bold mb-4 text-[#043c33]">
            Industries We Serve
          </h2>
          <p className="text-lg text-[#186750]">
            Providing tailored solutions across diverse industries to drive
            growth and innovation.
          </p>
        </header>

        {/* Feature Cards */}
        <div
          className="grid justify-center gap-8 max-w-7xl mx-auto"
          style={{ gridTemplateColumns: "repeat(auto-fit, 393px)" }}
        >
          {Array.isArray(industries) &&
            industries.map((industry, index) => (
              <div
                key={index}
                className={`p-6 rounded-3xl bg-[#ebeeee] flex flex-col justify-between hover:bg-[#ecf86e] transition-colors duration-300`}
                style={{ width: "393px", height: "378px" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  {/* {industry.icon} */}
                  <a href={`/industries/${industry.seo_name}`} className="">
                    <h3 className="text-2xl font-geist font-extrabold text-[#043c33]">
                      {industry.name}
                    </h3>
                  </a>
                </div>

                <a
                  href={`/industries/${industry.seo_name}`}
                  className="block hover:text-[#085c44] transition-colors"
                >
                  <p className={`text-[#186750] font-geist mb-4`}>
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
            ))}
        </div>
      </section>
    </>
  );
};
export default Industries;
