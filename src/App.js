// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AboutSection from "./component/AboutSection";
import ContactSection from "./component/ContactSection";
import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";
import PortfolioSection from "./component/PortfolioSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
}

export default App;
