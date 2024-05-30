import css from "./ImageCard.module.css";

function ImageCard({ image, onImageClick }) {
  return (
    <div className={css.card} onClick={() => onImageClick(image)}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={css.image}
      />
      <div className={css.overlay}>
        <p>{image.user.name}</p>
        <p>{image.likes} likes</p>
      </div>
    </div>
  );
}

export default ImageCard;
