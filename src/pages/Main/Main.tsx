import Header from "../../components/commons/Header/Header";
import MainCarousel from "./components/MainCarousel/MainCarousel";
import Footer from "../../components/commons/Footer/Footer";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const navigateSearch = () => {
    navigate("/");
  };
  return (
    <>
      <Header navigateSearch={navigateSearch} />
      <MainCarousel />
      <Footer />
    </>
  );
};

export default Main;
