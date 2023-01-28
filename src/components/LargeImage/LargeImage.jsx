const LargeImage = ({ tags, largeImageURL }) => {
  return <img src={largeImageURL} alt={tags} />;
};
export default LargeImage;
