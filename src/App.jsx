import React from "react"
import Footer from "./components/Footer"
import Learn from "./components/Learn/Learn"
import Pricing from "./components/pricing"
import HeroSection from './components/HeroSection';

function App() {
  return (
    <>
      <Learn/>
      <HeroSection />
      <Pricing/>
      <Footer/>
    </>
  )
};

export default App;
