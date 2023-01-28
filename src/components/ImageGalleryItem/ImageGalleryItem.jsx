import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  id,
  src,
  largeImageURL,
  tags,
  showImage,
}) => {
  return (
    <li
      className={css.ImageGalleryItem}
      key={id}
      onClick={() => showImage({ tags, largeImageURL })}
    >
      <img className={css.ImageGalleryItemImage} src={src} alt={tags} />
    </li>
  );
};
