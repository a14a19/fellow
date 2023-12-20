import Footer from "./components/Footer";
import Learn from "./components/Learn/Learn";
import Pricing from "./components/pricing";
import EngagingLearning from "./components/EngagingLearning/EngagingLearning";
import HeroSection from "./components/HeroSection";
import LoveFellow from "./components/lovefellow/loveFellow";

function App() {
  return (
    <>
      {/* <HeroSection /> */}
      <div className="w-full  flex justify-center items-center bg-white">
      <EngagingLearning/>
      </div>
      {/* <LoveFellow />
      <Pricing />
      <Footer /> */}
    </>
  );
}

export default App;
