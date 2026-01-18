import { BrowserRouter, Routes, Route } from "react-router-dom";

import Topbar from "./components/layout/Topbar";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import DoctorDetail from "./pages/DoctorDetail";

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hekimlerimiz" element={<Doctors />} />
        <Route path="/hekimlerimiz/:id" element={<DoctorDetail />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
