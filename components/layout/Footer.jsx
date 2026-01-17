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
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <img src={logo} alt="Lor Hospital" className="w-40 mb-6" />

            <p className="text-sm leading-relaxed mb-6">
              Qafqazın ilk və yeganə
              <br />
              <span className="font-semibold">
                Qulaq Burun Boğaz və
                <br />
                Baş-Boyun Mərkəzi!
              </span>
            </p>

            <div className="flex gap-3">
              <SocialIcon icon={<FaFacebookF />} />
              <SocialIcon icon={<FaInstagram />} />
              <SocialIcon icon={<FaYoutube />} />
              <SocialIcon icon={<FaWhatsapp />} />
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6">ƏLAQƏ</h4>

            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <FiPhone /> *0111
              </li>
              <li className="flex items-center gap-3">
                <FiMail /> info@lorhospital.az
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-1" />
                Bakı ş., Nərimanov r., Əhməd Rəcəbli 19K, AZ1075
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">ABUNƏ OLUN</h4>

            <ul className="space-y-4 text-sm mb-6 ">
              <li className="flex items-center gap-2">
                <FaFacebookF />
                <span>Lor Hospital</span>
              </li>

              <li className="flex items-center  gap-2">
                <FaInstagram />
                <span>Lor Hospital</span>
              </li>
            </ul>

            <div className="relative max-w-xs">
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

        <div className="border-t border-white/30 my-12" />

        <div className="flex justify-end">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-12 h-12 rounded-full border border-white
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
