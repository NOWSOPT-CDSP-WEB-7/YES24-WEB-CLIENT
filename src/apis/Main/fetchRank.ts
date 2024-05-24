import axios from "axios";

interface RankResponseObjPropTypes {
  id: number;
  title: string;
  period: string;
  place: string;
  genre: string;
  image: string;
}

type RankResponsePropTypes = RankResponseObjPropTypes[];

export const fetchRank = async (): Promise<RankResponsePropTypes> => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}show/rank`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseArr = response.data.data;
    return responseArr;
  } catch (error) {
    console.log(error);
    return [];
  }
};
