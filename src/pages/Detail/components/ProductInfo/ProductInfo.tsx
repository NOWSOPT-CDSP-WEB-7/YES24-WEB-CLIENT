import { IcCondition, IcRefund } from "../../../../assets/icons";
import * as S from "./ProductInfo.styled";
import tableImg from "/src/assets/images/table.png";
import bannerImg from "/src/assets/images/banner2.png";

const ProductInfo = () => {
  return (
    <>
      <S.PageWrapper>
        <S.Title>상품 정보</S.Title>
        <S.SubTitle>예매취소조건</S.SubTitle>
        <IcCondition />
        <S.TableImg src={tableImg} />
        <S.SubTitle>취소/환불방법</S.SubTitle>
        <IcRefund />
      </S.PageWrapper>
      <S.Banner src={bannerImg} />
    </>
  );
};

export default ProductInfo;
