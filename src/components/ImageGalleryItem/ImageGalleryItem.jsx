import PropTypes from 'prop-types';
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

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  showImage: PropTypes.func.isRequired,
};
