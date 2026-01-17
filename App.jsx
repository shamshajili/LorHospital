
import './App.css'
import Topbar from './components/layout/Topbar'
import Navbar from './components/layout/Navbar'
import Hero from './components/home/Hero'
import Features from './components/home/Features'
import DoctorsCarousel from './components/home/DoctorsCarousel'
import ArticlesCarousel from './components/home/ArticlesCarousel'
import WhyLorHospital from './components/home/WhyLorHospital'
import ReviewsSection from './components/home/ReviewsSection'

function App() {

  return (
   <div>
    <Topbar/>
    <Navbar/>
    <Hero/>
    <Features/>
    <DoctorsCarousel/>
    <ArticlesCarousel/>
    <WhyLorHospital/>
    <ReviewsSection/>
   </div>
  )
}

export default App
