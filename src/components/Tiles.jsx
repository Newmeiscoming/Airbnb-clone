import React from "react";
import "./Tiles.css";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

const Tiles = ({ data }) => {
  const [color, setColor] = useState("black");
  const [opacity, setOpacity] = useState(0.5);
  return (
    <div className="tile">
      <div
        className="image-div"
        style={{
          backgroundImage: data.img,
        }}
      >
        <FavoriteIcon
          onClick={() => {
            if (color === "#FC427B") {
              setColor("black");
              setOpacity(0.5);
            } else {
              setColor("#FC427B");
              setOpacity(1);
            }
          }}
          style={{  opacity, color, fontSize: "30px" }}
          id="favourites"
        />
      </div>
      <div className="info-div">
        <p
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "18px",
            marginTop: "10px",
          }}
        >
          <StarIcon />
          {data.rating}
          <span
            style={{
              color: "gray",
            }}
          >
            &nbsp; . {data.country}
          </span>
        </p>
        <h4
          style={{
            fontWeight: "normal",
            fontSize: "22px",
            width: "300px",
            lineHeight: "25px",
            marginTop: "10px",
            marginBottom: 0,
          }}
        >
          {data.title}
        </h4>
        <p
          style={{
            fontSize: "20px",
            marginTop: "10px",
          }}
        >
          <strong>From &#8377;{data.price.toLocaleString()}</strong>/person
        </p>
      </div>
    </div>
  );
};

export default Tiles;
