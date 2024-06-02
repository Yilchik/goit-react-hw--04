import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const getArticlesApi = async (searchQuery, page) => {
  const { data } = await axios.get("/search/photos", {
    headers: {
      Authorization: `Client-ID D_SPVSOx1r7wQQf7tImOfFzoek9ERDaEib9Ux2P1n7M`,
    },
    params: {
      query: searchQuery,
      page,
      hitsPerPage: 12,
    },
  });
  return data.results;
};
