import Footer from "./components/Footer"
import Header from "./components/Header"
// import ReactCardSlider from './compnents/card/Card';
import Pricing from "./components/pricing";
import EngagingLearning from "./components/EngagingLearning/EngagingLearning";
import HeroSection from "./components/HeroSection";
import LoveFellow from "./components/lovefellow/loveFellow";



function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <div className="w-full  flex justify-center items-center bg-white">
        <EngagingLearning />
      </div>
      <div className="bg-white min-h-screen flex items-center justify-center">
        <LoveFellow />
      </div>
      {/* <div>
        <ReactCardSlider slides={slides} autoslide={true} />
      </div> */}
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
