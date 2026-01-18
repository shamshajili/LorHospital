import { Link, useLocation } from "react-router-dom";

const aboutMenu = [
  { label: "Tariximiz", path: "/tariximiz" },
  { label: "Missiya və Məqsəd", path: "/missiya" },
  { label: "Keyfiyyət siyasəti", path: "/keyfiyyet-siyaseti" },
  { label: "Keyfiyyətə nəzarət", path: "/keyfiyyete-nezaret" },
  { label: "Sertifikatlar", path: "/sertifikatlar" },
  { label: "Beynəlxalq əməkdaşlıq", path: "/emekdasliq" },
  { label: "Mərkəzlərimiz", path: "/merkezler" },
  { label: "Həkimlərimiz", path: "/hekimlerimiz" },
  { label: "Məmnunluq anketi", path: "/memnunluq-anketi" },
];

const AboutSidebar = () => {
  const location = useLocation();

  return (
    <div className="w-full lg:w-72 bg-[#F8FBFF] rounded-2xl p-4 space-y-3">
      {aboutMenu.map((item) => {
        const isActive = location.pathname === item.path;

        return (
          <Link
            key={item.label}
            to={item.path}
            className={`flex items-center justify-between px-5 py-4 rounded-xl transition
              ${
                isActive
                  ? "bg-[#0197DC] text-white"
                  : "bg-white text-gray-700 hover:bg-[#EAF6FD] hover:text-[#0197DC]"
              }`}
          >
            <span>{item.label}</span>
            <span
              className={`text-lg ${
                isActive ? "text-white" : "text-[#0197DC]"
              }`}
            >
              ›
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default AboutSidebar;
