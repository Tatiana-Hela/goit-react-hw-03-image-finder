import css from '../ImageGallery/ImageGallery.module.css';
// import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, showImage }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          id={id}
          tags={tags}
          src={webformatURL}
          largeImageURL={largeImageURL}
          showImage={showImage}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;

// ImageGallery.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number,
//       webformatURL: PropTypes.string,
//       largeImageURL: PropTypes.string,
//       tags: PropTypes.string,
//     })
//   ).isRequired,
// };
