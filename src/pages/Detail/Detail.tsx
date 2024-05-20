import Footer from "../../components/commons/Footer/Footer";
import Header from "../../components/commons/Header/Header";
import Category from "./components/Category";
import ReserveBtn from "./components/ReserveBtn/ReserveBtn";
import SaleCoupon from "./components/SaleCoupon";
import ShowInfo from "./components/ShowInfo";

const Detail = () => {
  return (
    <>
      <Header />
      <ShowInfo />
      <SaleCoupon />
      <Category />
      <Footer />
      <ReserveBtn />
    </>
  );
};

export default Detail;
