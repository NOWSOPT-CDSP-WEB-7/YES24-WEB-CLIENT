import axios from "axios";

interface likePropTypes {
  status: number;
  success: string;
  data: {
    isLike: boolean;
  }[];
}

export const patchLike = async (runShowId: number) => {
  try {
    const response = await axios.patch<likePropTypes>(`/runshow/like/${runShowId}`, {
      headers: {
        memberId: 1,
      },
    });
    return response;
  } catch (error) {
    console.error();
  }
};
