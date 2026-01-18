import mainLogo from "../../assets/mainlogo.png";
import searchIcon from "../../assets/search.png";
import phoneIcon from "../../assets/phone.png";
import usericon from "../../assets/user.png";
import languageIcon from "../../assets/language.png";
import arrowIcon from "../../assets/arrow.png";

import { useState, useEffect } from "react";
import { menuItems } from "../../data/menuitem";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [language, setLanguage] = useState("AZ");
  const [langOpen, setLangOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);
  const [activeMobileSubMenu, setActiveMobileSubMenu] = useState(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  return (
    <>
      {/* Desktop view */}
      <div className="w-full bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
          <img
            src={mainLogo}
            alt="LOR Hospital"
            className="h-10 md:h-12 cursor-pointer"
          />

          {/* Desktop Menu */}
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
                    className="absolute top-full left-0 z-50"
                    onMouseLeave={() => {
                      setActiveMenu(null);
                      setActiveSubMenu(null);
                    }}
                  >
                    <div className="backdrop-blur-md bg-white/60 shadow-xl rounded-xl flex border border-white/30">
                      {/* Submenu */}
                      <div className="min-w-[240px] p-4 space-y-2">
                        {item.dropdown.map((sub) => {
                          const Wrapper = sub.path ? Link : "div";

                          return (
                            <Wrapper
                              key={sub.label}
                              to={sub.path}
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
                            </Wrapper>
                          );
                        })}
                      </div>

                      {/* Children menu */}
                      {item.dropdown.map(
                        (sub) =>
                          sub.children &&
                          activeSubMenu === sub.label && (
                            <div
                              key={sub.label}
                              className="min-w-[280px] p-5 bg-white/50 backdrop-blur-lg space-y-2 border-l border-white/30 shadow-xl"
                            >
                              {sub.children.map((child) => (
                                <div
                                  key={child}
                                  className="text-sm text-gray-700 hover:text-[#0197DC] cursor-pointer px-2 py-1 rounded hover:bg-white/40 transition"
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

            <a
              href="tel:*0111"
              className="flex items-center gap-2 text-white px-3 h-8 rounded-full bg-gradient-to-r from-[#14B0F9] to-[#0197DC]"
            >
              <img src={phoneIcon} alt="Phone" className="w-4 h-4" />
              <span className="text-lg font-semibold">*0111</span>
            </a>

            {/* Mobile view */}
            <button
              className="md:hidden text-2xl text-[#8A8A8A]"
              onClick={() => setMobileOpen(true)}
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[9999] bg-white md:hidden flex flex-col">
          <div className="flex items-center justify-between px-4 h-16 border-b">
            <img src={mainLogo} alt="LOR Hospital" className="h-10" />
            <button
              className="text-2xl text-[#8A8A8A]"
              onClick={() => setMobileOpen(false)}
            >
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
            {menuItems.map((item) => (
              <div key={item.label}>
                <div
                  className="flex justify-between items-center text-lg font-medium text-[#8A8A8A]"
                  onClick={() =>
                    setActiveMobileMenu(
                      activeMobileMenu === item.label ? null : item.label,
                    )
                  }
                >
                  <span>{item.label}</span>

                  {item.dropdown && (
                    <span
                      className={`transition-transform ${
                        activeMobileMenu === item.label ? "rotate-180" : ""
                      }`}
                    >
                      ▾
                    </span>
                  )}
                </div>

                {activeMobileMenu === item.label && item.dropdown && (
                  <div className="mt-2 ml-4 space-y-2">
                    {item.dropdown.map((sub) => (
                      <div key={sub.label}>
                        <div
                          className="flex justify-between items-center text-sm text-gray-600"
                          onClick={() =>
                            setActiveMobileSubMenu(
                              activeMobileSubMenu === sub.label
                                ? null
                                : sub.label,
                            )
                          }
                        >
                          {sub.path ? (
                            <Link
                              to={sub.path}
                              onClick={() => setMobileOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          ) : (
                            <span>{sub.label}</span>
                          )}

                          {sub.children && (
                            <span
                              className={`transition-transform ${
                                activeMobileSubMenu === sub.label
                                  ? "rotate-180"
                                  : ""
                              }`}
                            >
                              ▸
                            </span>
                          )}
                        </div>

                        {activeMobileSubMenu === sub.label && sub.children && (
                          <div className="ml-4 mt-1 space-y-1">
                            {sub.children.map((child) => (
                              <div
                                key={child}
                                className="text-sm text-gray-500"
                              >
                                {child}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-6 border-t" />

            <button className="flex items-center gap-2">
              <img src={usericon} alt="User" className="w-4 h-4" />
              <span className="text-[#8A8A8A]">Daxil olun</span>
            </button>
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <img src={languageIcon} alt="Language" className="w-4 h-4" />
                <span className="text-[#8A8A8A] text-sm font-medium">
                  {language}
                </span>
                <img
                  src={arrowIcon}
                  alt="Arrow"
                  className={`w-2 h-2 transition-transform ${
                    langOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {langOpen && (
                <div className="mt-2 w-24 bg-white shadow-md rounded">
                  {language !== "EN" && (
                    <div
                      onClick={() => {
                        setLanguage("EN");
                        setLangOpen(false);
                      }}
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                    >
                      EN
                    </div>
                  )}

                  {language !== "RU" && (
                    <div
                      onClick={() => {
                        setLanguage("RU");
                        setLangOpen(false);
                      }}
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                    >
                      RU
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
