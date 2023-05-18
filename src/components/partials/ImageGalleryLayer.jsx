import close from "../../assets/images/icon-close.svg";

const ImageGalleryLayer = ({
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
        <div className="image-thumbnails">{imageThumbnails()}</div>
      </div>
    </>
  );
};

export default ImageGalleryLayer;
