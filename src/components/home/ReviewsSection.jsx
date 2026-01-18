import { useState } from "react";
import { reviews } from "../../data/reviews";
import ReviewCard from "../ReviewCard";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = reviews.length;

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const visibleReviews = [
    reviews[currentIndex],
    reviews[(currentIndex + 1) % total],
    reviews[(currentIndex + 2) % total],
  ];

  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-0 sm:px-4 py-16 sm:py-20">

        <div className="flex items-center justify-between mb-12 px-4 sm:px-0">
          <h2 className="text-3xl font-bold text-[#434343]">
            Pasiyent məmnunluğu
          </h2>

          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border
              flex items-center justify-center
              hover:bg-[#0095DA] hover:text-white transition"
            >
              <FiArrowLeft />
            </button>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border
              flex items-center justify-center
              hover:bg-[#0095DA] hover:text-white transition"
            >
              <FiArrowRight />
            </button>
          </div>
        </div>

        {/* mobile */}
        <div className="block md:hidden overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="min-w-full flex justify-center px-4"
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>

        {/* desktop */}
        <div className="hidden md:grid grid-cols-3 gap-6 px-4 sm:px-0">
          {visibleReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ReviewsSection;
