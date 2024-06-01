import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const getArticlesApi = async (searchQuery) => {
  const { data } = await axios.get("/photos", {
    params: {
      query: searchQuery,
      client_id: REACT_APP_Access_Key,
    },
  });
  return data.hits;
};
