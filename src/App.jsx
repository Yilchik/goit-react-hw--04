import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
import { getArticlesApi } from "./components/api/articles-api";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const searchImages = async () => {
      try {
        setLoading(true);
        const data = await getArticlesApi(query, page);
        console.log(data);
        setImages((prev) => [...prev, ...data]);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    query && searchImages();
  }, [page, query]);

  const handleSubmit = async (searchQuery) => {
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = async () => {
    // setPage((prevPage) => prevPage + 1);
    setPage(page + 1);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {images.length > 0 && <ImageGallery images={images} />}
      {error && (
        <ErrorMessage message="Whoops, something went wrong! Please try reloading this page!" />
      )}
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </div>
  );
}

export default App;
