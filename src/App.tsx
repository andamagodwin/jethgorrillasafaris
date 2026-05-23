import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import WhyUs from './components/WhyUs'
import Gallery from './components/Gallery'
import Services from './components/Services'
import Languages from './components/Languages'
import Contact from './components/Contact'
import GoogleReviews from './components/GoogleReviews'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'
import Packages from './components/Packages'
import BigFive from './components/BigFive'
import Connect from './components/Connect'

const ServiceDetail = lazy(() => import('./components/ServiceDetail'))

const HomePage = () => (
  <>
    <Hero />
    <About />
    <WhyUs />
    <Gallery />
    <Languages />
    <Services />
    <BigFive />
    <Packages />
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
      </Routes>
      <GoogleReviews />
      <Footer />
      <ScrollToTopButton />
    </BrowserRouter>
  )
}

export default App
