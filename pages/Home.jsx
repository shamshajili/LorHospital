import Hero from '../components/home/Hero'
import Features from '../components/home/Features'
import DoctorsCarousel from '../components/home/DoctorsCarousel'
import ArticlesCarousel from '../components/home/ArticlesCarousel'
import WhyLorHospital from '../components/home/WhyLorHospital'
import ReviewsSection from '../components/home/ReviewsSection'

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <DoctorsCarousel />
      <ArticlesCarousel />
      <WhyLorHospital />
      <ReviewsSection />
    </>
  )
}

export default Home
