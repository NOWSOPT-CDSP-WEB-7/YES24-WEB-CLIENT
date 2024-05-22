import axios from "axios";

interface ShowDetailPropTypes {
  status: number;
  success: string;
  data: {
    runShowID: number;
    genre: string;
    title: string;
    period: string;
    filmRating: number;
    location: string;
    place: string;
    image: string;
    runtime: number;
  }[];
}

export const fetchShowDetail = async (runShowId: number) => {
  try {
    const response = await axios.get<ShowDetailPropTypes>(`/runShow/${runShowId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
