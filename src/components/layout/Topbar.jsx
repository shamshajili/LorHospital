import { useState } from "react";

import fbIcon from "../../assets/fb.png";
import instaIcon from "../../assets/insta.png";
import userIcon from "../../assets/user.png";
import languageIcon from "../../assets/language.png";
import arrowIcon from "../../assets/arrow.png";

const Topbar = () => {
  const [language, setLanguage] = useState("AZ");
  
  return (
    <div className="hidden md:block bg-[#FAFAFA] text-sm">
      <div className="max-w-6xl mx-auto px-4 h-6 flex items-center justify-between">
        {/* Social Icon*/}
        <div className="flex items-center gap-2">
          <img src={fbIcon} alt="Facebook" className="w-3 h-3 cursor-pointer" />
          <img
            src={instaIcon}
            alt="Instagram"
            className="w-3 h-3 cursor-pointer"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2">
            <img src={userIcon} alt="User" className="w-4 h-4" />
            <span className="text-[#8A8A8A]">Daxil olun</span>
          </button>

          <div className="relative group flex items-center gap-1 cursor-pointer">
            <div className="relative group flex items-center gap-2 cursor-pointer">
              <img src={languageIcon} alt="Language" className="w-4 h-4" />

              <span className="text-[#8A8A8A] text-sm font-medium">
                {language}
              </span>

              <img
                src={arrowIcon}
                alt="Arrow"
                className="w-2 h-2 transition-transform group-hover:rotate-180"
              />

              {/* Dropdown Item*/}
              <div className="absolute text-[#8A8A8A] right-0 top-7 w-20 bg-white shadow-md rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {language !== "EN" && (
                  <div
                    onClick={() => setLanguage("EN")}
                    className="px-3 py-1 hover:bg-gray-100 cursor-pointer text-sm"
                  >
                    EN
                  </div>
                )}
                {language !== "RU" && (
                  <div
                    onClick={() => setLanguage("RU")}
                    className="px-3 py-1 hover:bg-gray-100 cursor-pointer text-sm"
                  >
                    RU
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
