import Banner from "../Components/Banner/Banner";
import CurrentEvents from "../Components/CurrentEvents";
import SuccessStoriesCarousel from "../Components/SuccessStoriesCarousel";
import FeaturedFoods from "./../Components/FeaturedFoods/FeaturedFoods";
import { useLocation } from "react-router-dom";
import { useEffect } from 'react';

const Home = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = "Home | FoodBites";
  }, [pathname]);
  return (
    <div>
      <Banner />
      <FeaturedFoods />
      <CurrentEvents />
      <SuccessStoriesCarousel />
    </div>
  );
};

export default Home;
