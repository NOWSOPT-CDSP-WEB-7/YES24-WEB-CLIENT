import Header from "../../components/commons/Header/Header";
import MainCarousel from "./components/MainCarousel/MainCarousel";
import Footer from "../../components/commons/Footer/Footer";
import { useNavigate } from "react-router-dom";
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
      <RankingComponent />

      <Footer />
    </>
  );
};

export default Main;
