import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Review from "../Common/Review.jsx";
import Elevate from "../Common/Elevate.jsx";

function Teamsection() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      easing: "ease-in-out",
      once: true, // animate only once
    });
  }, []);

  const teamMembers = [
    {
      name: "Esther Howard",
      role: "CEO & Founder",
      img: "https://cdn.prod.website-files.com/66a1ffb90a9a7d95f6b2c522/66a1ffb90a9a7d95f6b2c78a_Member-Photo-Close-up-14.avif",
    },
    {
      name: "Leslie Alexander",
      role: "Office Director",
      img: "https://cdn.prod.website-files.com/66a1ffb90a9a7d95f6b2c522/66a1ffb90a9a7d95f6b2c7a4_Member-Photo-Close-up.avif",
    },
    {
      name: "Savannah Nguyen",
      role: "Sales Manager",
      img: "https://cdn.prod.website-files.com/66a1ffb90a9a7d95f6b2c522/66a1ffb90a9a7d95f6b2c7a1_Member-Photo-Close-up-5.avif",
    },
    {
      name: "Albert Flores",
      role: "Consultant",
      img: "https://cdn.prod.website-files.com/66a1ffb90a9a7d95f6b2c522/66a1ffb90a9a7d95f6b2c79d_Member-Photo-Close-up-7.avif",
    },
    {
      name: "Bessie Cooper",
      role: "Developer",
      img: "https://cdn.prod.website-files.com/66a1ffb90a9a7d95f6b2c522/66a1ffb90a9a7d95f6b2c7a2_Member-Photo-Close-up-2.avif",
    },
  ];

  return (
    <>
      <div className="py-[130px]" data-aos="fade-up">
        <div className="container mx-auto px-[15px]">
          <div className="text-center">
            <h2 className="text-[50px] font-geist font-extrabold text-[#043c33]">
              Meet Our Amazing Team
            </h2>
            <p className="max-w-[750px] mx-auto text-[#0b5e46] text-[24px] mt-[20px] mb-[50px]">
              Meet the Dream Team: The Brains and Brawn Behind Our Brand.
              Collaboration, Innovation, and Excellence: Our Team in Action
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-30">
            {teamMembers.map(({ name, role, img }) => (
              <div key={name} className="flex flex-col items-center max-w-xs">
                <div className="w-50 h-50 rounded-full overflow-hidden mb-4">
                  <img
                    loading="lazy"
                    src={img}
                    alt={`${name} photo`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h6 className="font-extrabold font-geist text-[#043c33] text-xl">
                    {name}
                  </h6>
                  <p className="text-[#0b5e46] text-[24px] font-geist">
                    {role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div data-aos="fade-up">
        <Review />
      </div>
      <Elevate />
    </>
  );
}

export default Teamsection;
