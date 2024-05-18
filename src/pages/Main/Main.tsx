import { IcDevider10px } from "@assets/icons";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/commons/Footer/Footer";
import Header from "../../components/commons/Header/Header";
import CardBanner from "./components/CardBanner/CardBanner";
import MainCarousel from "./components/MainCarousel/MainCarousel";
import MainCategory from "./components/MainCategory/MainCategory";
import RankingComponent from "./components/RankingComponent/RankingComponent";

const Main = () => {
  const navigate = useNavigate();
  const navigateSearch = () => {
    navigate("/search");
  };
  return (
    <>
      <Header navigateSearch={navigateSearch} />
      <MainCarousel />
      <MainCategory />
      <IcDevider10px />
      <RankingComponent />

      <CardBanner />
      <Footer />
    </>
  );
};

export default Main;
