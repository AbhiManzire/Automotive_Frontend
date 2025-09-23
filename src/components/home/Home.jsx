import React from "react";
import { BoodmoUi } from "./BoodmoUi";
import CurrentOffers from "./CurrentOffers";
import SearchSection from "./SearchSection";
import BrandTrustAndCarMakers from "./BrandTrustAndCarMakers";
import ArticleReview from "./Article_Review";

const Home = () => {
  return (
    <>
   
      <BoodmoUi />
      <CurrentOffers />
      <SearchSection />
      <BrandTrustAndCarMakers />
      <ArticleReview />
     
    </>
  );
};

export default Home;
