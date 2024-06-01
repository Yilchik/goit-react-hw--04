import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!query) return;

    async function searchImages() {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://api.unsplash.com/photos/?client_id=D_SPVSOx1r7wQQf7tImOfFzoek9ERDaEib9Ux2P1n7M"
        );
        console.log(response);
        setImages((prev) => [...prev, ...data]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    query && searchImages();
  }, [page, query]);

  const handleSubmit = async (searchQuery) => {
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {loading && <Loader />}
      {images.length > 0 && <ImageGallery items={images} />}
      {error && (
        <ErrorMessage message="Whoops, something went wrong! Please try reloading this page!" />
      )}
    </div>
  );
}

export default App;
