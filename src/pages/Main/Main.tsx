import Header from "../../components/commons/Header/Header";
import MainCarousel from "./components/MainCarousel/MainCarousel";
import Footer from "../../components/commons/Footer/Footer";
import MainCategory from "./components/MainCategory/MainCategory";
import { useNavigate } from "react-router-dom";
import RankingComponent from "./components/RankingComponent/RankingComponent";
import { IcDevider10px } from "@assets/icons";

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
      <Footer />
    </>
  );
};

export default Main;
