import { IcDevider10px, IcMainBanner } from "@assets/icons";
import axios from "axios";
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

const Main = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const navigate = useNavigate();
  const navigateSearch = () => {
    navigate("/search");
  };

  const fetchRanking = async () => {
    try {
      const data = await axios.get(`${import.meta.env.VITE_BASE_URL}show/rank`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("두번쨰 :", data);
    } catch (error) {
      console.log("에러발생2", error);
    }
  };

  fetchRanking();

  return (
    <>
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
    </>
  );
};

export default Main;
