import { Link } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  return (
    <Link
      to={`/hekimlerimiz/${doctor.id}`}
      className="bg-white rounded-2xl shadow-sm hover:shadow-md transition 
                 overflow-hidden max-w-[280px] mx-auto"
    >
      <div className="w-full h-[200px] bg-gray-100">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="p-4">
        <h3 className="text-[15px] font-semibold text-gray-900">
          {doctor.name}
        </h3>

        <p className="text-[13px] text-gray-500 mt-1">
          {doctor.role.short}
        </p>
      </div>
    </Link>
  );
};

export default DoctorCard;
