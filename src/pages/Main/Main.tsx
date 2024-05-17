import Header from "../../components/commons/Header/Header";
import MainCarousel from "./components/MainCarousel/MainCarousel";
import Footer from "../../components/commons/Footer/Footer";
import MainCategory from "./components/MainCategory/MainCategory";
import { useNavigate } from "react-router-dom";

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
      <Footer />
    </>
  );
};

export default Main;
