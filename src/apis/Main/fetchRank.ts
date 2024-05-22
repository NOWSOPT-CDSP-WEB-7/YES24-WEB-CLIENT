import axios from "axios";

interface RankResponseObjPropTypes {
  id: number;
  title: string;
  subTitle: string;
  image: string;
  period: string;
  place: string;
}

type RankResponsePropTypes = RankResponseObjPropTypes[];

export const fetchRanking = async (): Promise<RankResponsePropTypes> => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}show/rank`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseArr = response.data.data;
    return responseArr;
  } catch (error) {
    return [];
  }
};
