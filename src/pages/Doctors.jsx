import { useState } from "react";
import { doctors } from "../data/doctors";
import DoctorCard from "../components/DoctorCard";
import AboutSidebar from "../components/layout/AboutSidebar";

const Doctors = () => {
  const [search, setSearch] = useState("");

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      <div className="flex flex-col lg:flex-row gap-8">
        <AboutSidebar />

        <div className="flex-1">
          <input
            type="text"
            placeholder="Həkimin adı, soyadı"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 mb-8 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0197DC]"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
