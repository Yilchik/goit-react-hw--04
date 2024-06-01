import axios from "axios";

export const getArticlesApi = async () => {
  const { data } = await axios.get(
    "https://api.unsplash.com/photos/?client_id=D_SPVSOx1r7wQQf7tImOfFzoek9ERDaEib9Ux2P1n7M"
  );
  return data;
};
