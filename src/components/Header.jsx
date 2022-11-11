import React from "react";
import "./Header.css";
import airbnb from "../Assets/airbnb.svg";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = ({displaySetter}) => {
  
  return (
    <div className="nav">
      <img id="logo" src={airbnb} height="40px" alt="" />
      <div className="host">
        <h3
          style={{ fontWeight: "500", color: "#2d3436", padding: "13px 10px" }}
        >
          Become a host
        </h3>
        <LanguageIcon id="icon" style={{ padding: "10px 12px" }} />
        <button
          style={{
            display: "flex",
            alignItems: "center",
            paddingLeft: "10px",
            borderRadius: "50px",
            border: "1.5px solid #ddd",
            backgroundColor: "white",
          }}

          onClick={displaySetter}
        >
          <span style={{ marginRight: "10px" }}>
            <MenuIcon style={{ widht: "60px" }} />
          </span>
          <span>
            <AccountCircleIcon style={{ fontSize: "43px", color: "#2d3436" }} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Header;
