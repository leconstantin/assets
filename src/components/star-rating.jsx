import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ noFStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }
  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }
  function handleMouseLeave() {
    setHover(rating);
  }
  return (
    <div className="p-8 flex gap-3">
      {[...Array(noFStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            size={40}
            // 1,2,3,4,5,6,..
            className={
              index <= (hover || rating) ? "active text-yellow-300" : "inactive"
            }
          />
        );
      })}
    </div>
  );
};

export default StarRating;
