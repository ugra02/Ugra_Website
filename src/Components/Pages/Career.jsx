import React, { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import careerimg from "../../assets/careerimg.jpeg";

const Career = () => {
  const [jobpost, setJobpost] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    cv: null,
    message: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:80/api/jobpost")
      .then((res) => {
        setJobpost(res.data.jobpost || []);
        if (res.data.jobpost && res.data.jobpost.length > 0) {
          setSelectedJob(res.data.jobpost[0]);
          setFormData((prev) => ({
            ...prev,
            subject: res.data.jobpost[0].title,
          }));
        }
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (selectedJob) {
      setAnimate(true);
      setFormData((prev) => ({ ...prev, subject: selectedJob.title }));
      const timer = setTimeout(() => setAnimate(false), 300);
      return () => clearTimeout(timer);
    }
  }, [selectedJob]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setUploadProgress(0);

    const data = new FormData();
    data.append("job_title", formData.subject);
    data.append("form_type", "application");
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("subject", formData.subject);
    data.append("message", formData.message);
    data.append("cv", formData.cv);

    try {
      const response = await axios.post(
        "http://localhost:80/api/application.php",
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(percentCompleted);
          },
        }
      );

      const result = response.data;

      if (result.status === "success") {
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: selectedJob?.title || "",
          message: "",
          cv: null,
        });

        setTimeout(() => {
          setShowModal(false);
          setIsSuccess(false);
        }, 3000);
      } else {
        alert(result.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("There was an error submitting your application.");
    }

    setIsSubmitting(false);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="pt-[100px] relative w-full h-[350px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/5077045/pexels-photo-5077045.jpeg"
          alt="Career Background"
          className="absolute inset-0 w-full h-full object-cover animate-zoomSlow"
        />
        <div className="absolute inset-0 bg-[#085c4466]"></div>
        <div className="relative z-10 flex justify-center items-center h-full uppercase">
          <h1 className="text-white font-geist text-[70px] font-extrabold animate-zoomInText sm:text-[50px] md:text-[70px] lg:text-[70px]">
            Career
          </h1>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-[100px] px-[20px] bg-white">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10">
          <div
            className="lg:w-1/2 text-center lg:text-left"
            data-aos="fade-right"
          >
            <h2 className="text-4xl font-extrabold text-[#043c33] mb-4 font-geist">
              We Need Creative People for Creative Work
            </h2>
            <p className="text-base text-[#085C44] font-geist mb-4">
              UGRA is where creative minds thrive. We empower individuals to
              innovate, grow, and bring bold ideas to life.
            </p>
            <h4 className="text-2xl font-bold text-[#043c33] mt-6 mb-2 font-geist">
              Teamwork
            </h4>
            <p className="text-sm text-[#085C44] font-geist mb-4">
              Great ideas are born from collaboration. We value team-driven
              innovation and recognize every voice behind our success.
            </p>
            <h4 className="text-2xl font-bold text-[#043c33] mt-6 mb-2 font-geist">
              The Best Work Environment
            </h4>
            <p className="text-sm text-[#085C44] font-geist">
              UGRA fosters a supportive, inclusive workplace. A great
              environment inspires our teams to deliver their best work.
            </p>
          </div>

          <div className="lg:w-1/2" data-aos="zoom-in">
            <img
              src={careerimg}
              alt="career"
              className="w-full h-auto max-h-[500px] rounded-[20px] object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Job Tabs Section */}
      <section className="bg-[#f5fff7] py-20 px-6" data-aos="fade-up">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-extrabold text-[#043c33] font-geist mb-4">
              Explore Opportunities
            </h2>
            <p className="text-[#085C44] text-lg font-geist max-w-2xl mx-auto">
              Select a role to learn more and see where you fit in our growing
              team.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {Array.isArray(jobpost) &&
              jobpost.map((job, index) => (
                <button
                  key={job.id || index}
                  onClick={() => setSelectedJob(job)}
                  className={`px-6 py-2 rounded-full border font-geist transition-transform duration-300 ${
                    selectedJob?.id === job.id
                      ? "bg-[#085C44] text-white border-[#085C44] scale-110 shadow-lg"
                      : "border-[#baf0e3] text-[#043c33] hover:bg-[#d4f5e5] hover:scale-105"
                  }`}
                >
                  {job.title}
                </button>
              ))}
          </div>

          {selectedJob && (
            <div
              className={`bg-white rounded-3xl shadow-lg p-8 border border-[#d4f5e5] transition-all duration-500 ease-in-out ${
                animate
                  ? "opacity-0 translate-y-4"
                  : "opacity-100 translate-y-0"
              }`}
              key={selectedJob.id}
            >
              <h3 className="text-2xl font-bold text-[#043c33] font-geist mb-4">
                {selectedJob.title}
              </h3>
              <div className="text-[#085C44] font-geist leading-relaxed space-y-4 mb-6">
                <p>
                  <strong>Department:</strong> {selectedJob.department}
                </p>
                <p>
                  <strong>Description:</strong> {selectedJob.description}
                </p>
                <p>
                  <strong>Responsibilities:</strong>{" "}
                  {selectedJob.responsibilities}
                </p>
                <p>
                  <strong>Qualifications:</strong> {selectedJob.Qualifications}
                </p>
                <p>
                  <strong>Experience Required:</strong>{" "}
                  {selectedJob.experience_required}
                </p>
              </div>

              <button
                onClick={() => setShowModal(true)}
                className="bg-[#085C44] text-white font-geist px-6 py-3 rounded-lg hover:bg-[#063b2e] transition transform scale-100 hover:scale-105 duration-300"
              >
                Apply Now
              </button>
            </div>
          )}

          {/* Modal */}
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-lg relative transform scale-90 animate-modalShow">
                <button
                  onClick={() => {
                    setShowModal(false);
                    setIsSuccess(false);
                  }}
                  className="absolute top-3 right-4 text-xl font-bold text-[#043c33] hover:text-red-600"
                >
                  ×
                </button>

                <h3 className="text-2xl mb-6 font-bold text-[#043c33] font-geist">
                  Apply for {selectedJob?.title}
                </h3>

                {isSuccess ? (
                  <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-green-50 border border-green-500 animate-bounce">
                    <div className="text-green-600 text-5xl mb-2 animate-pulse">
                      ✔️
                    </div>
                    <h2 className="text-xl font-bold">
                      Application Submitted!
                    </h2>
                    <p className="text-gray-700">We will contact you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                      onChange={handleInputChange}
                      value={formData.name}
                      disabled={isSubmitting}
                      className="w-full px-4 py-2 border rounded"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      onChange={handleInputChange}
                      value={formData.email}
                      disabled={isSubmitting}
                      className="w-full px-4 py-2 border rounded"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      required
                      onChange={handleInputChange}
                      value={formData.phone}
                      disabled={isSubmitting}
                      className="w-full px-4 py-2 border rounded"
                    />
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      readOnly
                      className="w-full px-4 py-2 border rounded"
                    />
                    <input
                      type="file"
                      name="cv"
                      accept=".pdf,.doc,.docx"
                      required
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-2 border rounded"
                    />
                    {isSubmitting && (
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-[#085C44] h-2 rounded-full transition-all duration-500"
                          style={{ width: `${uploadProgress}%` }}
                        ></div>
                      </div>
                    )}
                    <textarea
                      name="message"
                      placeholder="Message"
                      rows="4"
                      onChange={handleInputChange}
                      value={formData.message}
                      disabled={isSubmitting}
                      className="w-full px-4 py-2 border rounded"
                    ></textarea>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full text-white px-6 py-2 rounded ${
                        isSubmitting
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-[#085C44] hover:bg-[#063b2e]"
                      } transition`}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        @keyframes modalShow {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-modalShow {
          animation: modalShow 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Career;
