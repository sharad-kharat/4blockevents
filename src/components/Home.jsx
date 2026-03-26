import HomeHero from "./home/HomeHero";
import HomeIntro from "./home/HomeIntro";
import HomeWhyChoose from "./home/HomeWhyChoose";
import HomeAbout from "./home/HomeAbout";
import HomeExcellence from "./home/HomeExcellence";
import HomeEventsCarousel from "./home/HomeEventsCarousel";
import HomeOurTeam from "./home/HomeOurTeam";
import HomeClients from "./home/HomeClients";
import HomeNetworking from "./home/HomeNetworking";
import Consultancy from "../pages/Consultancy";
import HomeVentures from "./home/HomeVentures";
// import HomeContactMap from "./home/HomeContactMap";

const Home = () => {
  return (
    <>
      <HomeHero />
      {/* <HomeIntro /> */}
      <HomeAbout /> 
      <HomeWhyChoose />
      {/* <HomeExcellence /> */}
      <HomeEventsCarousel />
      <HomeVentures />
      <Consultancy />
      <HomeOurTeam />
      <HomeClients />
    </>
  );
};

export default Home;
