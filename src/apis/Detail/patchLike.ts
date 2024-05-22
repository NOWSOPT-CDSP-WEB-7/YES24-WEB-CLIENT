import axios from "axios";

interface likePropTypes {
  success: boolean;
  data: {
    isLike: boolean;
  };
}

export const patchLike = async (runShowId: number) => {
  try {
    const response = await axios.patch<likePropTypes>(
      `${import.meta.env.VITE_BASE_URL}runshow/like/${runShowId}`,
      {},
      {
        headers: {
          memberId: 1,
        },
      }
    );
    return response.data.data.isLike;
    console.log(response);
  } catch (error) {
    console.error();
  }
};
