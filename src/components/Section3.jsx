import React, { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Hosts } from "../Assets/Data";
import Tiles from "./Tiles";

const Section3 = () => {
  const [left, setLeft] = useState(true);
  const [right, setRight] = useState(false);
  function scroll(direction) {
    const b = document.querySelector("#tiler");
    if (direction === "left") {
      b.scrollLeft -= 1000;
      setLeft(true);
      setRight(false);
    } else {
      b.scrollLeft += 1000;
      setLeft(false);
      setRight(true);
    }
  }

  return (
    <div className="setion-1" style={{ marginBottom: "55px" }}>
      <section className="a">
        <h1
          style={{
            fontSize: "1.8rem",
            fontWeight: "700",
            color: "#2d3436",
            marginBottom: "30px",
          }}
        >
          Plan a trip with help from local Hosts around the world
        </h1>
        <div>
          <button
            disabled={left}
            onClick={() => scroll("left")}
            className="slid-button"
            style={{ marginRight: "12px" }}
          >
            <KeyboardArrowLeftIcon style={{ fontSize: "25px" }} />
          </button>
          <button
            disabled={right}
            onClick={() => scroll("right")}
            className="slid-button"
          >
            <KeyboardArrowRightIcon style={{ fontSize: "25px" }} />
          </button>
        </div>
      </section>
      <section className="b" id="tiler">
        {Hosts.map((data) => {
          return <Tiles data={data} />;
        })}
      </section>
    </div>
  );
};

export default Section3;
