import heroImage from "../../assets/hero.jpg";
import arrowIcon from "../../assets/arrowoutward.png";
import wpIcon from "../../assets/vp.png";
import phoneIcon from "../../assets/phone.png";

const Hero = () => {
  return (
    <section
      className="w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#464646] leading-tight">
            İxtisaslaşmış Tibbi <br />
            Xidmətin Tək Ünvanı!
          </h1>

          {/* Button */}
          <button
            className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-medium
                       bg-gradient-to-r from-[#14B0F9] to-[#0197DC] hover:opacity-90 transition"
          >
            Bütün xidmətlər
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#0FB3FF8C]">
              <img src={arrowIcon} alt="Arrow" className="w-2 h-2" />
            </span>
          </button>
        </div>

        {/* contact icons */}
        <div className="absolute right-6 top-[100%]-translate-y-1/2 flex flex-col gap-2">
          <button className="w-10 h-10 rounded-full bg-[#84D84C] flex items-center justify-center shadow-lg hover:scale-105 transition">
            <img src={wpIcon} alt="WhatsApp" className="w-4 h-4" />
          </button>

          <button className="w-10 h-10 rounded-full bg-[#00AFF0] flex items-center justify-center shadow-lg hover:scale-105 transition">
            <img src={phoneIcon} alt="Phone" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
