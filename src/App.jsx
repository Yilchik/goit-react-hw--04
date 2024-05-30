import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!query) return;

    const handleSearch = async function searchImages() {
      try {
        const response = await axios.get(
          "https://api.unsplash.com/photos/?client_id=D_SPVSOx1r7wQQf7tImOfFzoek9ERDaEib9Ux2P1n7M"
        );
        console.log(response);
        setImages(response.data.hits);
      } catch (error) {
      } finally {
      }
    };
    searchImages();
  }, []);
  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {images.length > 0 && <ImageGallery items={images} />}
    </div>
  );
}

export default App;
