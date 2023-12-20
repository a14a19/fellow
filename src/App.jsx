import Footer from "./components/Footer";
import Learn from "./components/Learn/Learn";
import Pricing from "./components/pricing";
import HeroSection from "./components/HeroSection";
import LoveFellow from "./components/lovefellow/loveFellow";

function App() {
  return (
    <>
      <HeroSection />
      <div className="bg-white min-h-screen flex items-center justify-center">
        <LoveFellow />
      </div>
      <Learn />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
