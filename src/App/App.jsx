import 'normalize.css';
import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { fetchInfo } from '../API/fetchImages';
import { Container } from './App.styled';
import Searchbar from '../Components/Searchbar';
import ImageGallery from '../Components/ImageGallery/ImageGallery';
import BtnLoadMore from '../Components/Button';
import Modal from '../Components/Modal/Modal';
import Loader from '../Components/Loader/Loader';

window.scrollTo({
  top: document.documentElement.scrollHeight,
  behavior: 'smooth',
});

export default class App extends Component {
  state = {
    inputValue: '',
    images: [],
    page: 1,
    selectedImg: null,
    reqStatus: 'idle',
  };

  async componentDidUpdate(_, prevState) {
    const { inputValue, page } = this.state;

    if (this.state.inputValue.trim() === '') {
      return toast('PlEASE ENTER YOUR QUERY', {
        autoClose: 2000,
      });
    }

    if (prevState.inputValue !== inputValue) {
      try {
        this.setState({ reqStatus: 'pending', images: [], page: 1 });
        const results = await fetchInfo(inputValue, page);
        const images = results.hits;

        this.setState({ images });
        if (images.length === 0) {
          return toast('THERE IS NO IMAGES ON QUERY. TRY AGAIN', {
            autoClose: 2000,
          });
        }
        this.setState({ reqStatus: 'resolved' });
      } catch (error) {
        this.setState({ reqStatus: 'rejected' });
        console.error(error.message);
      }
    }

    if (prevState.page !== page && prevState.inputValue === inputValue) {
      try {
        this.setState({ reqStatus: 'pending' });
        const results = await fetchInfo(inputValue, page);
        const images = results.hits;
        this.setState({ reqStatus: 'resolved' });
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
        }));
      } catch (error) {
        this.setState({ reqStatus: 'rejected' });
        console.error(error.message);
      }
    }
  }

  handleSearchbarSubmit = inputValue => {
    this.setState({ inputValue });
  };

  loadMore = e => {
    if (e.currentTarget === e.target) {
      this.setState(prevState => ({ page: prevState.page + 1 }));
    }
  };

  toggleModal = () => {
    this.setState(state => ({ selectedImg: !state.selectedImg }));
  };

  onSelectedImg = selectedImg => {
    this.setState({ selectedImg });
  };

  render() {
    const { images, selectedImg, reqStatus } = this.state;
    const showBtnLoadMore = images.length >= 12;
    return (
      <>
        <Container>
          <Searchbar onSubmit={this.handleSearchbarSubmit} />
        </Container>
        {reqStatus === 'pending' && <Loader />}
        <ImageGallery
          data={images}
          onSelect={this.onSelectedImg}
        ></ImageGallery>
        {showBtnLoadMore && <BtnLoadMore onClick={this.loadMore} />}
        <ToastContainer role="alert" />
        {selectedImg && (
          <Modal onClose={this.toggleModal}>
            <img src={selectedImg} alt="" />
          </Modal>
        )}
      </>
    );
  }
}
