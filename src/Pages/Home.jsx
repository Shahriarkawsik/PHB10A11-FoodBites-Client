import Banner from "../Components/Banner/Banner";
import FeaturedFoods from "./../Components/FeaturedFoods/FeaturedFoods";
import CurrentEvents from "./CurrentEvents/CurrentEvents";

const Home = () => {
  return (
    <div>
      <Banner/>
      <FeaturedFoods />
      <CurrentEvents />
    </div>
  );
};

export default Home;
