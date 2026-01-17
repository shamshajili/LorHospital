import mainLogo from '../../assets/mainlogo.png'
import searchIcon from '../../assets/search.png'
import phoneIcon from '../../assets/phone.png'


const Navbar = () => {
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

        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-[#8A8A8A] hover:text-gray-700 transition">
            Haqqımızda
          </a>
          <a href="#" className="text-[#8A8A8A] hover:text-gray-700 transition">
            Xidmətlər
          </a>
          <a href="#" className="text-[#8A8A8A] hover:text-gray-700 transition">
            Referans Eşitmə
          </a>
          <a href="#" className="text-[#8A8A8A] hover:text-gray-700 transition">
            Xəbərlər
          </a>
          <a href="#" className="text-[#8A8A8A] hover:text-gray-700 transition">
            Əlaqə
          </a>
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

          <button className="flex items-center gap-2 bg-[#0FB3FF8C] text-white px-2 h-8 rounded-full hover:opacity-90 transition">
            <img
              src={phoneIcon}
              alt="Phone"
              className="w-4 h-4"
            />
            <span className="text-[20px] font-semibold">*0111</span>
          </button>

        </div>
      </div>
    </div>
  )
}

export default Navbar

