import close from "../../assets/images/icon-close.svg";
import previous from "../../assets/images/icon-previous.svg";
import next from "../../assets/images/icon-next.svg";
import {
  handleNext,
  handlePrevious,
} from "../../handlers/imageGalleryHandlers.js";

const ImageGalleryLayer = ({
  imageData,
  imageNumber,
  setImageNumber,
  image,
  imageThumbnails,
  setShowImageGalleryLayer,
}) => {
  return (
    <>
      <div className="mask"></div>
      <div className="image-gallery-layer">
        <img
          className="close-gallery"
          src={close}
          onClick={() => setShowImageGalleryLayer(false)}
        />
        <img className="main-image" src={image.image} />
        <div className="gallery-buttons">
          <img
            className="previous-button"
            src={previous}
            onClick={() =>
              handlePrevious(imageNumber, setImageNumber, imageData)
            }
          />
          <img
            className="next-button"
            src={next}
            onClick={() => handleNext(imageNumber, setImageNumber, imageData)}
          />
        </div>
        <div className="image-thumbnails">{imageThumbnails()}</div>
      </div>
    </>
  );
};

export default ImageGalleryLayer;
