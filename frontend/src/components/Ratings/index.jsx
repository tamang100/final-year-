import React from "react";

export default function Ratings(prop) {
  let rating;
  if (prop.rating) {
    rating = prop.rating;
  } else {
    rating = prop.product.rating;
  }
  let starStyle = {
    width: "14px",
    height: "14px",
    marginRight: "4px",
  };

  return (
    <div>
      <img
        src={
          rating > 0
            ? rating > 0.5
              ? "/icons/star-fill.png"
              : "icons/star-half-fill.png"
            : "/icons/star-unfill.png"
        }
        alt="ratings"
        style={starStyle}
      />
      <img2
        src={
          rating > 1
            ? rating > 1.5
              ? "/icons/star-fill.png"
              : "/icons/star-half-fill.png"
            : "/icons/star-unfill.png"
        }
        alt="ratings"
        style={starStyle}
      />
      <img
        src={
          rating > 2
            ? rating > 2.5
              ? "/icons/star-fill.png"
              : "/icons/star-half-fill.png"
            : "/icons/star-unfill.png"
        }
        alt="ratings"
        style={starStyle}
      />
      <img
        src={
          rating > 3
            ? rating > 3.5
              ? "/icons/star-fill.png"
              : "/icons/star-half-fill.png"
            : "/icons/star-unfill.png"
        }
        alt="ratings"
        style={starStyle}
      />
      <img
        src={
          rating > 4
            ? rating > 4.5
              ? "/icons/star-fill.png"
              : "/icons/star-half-fill.png"
            : "/icons/star-unfill.png"
        }
        alt="ratings"
        style={{ ...starStyle, marginRight: "15px" }}
      />
      {prop.product ? `${prop.product.numReviews} Reviews` : null}
    </div>
  );
}
