import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const getArticlesApi = async (searchQuery) => {
  const { data } = await axios.get("/search/photos", {
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_Access_Key}`,
    },
    params: {
      query: searchQuery,
    },
  });
  return data.hits;
};
