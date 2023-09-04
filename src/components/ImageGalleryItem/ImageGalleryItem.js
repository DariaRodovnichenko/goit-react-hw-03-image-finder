import { CustomModal } from 'components/Modal/Modal';
import { Component } from 'react';
import { GalleryImg, ImgGalleryItem } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { image } = this.props;
    return (
      <ImgGalleryItem onClick={this.toggleModal}>
        <GalleryImg src={image.webformatURL} alt={image.tags} />
        {this.state.showModal && (
          <CustomModal
            largeImageURL={image.largeImageURL}
            tags={image.tags}
            onClose={this.toggleModal}
          />
        )}
      </ImgGalleryItem>
    );
  }
}
