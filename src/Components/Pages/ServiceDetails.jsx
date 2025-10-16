import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

function ServiceDetails() {
  const { serviceName } = useParams(); // dynamic URL param
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ once: true });

    // Fetch service from API
    axios
      .get(`https://demo.trubizmedia.com/api/index.php?seo_name=${serviceName}`)
      .then((res) => {
        console.log("API Response:", res.data); // debug
        setService(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching service:", err);
        setLoading(false);
      });
  }, [serviceName]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!service || service.status === 0)
    return <p className="text-center mt-10">Service not found</p>;

  const { name, descr, image } = service;
  const features = Array.isArray(service?.features)
    ? service.features
    : typeof service?.features === "string"
    ? service.features.split(",") // convert CSV string → array
    : [];
  return (
    <div className="pt-[100px]">
      {/* Header Section */}
      <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] overflow-hidden">
        <img
          src={
            `/../assets/${image}` ||
            "https://static.vecteezy.com/system/resources/previews/004/639/366/non_2x/error-404-not-found-text-design-vector.jpg"
          }
          alt={name}
          className="absolute bottom-0 left-0 w-full h-full object-cover object-bottom animate-zoomSlow"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#085c4466]"></div>
        <div className="relative z-10 flex justify-center items-center h-full uppercase">
          <h1 className="text-white font-geist font-extrabold animate-zoomInText text-[40px] sm:text-[55px] md:text-[70px] leading-tight">
            {name}
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <section className="pt-[80px] pb-[100px]">
        <div
          className="container mx-auto px-4 max-w-6xl"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-5xl text-[#043c33] font-bold text-center font-geist mb-6">
            {name}
          </h2>
          <p className="text-lg text-center text-[#085c44] leading-relaxed mb-8">
            {descr}
          </p>

          {image && (
            <img
              src={`/../assets/${image}`}
              alt={name}
              className="rounded-3xl w-full max-h-[600px] object-cover mb-10"
              loading="lazy"
              data-aos="zoom-in"
              data-aos-duration="800"
            />
          )}

          {/* Features Section */}
          {features.length > 0 && (
            <>
              <h3
                className="text-4xl font-geist font-bold text-left text-[#043c33] mb-6 mt-6"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Key Features
              </h3>
              <div
                className="space-y-8 font-geist text-[#085c44] text-base leading-relaxed"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {service?.features && (
                  <div
                    className="prose max-w-none text-[#085c44] font-geist"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    dangerouslySetInnerHTML={{ __html: service.features }}
                  />
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

export default ServiceDetails;
