import "./Section2.css";
import { tags } from "../Assets/Data";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const Section2 = () => {
  function scroll(direction) {
    const tags = document.querySelector(".tags");

    if (direction === "left") {
      tags.scrollLeft -= 400;
    } else {
      tags.scrollLeft += 400;
    }
  }
  return (
    <div className="section-2">
      <div className="toggle">
        <span className="filter">Dates</span>
        <span className="filter">Group Size</span>
        <span className="filter">More filters</span>
      </div>

      <div className="tag-div">
        <button
          onClick={() => scroll("left")}
          className="slid-button"
          style={{ marginRight: "12px" }}
        >
          <KeyboardArrowLeftIcon style={{ fontSize: "25px" }} />
        </button>
        <div className="tags">
          {tags.map((tag) => {
            return <span className="tag-spans">{tag}</span>;
          })}
        </div>

        <button onClick={() => scroll("right")} className="slid-button">
          <KeyboardArrowRightIcon style={{ fontSize: "25px" }} />
        </button>
      </div>
    </div>
  );
};

export default Section2;
