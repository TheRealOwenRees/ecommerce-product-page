import product1 from "../../assets/images/image-product-1.jpg";
import product1Thumbnail from "../../assets/images/image-product-1-thumbnail.jpg";
import product2 from "../../assets/images/image-product-2.jpg";
import product2Thumbnail from "../../assets/images/image-product-2-thumbnail.jpg";
import product3 from "../../assets/images/image-product-3.jpg";
import product3Thumbnail from "../../assets/images/image-product-3-thumbnail.jpg";
import product4 from "../../assets/images/image-product-4.jpg";
import product4Thumbnail from "../../assets/images/image-product-4-thumbnail.jpg";
import ImageGallery from "../partials/ImageGallery.jsx";
import ProductDescription from "../partials/ProductDescription.jsx";
import ImageGalleryLayer from "../partials/ImageGalleryLayer.jsx";
import Cart from "../partials/Cart.jsx";
import { useEffect, useState } from "react";

const Home = ({ showCart }) => {
  const imageData = [
    {
      image: product1,
      thumbnail: product1Thumbnail,
    },
    {
      image: product2,
      thumbnail: product2Thumbnail,
    },
    {
      image: product3,
      thumbnail: product3Thumbnail,
    },
    {
      image: product4,
      thumbnail: product4Thumbnail,
    },
  ];

  const [showImageGalleryLayer, setShowImageGalleryLayer] = useState(false);
  const [imageNumber, setImageNumber] = useState(0);
  const [image, setImage] = useState({
    image: imageData[0].image,
    thumbnail: imageData[0].thumbnail,
  });

  useEffect(() => {
    setImage({
      image: imageData[imageNumber].image,
      thumbnail: imageData[imageNumber].thumbnail,
    });
  }, [imageNumber]);

  const imageThumbnails = () => {
    return imageData.map((image, i) => {
      return (
        <img
          className="thumbnail"
          src={image.thumbnail}
          onClick={() => setImageNumber(i)}
        />
      );
    });
  };

  return (
    <>
      <ImageGallery
        imageData={imageData}
        imageNumber={imageNumber}
        setImageNumber={setImageNumber}
        image={image}
        imageThumbnails={imageThumbnails}
        showImageGalleryLayer={showImageGalleryLayer}
        setShowImageGalleryLayer={setShowImageGalleryLayer}
      />
      <ProductDescription />
      {showCart && <Cart />}
      {showImageGalleryLayer && (
        <ImageGalleryLayer
          imageData={imageData}
          imageNumber={imageNumber}
          setImageNumber={setImageNumber}
          image={image}
          imageThumbnails={imageThumbnails}
          setShowImageGalleryLayer={setShowImageGalleryLayer}
        />
      )}
    </>
  );
};

export default Home;
