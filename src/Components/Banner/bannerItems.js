import { useEffect, useState } from "react";
import { useAxiosCommon } from "./../../Axios/useAxiosCommon";

export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export const BannerItems = () => {
  const common = useAxiosCommon();
  const [bannerItems, setBannerItems] = useState([]);

  useEffect(() => {
    common.get(`/food`).then((response) => setBannerItems(response.data.data));
  }, []);
  return bannerItems;
};
