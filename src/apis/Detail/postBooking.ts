import axios from "axios";

export interface PostBookingPropTypes {
  status: number;
  success: boolean;
  message: string;
  data: {
    bookId: number;
  };
}

export const postBooking = async (runShowId: number) => {
  try {
    const response = await axios.post<PostBookingPropTypes>(
      `${import.meta.env.VITE_BASE_URL}runshow/book/${runShowId}`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          memberId: 1,
        },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
