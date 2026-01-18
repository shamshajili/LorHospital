import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'

const Features = () => {
  return (
    <section >
      <div className="max-w-7xl mx-auto px-4 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="flex items-center justify-center text-center gap-4">
            <img
              src={icon3}
              alt="Feature 1"
              className="w-12 h-12"
            />
            <p className="text-[#3F3F3F] text-sm leading-snug">
              <span className="font-semibold block">
                Qafqazın ilk və tək
              </span>
              ixtisaslaşmış mərkəzi
            </p>
          </div>

          <div className="flex items-center justify-center text-center gap-4">
            <img
              src={icon1}
              alt="Feature 1"
              className="w-12 h-12"
            />
            <p className="text-[#3F3F3F] text-sm leading-snug">
              <span className="font-semibold block">
                12 illik+
              </span>
              təcrübə
            </p>
          </div>

          <div className="flex items-center justify-center text-center gap-4">
            <img
              src={icon2}
              alt="Feature 3"
              className="w-12 h-12"
            />
            <p className="text-[#3F3F3F] text-sm leading-snug">
              <span className="font-semibold block">
                Pasiyent
              </span>
              yönümlü xidmət
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Features
