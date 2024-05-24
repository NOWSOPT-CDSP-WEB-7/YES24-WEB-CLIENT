import axios from "axios";

interface MainResponsObjPropTypes {
  id: number;
  title: string;
  subTitle: string;
  image: string;
  period: string;
  place: string;
}

//한번 다른 식으로도 사용해봄
type MainResponsePropTypes = MainResponsObjPropTypes[];
//declare function fetchMain(): MainResponsePropTypes; -> 이건 그제서야 선언할 때

export const fetchMain = async (): Promise<MainResponsePropTypes> => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}show/main`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseArr = response.data.data;
    return responseArr;
  } catch (error) {
    return []; //이거 트슈 !
  }
};
