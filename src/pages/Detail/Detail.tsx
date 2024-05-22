import Footer from "../../components/commons/Footer/Footer";
import Header from "../../components/commons/Header/Header";
import * as S from "./Detail.styled";
import Category from "./components/Category/Category";
import ReserveBtn from "./components/ReserveBtn/ReserveBtn";
import SaleCoupon from "./components/SaleCoupon/SaleCoupon";
import ShowInfo from "./components/ShowInfo/ShowInfo";

const Detail = () => {
  return (
    <S.DetailWrapper>
      <Header />
      <ShowInfo />
      <SaleCoupon />
      <Category />
      <S.FooterWrapper>
        <Footer />
      </S.FooterWrapper>
      <ReserveBtn />
    </S.DetailWrapper>
  );
};

export default Detail;
