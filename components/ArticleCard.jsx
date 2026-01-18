const ArticleCard = ({ article }) => {
  const { image, category, date } = article

 {
    return (
      <div className="bg-white rounded-xl overflow-hidden shadow-sm">
      <img
        src={image}
        className="w-full h-55 object-cover"
      />

      <div className="p-4">
        <span className="text-s text-[#606060] block">
          {date}
        </span>

        <h3 className="text-base font-semibold text-gray-800 mt-1">
        </h3>

        <p className="text-lg font-bold text-[#303030] mt-1">
          {category}
        </p>

        <button className="text-sm font-semibold text-[#00AEEF] mt-3">
          Ətraflı →
        </button>
      </div>
    </div>
    )
  }

}

export default ArticleCard
