import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import WhyUs from './components/WhyUs'
import Gallery from './components/Gallery'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ServiceDetail from './components/ServiceDetail'

function App() {
  const HomePage = () => (
    <>
      <Hero />
      <About />
      <WhyUs />
      <Gallery />
      <Services />
      <Contact />
    </>
  );

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
