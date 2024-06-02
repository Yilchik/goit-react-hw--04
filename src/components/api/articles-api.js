import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const Api_Key = process.env.REACT_APP_Access_Key;

export const getArticlesApi = async (searchQuery) => {
  const { data } = await axios.get("/search/photos", {
    headers: {
      Authorization: `Client-ID ${Api_Key}`,
    },
    params: {
      query: searchQuery,
    },
  });
  return data.hits;
};
