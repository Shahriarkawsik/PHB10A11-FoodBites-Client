import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BannerItems, responsive } from "./bannerItems";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Banner = () => {
  const bannerItems = BannerItems();
  return (
    <div>
      <Carousel autoPlay autoPlaySpeed={3000} infinite responsive={responsive}>
        {bannerItems.map((bannerItem) => (
          <div
            key={bannerItem._id}
            data-aos="zoom-in"
            data-aos-duration="1000"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bannerItem?.img})`,
              objectFit: "cover",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
            }}
            className="w-full h-[300px] lg:h-[550px] flex flex-col gap-2 lg:gap-5 justify-center items-center font-Poppins"
          >
            <h2
              data-aos="fade-up"
              data-aos-duration="1000"
              className="z-20 text-xl sm:text-4xl lg:text-6xl leading-10 font-extrabold sm:font-normal hover:text-color4 text-white py-2 sm:py-5  lg:py-7 rounded-lg Nothing"
            >
              {bannerItem?.name}
            </h2>
            <div>
              <Link to={`/food`}>
                <motion.button
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="btn backdrop-blur-sm px-8 text-white  bg-color4 hover:bg-yellow-500 border-none"
                >
                  View Detail
                </motion.button>
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
