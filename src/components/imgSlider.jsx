import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ImgSlider = ({ url, limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  //   EVERYTIME WHILE USING API FROM OUTSIDE
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }
  console.log(images);
  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  console.log(images);

  if (loading) {
    return <div>Loading data please wait !</div>;
  }
  if (errorMsg !== null) {
    return <div>Error occured try again later {errorMsg}</div>;
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }
  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  return (
    <div className="relative flex justify-center items-center w-[600px] h-[450px] transition-all duration-100 px-2 py-10">
      <BsArrowLeftCircleFill
        className="arrow arrow-left absolute h-9 w-9"
        onClick={handlePrevious}
      />
      {images && images.length
        ? images.map((imgItem, index) => (
            <img
              key={imgItem.id}
              alt={imgItem.author}
              src={imgItem.download_url}
              loading="lazy"
              className={
                currentSlide === index
                  ? "currentImg"
                  : "currentImg hide-currentImg"
              }
            />
          ))
        : null}

      <BsArrowRightCircleFill
        className="arrow arrow-right absolute h-9 w-9"
        onClick={handleNext}
      />

      <span className="circle-indicators flex absolute ">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "currentIndicator"
                    : "currentIndicator hide-currentIndicator"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default ImgSlider;
