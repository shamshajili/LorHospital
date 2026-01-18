import { useState } from 'react'
import { articles } from '../../data/articles'
import ArticleCard from '../ArticleCard'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

const ArticlesCarousel = () => {
  const itemsPerPage = 4
  const totalPages = Math.ceil(articles.length / itemsPerPage)

  const [currentPage, setCurrentPage] = useState(0)

  const next = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1)
    }
  }

  const prev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1)
    }
  }

  const visibleArticles = articles.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  )

  return (
    <section className="w-full bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 py-16">

        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-semibold text-[#3A3A3A]">
            Faydalı Məlumatlar
          </h2>

          <div className="flex gap-3">
            <button
              onClick={prev}
              disabled={currentPage === 0}
              className="w-10 h-10 bg-[#0095DA] rounded-full border border-[#0F0F0F29]
               flex items-center justify-center
               text-white hover:bg-white hover:text-[#0095DA]
               transition"
            >
              <FiArrowLeft />
            </button>

            <button
              onClick={next}
              disabled={currentPage === totalPages - 1}
              className="w-10 h-10 bg-[#0095DA] rounded-full border border-[#0F0F0F29]
               flex items-center justify-center
               text-white hover:bg-white hover:text-[#0095DA]
               transition"
            >
              <FiArrowRight />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default ArticlesCarousel
