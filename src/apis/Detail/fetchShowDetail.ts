import axios from "axios";

interface fetchDetailPropTypes {
  success: string;
  data: ShowDetailPropTypes;
}

export interface ShowDetailPropTypes {
  runShowID: number;
  genre: string;
  title: string;
  period: string;
  filmRating: number;
  location: string;
  place: string;
  imgUrl: string;
  runTime: number;
  likeCount: number;
}

export const fetchShowDetail = async (runShowId: number) => {
  try {
    const response = await axios.get<fetchDetailPropTypes>(
      `${import.meta.env.VITE_BASE_URL}runshow/${runShowId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};
