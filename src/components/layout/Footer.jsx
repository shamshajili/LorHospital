import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiArrowRight,
  FiChevronUp,
} from "react-icons/fi";

import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0A94D6] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center md:text-left">

          {/* Logo & Social */}
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="Lor Hospital" className="w-36 md:w-40 mb-6" />

            <p className="text-sm leading-relaxed mb-6">
              Qafqazın ilk və yeganə
              <br />
              <span className="font-semibold">
                Qulaq Burun Boğaz və
                <br />
                Baş-Boyun Mərkəzi!
              </span>
            </p>

            <div className="flex gap-3 justify-center md:justify-start">
              <SocialIcon icon={<FaFacebookF />} />
              <SocialIcon icon={<FaInstagram />} />
              <SocialIcon icon={<FaYoutube />} />
              <SocialIcon icon={<FaWhatsapp />} />
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6">ƏLAQƏ</h4>

            <ul className="space-y-4 text-sm flex flex-col items-center md:items-start">
              <li className="flex items-center gap-3">
                <FiPhone /> *0111
              </li>
              <li className="flex items-center gap-3">
                <FiMail /> info@lorhospital.az
              </li>
              <li className="flex items-start gap-3 text-center md:text-left">
                <FiMapPin className="mt-1" />
                Bakı ş., Nərimanov r., Əhməd Rəcəbli 19K, AZ1075
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold mb-6">ABUNƏ OLUN</h4>

            <ul className="space-y-4 text-sm mb-6">
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <FaFacebookF />
                <span>Lor Hospital</span>
              </li>

              <li className="flex items-center gap-2 justify-center md:justify-start">
                <FaInstagram />
                <span>Lor Hospital</span>
              </li>
            </ul>

            <div className="relative w-full max-w-xs">
              <input
                type="text"
                placeholder="Sualınız var?"
                className="w-full rounded-full bg-transparent border border-white
                           px-5 py-3 placeholder-white/80 text-sm"
              />
              <button
                className="absolute right-1 top-1/2 -translate-y-1/2
                           w-10 h-10 rounded-full bg-white text-[#0A94D6]
                           flex items-center justify-center"
              >
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/30 my-10 md:my-12" />

        {/* Scroll to top */}
        <div className="flex justify-center md:justify-end">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-white
                       flex items-center justify-center"
          >
            <FiChevronUp />
          </button>
        </div>
      </div>
    </footer>
  );
};


const SocialIcon = ({ icon }) => (
  <div
    className="w-10 h-10 rounded-full bg-white text-[#0A94D6]
                  flex items-center justify-center cursor-pointer"
  >
    {icon}
  </div>
);

export default Footer;
