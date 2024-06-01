import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!query) return;

    const handleSearch = async function searchImages() {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://api.unsplash.com/photos/?client_id=D_SPVSOx1r7wQQf7tImOfFzoek9ERDaEib9Ux2P1n7M"
        );
        console.log(response);
        setImages(response.data.hits);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    handleSearch();
  }, []);
  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {loading && <p>Loading images, please wait...</p>}
      {images.length > 0 && <ImageGallery items={images} />}
    </div>
  );
}

export default App;
