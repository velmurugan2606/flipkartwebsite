import React, { useEffect, useState, useCallback } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Card.css";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";

const Card = ({ offerPrice, image, name, rating, actualPrice }) => {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);

  const carousel = useCallback(() => {
    setTimeout(() => {
      if (index < image.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 1000);
  }, [index, image.length]);

  useEffect(() => {
    show && carousel();
  }, [show, carousel]);

  return (
    <div className="card">
      <div className="card__heart">
        <FavoriteIcon />
      </div>

      {Array(image.length)
        .fill()
        .map((_, i) => {
          if (i === index) {
            return show && <FiberManualRecordRoundedIcon className="dots" />;
          } else {
            return show && <FiberManualRecordOutlinedIcon className="dots" />;
          }
        })}

      <div className="card__image">
        <img
          onMouseOver={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          src={image[index]}
          alt="images"
          style={{ width: "200px", height: "180px", objectfit: "contain" }}
        />
      </div>
      <div className="productDet">
        <div className="card__details">
          <p className="title">adidas</p>
          <p className="title1">{name}</p>
          <span className="span1">₹{offerPrice}</span>
          <span className="span2">₹{actualPrice}</span>
          <span className="span3">65%</span>
        </div>
        <div className="card__size">
          <p>
            size <span>6,7,8,9,10</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
