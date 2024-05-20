import Footer from "../../components/commons/Footer/Footer";
import Header from "../../components/commons/Header/Header";
import Category from "./components/Category/Category";
import SaleCoupon from "./components/SaleCoupon/SaleCoupon";
import ShowInfo from "./components/ShowInfo/ShowInfo";
import * as S from "./Detail.styled";

const Detail = () => {
  return (
    <S.DetailWrapper>
      <Header />
      <ShowInfo />
      <SaleCoupon />
      <Category />
      <Footer />
    </S.DetailWrapper>
  );
};

export default Detail;
