import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  useEffect(() => {
    async function searchImages() {
      const response = await axios.get(
        "https://api.unsplash.com/photos/?client_id=D_SPVSOx1r7wQQf7tImOfFzoek9ERDaEib9Ux2P1n7M"
      );
      console.log(response);
    }
    searchImages();
  }, []);
  return (
    <div>
      <SearchBar></SearchBar>
    </div>
  );
}

export default App;
