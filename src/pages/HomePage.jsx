import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import InfoCard from "../components/InfoCard";
import { Divider } from "antd";
import Foods from "../components/Foods";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow ">
        <Navbar />

        <Hero />

        <InfoCard />

        <Foods />
      </div>

      <Divider dashed className="bg-gray-300" />

      <Footer />
    </div>
  );
};

export default HomePage;
