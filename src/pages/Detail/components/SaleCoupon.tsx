import { IcDownload } from "../../../assets/icons";
import * as S from "./SaleCoupon.styled.ts";

const SaleCoupon = () => {
  return (
    <S.CouponWrapper>
      <S.CouponLayout>
        <S.ValidCouponTxt>
          사용가능한 할인쿠폰
          <S.AvailableCoupon> 2</S.AvailableCoupon>개
        </S.ValidCouponTxt>
        <S.DownloadBtn>
          다운
          <IcDownload />
        </S.DownloadBtn>
      </S.CouponLayout>
    </S.CouponWrapper>
  );
};

export default SaleCoupon;
