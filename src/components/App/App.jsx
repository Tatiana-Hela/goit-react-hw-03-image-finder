import { Component } from 'react';
import { searchImagesApi } from '../../services/image-api';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import LargeImage from 'components/LargeImage/LargeImage';
import css from '../App/App.module.css';

class App extends Component {
  state = {
    search: '',
    images: [],
    isLoading: false,
    error: null,
    page: 1,
    currentImage: null,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.fetchImages();
    }
  }
  async fetchImages() {
    try {
      const { search, page } = this.state;
      const data = await searchImagesApi(search, page);
      console.log(data.hits);
      this.setState(prevState => {
        return {
          images: [...prevState.images, ...data.hits],
        };
      });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  searchImages = ({ search }) => {
    this.setState({ search, images: [], page: 1 });
  };

  loadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  showImage = ({ tags, largeImageURL }) => {
    this.setState({
      currentImage: {
        tags,
        largeImageURL,
      },
      showModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      currentImage: null,
    });
  };

  render() {
    const { images, currentImage, showModal } = this.state;
    const { searchImages, loadMore, closeModal, showImage } = this;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={searchImages} />
        <ImageGallery images={images} showImage={showImage} />
        {Boolean(images.length) && (
          <Button text="Load more" clickHeandler={loadMore} />
        )}
        {showModal && (
          <Modal close={closeModal}>
            <LargeImage {...currentImage} />
          </Modal>
        )}
      </div>
    );
  }
}
export default App;
