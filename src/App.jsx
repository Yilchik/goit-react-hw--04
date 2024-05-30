import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function searchImages() {
      const response = await axios.get(
        "https://api.unsplash.com/photos/?client_id=D_SPVSOx1r7wQQf7tImOfFzoek9ERDaEib9Ux2P1n7M"
      );
      console.log(response);
      setImages(response.data.hits);
    }
    searchImages();
  }, []);
  return (
    <div>
      <SearchBar></SearchBar>
      {images.length > 0 && <ImageGallery items={images} />}
    </div>
  );
}

export default App;
