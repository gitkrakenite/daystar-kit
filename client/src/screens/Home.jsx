import Transport from "../components/Transport";
import Foodie from "../components/Foodie";
import Footer from "../components/Footer";
import Accomodation from "../components/Accomodation";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Fun from "../components/Fun";
import Hustle from "../components/Hustle";
import Opportunities from "../components/Opportunities";
import Reviews from "../components/Reviews";
import Trending from "../components/Trending";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      {/*  */}
      <div className=" px-[10px] md:px-[60px]">
        <Transport />
        <Foodie />
        <Accomodation />
        <Fun />
        <Hustle />
        <Opportunities />
        <Reviews />
        <Trending />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
