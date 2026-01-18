import { FaStar, FaQuoteRight } from 'react-icons/fa'

const ReviewCard = ({ review }) => {
  const { name, avatar, rating, comment } = review

  return (
    <div className="bg-[#F9F9F9] rounded-xl p-6 shadow-sm relative">
      
      <div className="absolute top-4 right-4  text-[#0FB3FF]">
        <FaQuoteRight size={20} />
      </div>

      <div className="flex items-center gap-4 mb-4">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div>
          <h4 className="font-semibold text-[#3F3F3F]">
            {name}
          </h4>

          <div className="flex gap-1 mt-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar
                key={index}
                size={14}
                className={
                  index < rating
                    ? 'text-[#0FB3FF]'
                    : 'text-gray-300'
                }
              />
            ))}
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-600 leading-relaxed">
        {comment}
      </p>

    </div>
  )
}

export default ReviewCard
