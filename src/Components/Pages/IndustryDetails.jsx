import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

function IndustryDetails() {
  const { industryName } = useParams(); // dynamic URL param
  const [industry, setIndustry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showFullDesc, setShowFullDesc] = useState(false);

  useEffect(() => {
    AOS.init({ once: true });

    // Fetch service from API
    axios
      .get(`http://localhost:80/api/index.php?ind_seo_name=${industryName}`)
      .then((res) => {
        console.log("API Response:", res.data); // debug
        setIndustry(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching service:", err);
        setLoading(false);
      });
  }, [industryName]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!industry) return <p className="text-center mt-10">No data found.</p>;

  // Max chars before truncation
  const maxChars = 300;
  // const isLongDescription = industry.descr.length > maxChars;
  const { name, descr, image } = industry;
  return (
    <>
      {/* Hero Section */}
      <div className="pt-[100px]">
        <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] overflow-hidden">
          <img
            src="https://cdn.prod.website-files.com/66a1ffb90a9a7d95f6b2c522/66ace77988acd68fbd82338e_Vector.avif"
            alt="Support Background"
            className="absolute bottom-0 left-0 w-full h-[700px] object-cover object-bottom animate-zoomSlow"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[#085c4466]"></div>
          <div className="relative z-10 flex justify-center items-center h-full uppercase">
            <h1 className="text-white font-geist font-extrabold animate-zoomInText text-[40px] sm:text-[55px] md:text-[70px] leading-tight">
              {name}
            </h1>
          </div>
        </div>
      </div>

      {/* Feature Section 1 */}
      <section
        className=" py-24 px-6 md:px-16 rounded-xl mx-auto flex flex-col items-center gap-12"
        data-aos="fade-up"
      >
        {/* Text Content on Top */}
        <div className="w-full max-w-7xl space-y-6 text-center md:text-left">
          <h2 className="text-5xl font-geist font-extrabold text-[#0a4c39] tracking-tight drop-shadow-md">
            {name}
          </h2>

          <p className="text-[#085c44] font-geist text-lg leading-relaxed text-justify">
            {descr}
            {/* {showFullDesc
              ? industry.descr
              : industry.descr.slice(0, maxChars) +
                (isLongDescription ? "..." : "")} */}
          </p>

          {/* {isLongDescription && ( */}
          <button
            onClick={() => setShowFullDesc(!showFullDesc)}
            className="mt-2 text-sm text-[#0a4c39] font-semibold hover:underline"
            aria-label={
              showFullDesc ? "Show less description" : "Read more description"
            }
          >
            {showFullDesc ? "Show Less" : "Read More"}
          </button>
          {/* )} */}
        </div>

        {/* Image Content Below */}
        <div className="w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden relative group cursor-pointer">
          <img
            src={
              `/../assets/${image}` ||
              "https://static.vecteezy.com/system/resources/previews/004/639/366/non_2x/error-404-not-found-text-design-vector.jpg"
            }
            alt="Pharma Education"
            className="w-full h-auto object-cover rounded-2xl"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
        </div>
      </section>
    </>
  );
}

export default IndustryDetails;
