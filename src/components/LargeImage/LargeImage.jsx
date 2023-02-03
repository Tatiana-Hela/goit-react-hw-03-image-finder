import PropTypes from 'prop-types';

const LargeImage = ({ tags, largeImageURL }) => {
  return <img src={largeImageURL} alt={tags} />;
};
export default LargeImage;

LargeImage.propTypes = {
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
