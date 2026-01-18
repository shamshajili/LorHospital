import { useState } from "react";
import { articles } from "../../data/articles";
import ArticleCard from "../ArticleCard";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const ArticlesCarousel = () => {
  const itemsPerPageDesktop = 4;
  const totalPages = Math.ceil(articles.length / itemsPerPageDesktop);

  const [currentPage, setCurrentPage] = useState(0);
  const [currentIndexMobile, setCurrentIndexMobile] = useState(0);

  /* ===== DESKTOP ===== */
  const nextDesktop = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevDesktop = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const visibleDesktopArticles = articles.slice(
    currentPage * itemsPerPageDesktop,
    (currentPage + 1) * itemsPerPageDesktop
  );

  /* ===== MOBILE ===== */
  const nextMobile = () => {
    setCurrentIndexMobile((prev) => (prev + 1) % articles.length);
  };

  const prevMobile = () => {
    setCurrentIndexMobile((prev) => (prev - 1 + articles.length) % articles.length);
  };

  return (
    <section className="w-full bg-[#F5F5F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-0 sm:px-4 py-12 sm:py-16">

        <div className="flex items-center justify-between mb-10 px-4 sm:px-0">
          <h2 className="text-3xl font-semibold text-[#3A3A3A]">
            Faydalı Məlumatlar
          </h2>
          {/* desktop */}
          <div className="flex gap-3">
            <button
              onClick={prevDesktop}
              className="hidden sm:flex w-10 h-10 bg-[#0095DA] rounded-full
              items-center justify-center text-white hover:bg-white hover:text-[#0095DA]
              transition disabled:opacity-40"
              disabled={currentPage === 0}
            >
              <FiArrowLeft />
            </button>

            <button
              onClick={nextDesktop}
              className="hidden sm:flex w-10 h-10 bg-[#0095DA] rounded-full
              items-center justify-center text-white hover:bg-white hover:text-[#0095DA]
              transition disabled:opacity-40"
              disabled={currentPage === totalPages - 1}
            >
              <FiArrowRight />
            </button>
               {/* mobile */}
            <button
              onClick={prevMobile}
              className="flex sm:hidden w-10 h-10 bg-[#0095DA] rounded-full
              items-center justify-center text-white"
            >
              <FiArrowLeft />
            </button>

            <button
              onClick={nextMobile}
              className="flex sm:hidden w-10 h-10 bg-[#0095DA] rounded-full
              items-center justify-center text-white"
            >
              <FiArrowRight />
            </button>
          </div>
        </div>

        {/* mobile */}
        <div className="block sm:hidden overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndexMobile * 100}%)`,
            }}
          >
            {articles.map((article) => (
              <div key={article.id} className="min-w-full flex justify-center px-4">
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
        </div>

        {/* desktop */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-0">
          {visibleDesktopArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ArticlesCarousel;
