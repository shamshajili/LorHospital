import mainLogo from "../../assets/mainlogo.png";
import searchIcon from "../../assets/search.png";
import phoneIcon from "../../assets/phone.png";

import { useState } from "react";
import { menuItems } from "../../data/menuitem";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* left section*/}
        <div className="flex items-center">
          <img
            src={mainLogo}
            alt="LOR Hospital"
            className="h-12 object-contain cursor-pointer ml-5"
          />
        </div>

        <nav className="hidden md:flex items-center gap-6 relative">
          {menuItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => {
                setActiveMenu(item.label);
                setActiveSubMenu(null);
              }}
            >
              <span
                className={`cursor-pointer transition ${
                  activeMenu === item.label
                    ? "text-[#0197DC] font-semibold"
                    : "text-[#8A8A8A] hover:text-gray-700"
                }`}
              >
                {item.label}
              </span>

              {activeMenu === item.label && item.dropdown && (
                <div
                  className="absolute top-full left-0 mt-0 z-50"
                  onMouseLeave={() => {
                    setActiveMenu(null);
                    setActiveSubMenu(null);
                  }}
                >
                  <div className=" backdrop-blur-md bg-white/60 shadow-xl rounded-xl flex border border-white/30">
                    <div className="min-w-[240px] p-4 space-y-2">
                      {item.dropdown.map((sub) => (
                        <div
                          key={sub.label}
                          onMouseEnter={() => setActiveSubMenu(sub.label)}
                          className={`text-sm cursor-pointer flex justify-between items-center px-2 py-1 rounded transition ${
                            activeSubMenu === sub.label
                              ? "text-[#0197DC] bg-[#EAF6FD]"
                              : "text-gray-700 hover:text-[#0197DC]"
                          }`}
                        >
                          {sub.label}
                          {sub.children && (
                            <span className="text-gray-400">›</span>
                          )}
                        </div>
                      ))}
                    </div>

                    {item.dropdown.map(
                      (sub) =>
                        sub.children &&
                        activeSubMenu === sub.label && (
                          <div
                            key={sub.label}
                            className=" min-w-[280px] p-5 bg-white/50 backdrop-blur-lg space-y-2 border-l border-white/30 shadow-xl"
                          >
                            {sub.children.map((child) => (
                              <div
                                key={child}
                                className=" bg-white/50 backdrop-blur-lg text-sm text-gray-700 hover:text-[#0197DC] cursor-pointer px-2 py-1 rounded hover:bg-white/40 transition"
                              >
                                {child}
                              </div>
                            ))}
                          </div>
                        ),
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* right section*/}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center border border-[#E8E8E8] rounded-full px-2 h-8">
            <img
              src={searchIcon}
              alt="Search"
              className="w-4 h-4 mr-2 opacity-60"
            />
            <input
              type="text"
              placeholder="Axtarış"
              className="bg-transparent outline-none text-sm w-24"
            />
          </div>

          <button className="flex items-center gap-2 bg-[#00AFF0] text-white px-2 h-8 rounded-full hover:opacity-90 transition bg-gradient-to-r from-[#14B0F9] to-[#0197DC] hover:opacity-90 transition">
            <img src={phoneIcon} alt="Phone" className="w-4 h-4" />
            <span className="text-[20px] font-semibold">*0111</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
