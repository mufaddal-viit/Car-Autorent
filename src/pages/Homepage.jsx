import NavBar from "../components/NavBar";
import styles from "./Homepage.module.css";
import HeroSection from "../components/HeroSection";
import BrowseByType from "../components/browseByType";
import BookingSteps from "../components/BookingSteps";
import HomeCarCollection from "../components/HomeCarCollection";
import { useAuth } from "../contexts/AuthContext";
import OurFeatures from "../components/OurFeatures";
import Footer from "../components/Footer";

export default function Homepage() {
  const { user } = useAuth();
  console.log("logged user:", user);

  return (
    <main className="min-h-screen w-full  bg-[#E1E9C9] text-gray-900 flex flex-col">
      <NavBar />
      <HeroSection />
      <BrowseByType />
      <OurFeatures />
      <HomeCarCollection />
      <BookingSteps />
      <Footer />

      {/* <HomeFeaturesSection />
      <VehicleTypesNav />
      <HomeCarsList /> */}
    </main>
  );
}
