import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ManagingDirector from './components/ManagingDirector'
import About from './components/About'
import WhyUs from './components/WhyUs'
import HowItWorks from './components/HowitWorks'
import Gallery from './components/Gallery'
import Services from './components/Services'
import Languages from './components/Languages'
import BestTimeToVisit from './components/BestTimeToVisit'
import Contact from './components/Contact'
import GoogleReviews from './components/GoogleReviews'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'
import WhatsAppButton from './components/WhatsAppButton'
import Packages from './components/Packages'
import BigFive from './components/BigFive'
import Connect from './components/Connect'
import FAQ from './components/FAQ/FAQ'
import MapSection from './components/MapSection'
import Destinations from './components/Destinations'
import Stats from './components/Stats'
import MedicalAssurance from './components/MedicalAssurance'
import TrekkingChecklist from './components/TrekkingChecklist'
import Mission from './components/Mission'

const ServiceDetail = lazy(() => import('./components/ServiceDetail'))
const DestinationDetail = lazy(() => import('./components/DestinationDetail'))

const HomePage = () => (
  <>
    <Hero />
    <ManagingDirector />
    <About />
    <Mission />
    <Destinations />
    <WhyUs />
    <HowItWorks />
    <TrekkingChecklist />
    <Gallery />
    <Languages />
    <BestTimeToVisit />
    <FAQ />
    <MapSection />
    <Services />
    <BigFive />
    <Packages />
    <MedicalAssurance />
    <Stats />
    <Contact />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/services/:serviceId" element={
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" /></div>}>
            <ServiceDetail />
          </Suspense>
        } />
        <Route path="/destinations/:destinationId" element={
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" /></div>}>
            <DestinationDetail />
          </Suspense>
        } />
      </Routes>
      <GoogleReviews />
      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
    </BrowserRouter>
  )
}

export default App
