import { IcDevider10px, IcMainBanner } from "@assets/icons";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/commons/Footer/Footer";
import Header from "../../components/commons/Header/Header";
import CardBanner from "./components/CardBanner/CardBanner";
import MainCarousel from "./components/MainCarousel/MainCarousel";
import MainCategory from "./components/MainCategory/MainCategory";
import Modal from "./components/Modal/Modal";
import RankingComponent from "./components/RankingComponent/RankingComponent";
import TicketOpen from "./components/TicketOpen/TicketOpen";
import * as S from "./Main.styled";

const Main = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const navigate = useNavigate();
  const navigateSearch = () => {
    navigate("/search");
  };
  return (
    <S.MainPageWrapper>
      {showModal && <Modal isOpen={showModal} setShowModal={setShowModal} />}
      <Header navigateSearch={navigateSearch} />
      <MainCarousel />
      <MainCategory />
      <IcDevider10px />
      <RankingComponent />
      <IcDevider10px />
      <TicketOpen />
      <IcDevider10px />
      <IcMainBanner />
      <IcDevider10px />
      <CardBanner />
      <Footer />
    </S.MainPageWrapper>
  );
};

export default Main;
