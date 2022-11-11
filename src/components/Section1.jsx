import React, { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import "./Section1.css";
import { section1 } from "../Assets/Data";
import Poster from "./Poster";

const Section1 = () => {
  const [right, setRight] = useState(true);
  const [left, setLeft] = useState(false);
  function scroll(direction) {
    const b = document.querySelector(".b");

    if (direction === "left") {
      b.scrollLeft -= 700;
      setLeft(true);
      setRight(false);
    } else {
      b.scrollLeft += 700;
      setLeft(false);
      setRight(true);
    }
  }

  return (
    <div className="section-1" style={{ marginBottom: "55px" }}>
      <section className="a">
        <h1
          style={{ fontSize: "2.45rem", fontWeight: "700", color: "#2d3436" }}
        >
          New this week
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
      <section className="b">
        {section1.map((data) => {
          return <Poster data={data} />;
        })}
      </section>
    </div>
  );
};

export default Section1;
