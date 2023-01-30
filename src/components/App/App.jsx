import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { ThreeDots } from 'react-loader-spinner';
import 'react-toastify/dist/ReactToastify.css';

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
      this.setState({ isLoading: true });
      const { search, page } = this.state;
      const data = await searchImagesApi(search, page);
      // console.log(data.hits);
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
    if (search.trim() === '') {
      toast.error('Enter a search term', {
        theme: 'colored',
      });
      return;
    }
    if (search === this.state.search) {
      toast.info('Same request. Enter a new word', {
        theme: 'colored',
      });
      return;
    }
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
    const { images, currentImage, showModal, error, isLoading } = this.state;
    const { searchImages, loadMore, closeModal, showImage } = this;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={searchImages} />
        <ToastContainer position="top-right" autoClose={3000} />

        <ImageGallery images={images} showImage={showImage} />
        {error && (
          <p className={css.errorMessage}>
            Oops! Something went wrong. Try reloading the page
          </p>
        )}
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{
            margin: '0 auto',
          }}
          visible={isLoading && true}
        />
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
