import { useParams } from "react-router-dom";
import { doctors } from "../data/doctors";
import { useState } from "react";

import usersicon from "../assets/users.png";
import count from "../assets/count.png";
import star from "../assets/start.png";
import ok from "../assets/ok.png";

const DoctorDetail = () => {
  const { id } = useParams();

  const doctor = doctors.find((doc) => doc.id === id);
  const [activeTab, setActiveTab] = useState("info");

  if (!doctor) {
    return <div className="p-10">Həkim tapılmadı</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col lg:flex-row gap-8">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-60 h-60 rounded-xl object-cover"
        />

        <div className="flex-1">
          <h1 className="text-2xl font-semibold text-[#0197DC]">
            {doctor.name}
          </h1>

          <p className="text-gray-600 mt-1">{doctor.role.short}</p>

          <div className="flex gap-6 mt-6">
            <Stat
              icon={usersicon}
              value={`${doctor.details.experience} il`}
              label="Təcrübə"
            />
            <Stat
              icon={count}
              value={doctor.details.patientCount}
              label="Pasiyent sayı"
            />
            <Stat
              icon={star}
              value={doctor.details.reviewsCount}
              label="Rəylər"
            />
          </div>
        </div>
      </div>

      {/* Tab */}
      <div className="mt-10 bg-white rounded-2xl shadow-sm p-6">
        <div className="flex gap-8 border-b mb-6">
          <TabButton
            active={activeTab === "info"}
            onClick={() => setActiveTab("info")}
            label="Məlumat"
          />
          <TabButton
            active={activeTab === "articles"}
            onClick={() => setActiveTab("articles")}
            label="Həkimin məqalələri"
          />
          <TabButton
            active={activeTab === "reviews"}
            onClick={() => setActiveTab("reviews")}
            label="Rəylər"
          />
        </div>

        {activeTab === "info" && (
          <>
            {[
              {
                type: "row",
                title: "Vəzifə",
                content: doctor.role.full,
              },
              doctor.details.center && {
                type: "row",
                title: "Mərkəz",
                content: doctor.details.center,
              },
              {
                type: "list",
                title: "Təhsil",
                items: doctor.details.education,
              },
              {
                type: "list",
                title: "Müayinə və müalicə istiqamətləri",
                items: doctor.details.treatments,
              },
            ]
              .filter(Boolean)
              .map((item, index) =>
                item.type === "row" ? (
                  <InfoRow
                    key={item.title}
                    title={item.title}
                    content={item.content}
                    index={index}
                  />
                ) : (
                  <InfoList
                    key={item.title}
                    title={item.title}
                    icon={ok}
                    items={item.items}
                    index={index}
                  />
                ),
              )}
          </>
        )}

        {activeTab === "articles" && (
          <div className="text-gray-500 py-10 text-center">
            Bu həkim üçün hələ məqalə əlavə olunmayıb.
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="text-gray-500 py-10 text-center">
            Rəy mövcud deyil.
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorDetail;

const Stat = ({ icon, value, label }) => (
  <div className="flex items-center gap-3 bg-[#F8FBFF] px-4 py-3 rounded-xl">
    <img src={icon} alt={label} className="w-6 h-6" />
    <div>
      <div className="font-semibold">{value}</div>
      <div className="text-xs text-gray-500">{label}</div>
    </div>
  </div>
);

const InfoRow = ({ title, content, index }) => (
  <div
    className={`grid grid-cols-1 md:grid-cols-4 gap-4 py-4 px-4 rounded-lg
      ${index % 2 === 0 ? "bg-[#6BB52B0F]" : "bg-transparent"}`}
  >
    <div className="font-medium text-gray-600">{title}</div>
    <div className="md:col-span-3">{content}</div>
  </div>
);

const InfoList = ({ title, icon, items, index }) => (
  <div
    className={`grid grid-cols-1 md:grid-cols-4 gap-4 py-6 px-4 rounded-lg
      ${index % 2 === 0 ? "bg-[#6BB52B0F]" : "bg-transparent"}`}
  >
    <div className="font-medium text-gray-600">{title}</div>
    <div className="md:col-span-3 space-y-2">
      {items.map((item, i) => (
        <div key={i} className="flex items-start gap-2">
          <img src={icon} alt="" className="w-4 h-4 mt-1" />
          <span>{item}</span>
        </div>
      ))}
    </div>
  </div>
);

const TabButton = ({ active, onClick, label }) => (
  <button
    onClick={onClick}
    className={`pb-3 font-medium transition relative
      ${active ? "text-[#0197DC]" : "text-gray-500 hover:text-[#0197DC]"}`}
  >
    {label}
    {active && (
      <span className="absolute left-0 -bottom-[1px] w-full h-[2px] bg-[#0197DC]" />
    )}
  </button>
);
