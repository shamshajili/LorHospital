import heroImage from "../../assets/hero.jpg";
import arrowIcon from "../../assets/arrowoutward.png";
import wpIcon from "../../assets/vp.png";
import phoneIcon from "../../assets/phone.png";

const Hero = () => {
  return (
    <section
      className="
        w-full bg-cover bg-[right_90%] sm:bg-[right_95%] md:bg-center
      "
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="relative max-w-7xl mx-auto px-4 py-10 sm:py-20 md:py-24">
        <div className="max-w-xl">
          <h1
            className="
            text-2xl sm:text-3xl md:text-4xl
            font-semibold
            text-[#464646]
            leading-snug md:leading-tight
          "
          >
            İxtisaslaşmış Tibbi <br />
            Xidmətin Tək Ünvanı!
          </h1>

          {/* Button */}
          <button
            className="
              mt-6 sm:mt-8
              inline-flex items-center gap-2
              px-3 py-2 sm:px-4 sm:py-2.5
              rounded-full
              text-xs sm:text-sm
              font-medium text-white
              bg-gradient-to-r from-[#14B0F9] to-[#0197DC]
              hover:opacity-90 transition
            "
          >
            Bütün xidmətlər
            <span
              className="
              flex items-center justify-center
              w-5 h-5 sm:w-6 sm:h-6
              rounded-full bg-[#0FB3FF8C]
            "
            >
              <img src={arrowIcon} alt="Arrow" className="w-2 h-2" />
            </span>
          </button>
        </div>

        {/* contact icons */}
        <div
          className="
            absolute
            right-2 sm:right-4 md:right-6
            top-[60%] sm:top-1/2
            -translate-y-1/2
            flex flex-col gap-2
          "
        >
          <button
            className="
            w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10
            rounded-full bg-[#84D84C]
            flex items-center justify-center
            shadow-lg hover:scale-105 transition
          "
          >
            <img
              src={wpIcon}
              alt="WhatsApp"
              className="w-3 h-3 sm:w-4 sm:h-4"
            />
          </button>

          <button
            className="
            w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10
            rounded-full bg-[#00AFF0]
            flex items-center justify-center
            shadow-lg hover:scale-105 transition
          "
          >
            <img
              src={phoneIcon}
              alt="Phone"
              className="w-3 h-3 sm:w-4 sm:h-4"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
