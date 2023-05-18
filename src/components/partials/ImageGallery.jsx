import previous from "../../assets/images/icon-previous.svg";
import next from "../../assets/images/icon-next.svg";

import {
  handlePrevious,
  handleNext,
} from "../../handlers/imageGalleryHandlers.js";

const ImageGallery = ({
  imageData,
  imageNumber,
  setImageNumber,
  image,
  imageThumbnails,
  showImageGalleryLayer,
  setShowImageGalleryLayer,
}) => {
  return (
    <div className="image-gallery">
      <img
        className="main-image"
        src={image.image}
        onClick={() => setShowImageGalleryLayer(!showImageGalleryLayer)}
      />
      <div className="gallery-buttons">
        <img
          className="previous-button"
          src={previous}
          onClick={() => handlePrevious(imageNumber, setImageNumber, imageData)}
        />
        <img
          className="next-button"
          src={next}
          onClick={() => handleNext(imageNumber, setImageNumber, imageData)}
        />
      </div>
      <div className="image-thumbnails">{imageThumbnails()}</div>
    </div>
  );
};

export default ImageGallery;
