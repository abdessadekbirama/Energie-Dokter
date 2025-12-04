import Image from "next/image";
import Nav from "./components/Nav";
import HomeHero from "./components/HomeHero";
import BrandList from "./components/BrandList";
import About from "./components/About";
import Diensten from "./components/Diensten";
import StepPlan from "./components/StepPlan";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Blog from "./Blog";

export default function Home() {
  return (
    <>
      <HomeHero />
      <BrandList />
      <About />
      <Diensten />
      <StepPlan />
      <Contact />
      <Faq />
      <Blog />
    </>
  );
}
