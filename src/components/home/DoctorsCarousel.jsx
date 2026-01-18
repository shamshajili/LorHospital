import { useState } from "react";
import { doctors } from "../../data/doctors";
import DoctorCard from "../DoctorCard";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const DoctorsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const total = doctors.length;

  const next = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const visibleDoctors = [
    doctors[currentIndex],
    doctors[(currentIndex + 1) % total],
    doctors[(currentIndex + 2) % total],
  ];

  return (
    <section className="w-full bg-[#0FB3FF] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-white text-3xl md:text-4xl font-semibold">
            Həkimlər
          </h2>

          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white
              flex items-center justify-center
              text-white hover:bg-white hover:text-[#0FB3FF]
              transition"
            >
              <FiArrowLeft size={20} />
            </button>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white
              flex items-center justify-center
              text-white hover:bg-white hover:text-[#0FB3FF]
              transition"
            >
              <FiArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div
          className={`grid gap-6
          grid-cols-1 sm:grid-cols-3 md:grid-cols-3
          transition-all duration-500 ease-in-out
          ${
            direction === "right"
              ? "animate-slide-right"
              : "animate-slide-left"
          }`}
        >
          {visibleDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsCarousel;
