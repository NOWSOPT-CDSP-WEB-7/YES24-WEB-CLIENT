import Header from "../../components/commons/Header/Header";
import Category from "./components/Category/Category";
import SaleCoupon from "./components/SaleCoupon/SaleCoupon";
import ShowInfo from "./components/ShowInfo/ShowInfo";

const Detail = () => {
  return (
    <>
      <Header />
      <ShowInfo />
      <SaleCoupon />
      <Category />
    </>
  );
};

export default Detail;
