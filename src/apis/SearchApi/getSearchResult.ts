import axios from "axios";

export const getSearchResult = async (input: string) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}runshow/search?query=${input}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
