import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";

const Features = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          <div className="  flex items-center gap-4  md:justify-center md:text-center  p-4 md:p-0  rounded-xl md:rounded-none  bg-[#F9FAFB] md:bg-transparent">
            <div className="  w-10 h-10 md:w-12 md:h-12  rounded-lg md:rounded-none  bg-[#EAF6FF] md:bg-transparent  flex items-center justify-center">
              <img src={icon3} alt="" className="w-5 h-5 md:w-12 md:h-12" />
            </div>

            <p className="text-[#3F3F3F] text-sm leading-snug">
              <span className="font-semibold block">Qafqazın ilk və tək</span>
              ixtisaslaşmış mərkəzi
            </p>
          </div>

          <div className="  flex items-center gap-4  md:justify-center md:text-center  p-4 md:p-0  rounded-xl md:rounded-none  bg-[#F9FAFB] md:bg-transparent">
            <div className="  w-10 h-10 md:w-12 md:h-12  rounded-lg md:rounded-none  bg-[#EAF6FF] md:bg-transparent  flex items-center justify-center">
              <img src={icon1} alt="" className="w-5 h-5 md:w-12 md:h-12" />
            </div>

            <p className="text-[#3F3F3F] text-sm leading-snug">
              <span className="font-semibold block">12 illik+</span>
              təcrübə
            </p>
          </div>

          <div className="  flex items-center gap-4  md:justify-center md:text-center  p-4 md:p-0  rounded-xl md:rounded-none  bg-[#F9FAFB] md:bg-transparent">
            <div className="  w-10 h-10 md:w-12 md:h-12  rounded-lg md:rounded-none  bg-[#EAF6FF] md:bg-transparent  flex items-center justify-center">
              <img src={icon2} alt="" className="w-5 h-5 md:w-12 md:h-12" />
            </div>

            <p className="text-[#3F3F3F] text-sm leading-snug">
              <span className="font-semibold block">Pasiyent</span>
              yönümlü xidmət
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
