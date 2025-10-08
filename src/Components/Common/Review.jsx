import { useState, useEffect } from "react";

const reviews = [
  {
    id: 1,
    name: "Michele Dodron",
    title: "CEO of YX Agency",
    photo:
      "https://cdn.prod.website-files.com/66a1ffb90a9a7d95f6b2c522/66a1ffb90a9a7d95f6b2c7a3_Member-Photo-Close-up-6.avif",
    quote:
      "Partnering with Trustly has been a game-changer for us. Their commitment to innovation and excellence aligns perfectly with our values, allowing us to provide top-notch services to our clients.",
  },
  {
    id: 2,
    name: "Jane Doe",
    title: "Chief Financial Officer",
    photo:
      "https://cdn.prod.website-files.com/66a1ffb90a9a7d95f6b2c522/66a1ffb90a9a7d95f6b2c7a4_Member-Photo-Close-up.avif",
    quote:
      "Working with Trustly has been an incredible experience. Their seamless integration and advanced technology have revolutionized our payment systems. We couldn't be happier with this partnership.",
  },
  {
    id: 3,
    name: "John Smith",
    title: "Head of Operations",
    photo:
      "https://cdn.prod.website-files.com/66a1ffb90a9a7d95f6b2c522/66a1ffb90a9a7d95f6b2c78d_Member-Photo-Close-up-15.avif",
    quote:
      "The Trustly team is proactive and always ready to assist with any challenges we face. This partnership has been crucial in helping us maintain our competitive edge in the market.",
  },
];

export default function ReviewsSlider() {
  const [current, setCurrent] = useState(0);
  const length = reviews.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [current]);

  const { name, title, photo, quote } = reviews[current];

  return (
    <section className="container mx-auto px-4 py-12 md:pb-[130px] max-w-8xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Col 1 */}
        <div
          key={current}
          className="md:col-span-1 flex flex-col items-center md:items-start bg-[#ebeeee] rounded-3xl p-6 w-full max-w-md mx-auto md:mx-0"
        >
          <h2 className="text-2xl md:text-3xl font-geist font-semibold mb-12 md:mb-20 text-[#085c44] text-center md:text-left">
            What our customers say
          </h2>

          <div className="flex items-center space-x-4 mb-6">
            <img
              src={photo}
              alt={`${name} photo`}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
              loading="lazy"
            />
            <div className="text-left">
              <p className="font-semibold font-geist text-lg text-[#043c33]">
                {name}
              </p>
              <p className="text-[#26705b] font-geist">{title}</p>
            </div>
          </div>

          <div className="flex space-x-6">
            <button
              onClick={prevSlide}
              aria-label="Previous Review"
              className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full hover:bg-[#ECF86E] transition flex items-center justify-center"
            >
              <img
                src="https://cdn.prod.website-files.com/66a1ffb90a9a7d95f6b2c522/66a79169e00e6d8d2d929679_arrow-right%20(1).svg"
                alt="Previous"
                className="w-6 h-6 md:w-8 md:h-8 transform rotate-180"
                loading="lazy"
              />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next Review"
              className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full hover:bg-[#ECF86E] transition flex items-center justify-center"
            >
              <img
                src="https://cdn.prod.website-files.com/66a1ffb90a9a7d95f6b2c522/66a79169e00e6d8d2d929679_arrow-right%20(1).svg"
                alt="Next"
                className="w-6 h-6 md:w-8 md:h-8"
                loading="lazy"
              />
            </button>
          </div>
        </div>

        {/* Col 2 */}
        <div key={quote} className="md:col-span-2 px-4 md:px-0">
          <blockquote className="text-2xl md:text-4xl text-[#043c33] font-geist font-bold leading-relaxed md:leading-normal">
            <span className="text-[#085c44] text-3xl md:text-4xl align-top mr-2">
              “
            </span>
            {quote}
            <span className="text-[#085c44] text-3xl md:text-4xl align-bottom ml-2">
              ”
            </span>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
