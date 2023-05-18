export const handlePrevious = (imageNumber, setImageNumber, imageData) => {
  imageNumber > 0
    ? setImageNumber(imageNumber - 1)
    : setImageNumber(imageData.length - 1);
};

export const handleNext = (imageNumber, setImageNumber, imageData) => {
  imageNumber < imageData.length - 1
    ? setImageNumber(imageNumber + 1)
    : setImageNumber(0);
};
