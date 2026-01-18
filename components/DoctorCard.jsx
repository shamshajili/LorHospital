const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md">

      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-full h-55 object-cover"
      />

      <div className="p-4 text-center">
        <h3 className="text-lg font-bold text-[#3F3F3F]">
          {doctor.name}
        </h3>

        <p className="text-sm text-[#3F3F3F] mt-1">
          {doctor.role.short}
        </p>
      </div>

    </div>
  )
}

export default DoctorCard
