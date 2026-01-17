import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Doctors from "../pages/Doctors"
import DoctorDetail from "../pages/DoctorDetail"

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorDetail />} />
    </Routes>
  )
}