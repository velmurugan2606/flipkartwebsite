import React from "react";
import flip from "./images/Flipkart.png";
import flipkart from "./images/plus.jpg";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Header.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import MoreT from "./MoreT";
import LoginT from "./LoginT";
import "tippy.js/themes/light.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header_first">
        <img src={flip}></img>
        <div className="header_first1">
          <span
            style={{
              fontSize: "11px",
              color: "white",
              fontStyle: "italic",
            }}
          >
            Explore
          </span>
          <span
            style={{
              color: "#f9e107",
              fontsize: "11px",
              fontstyle: "italic",
            }}
          >
            plus
          </span>
          <span>
            <img
              width="10"
              style={{ width: "20px", height: "15px" }}
              src={flipkart}
            ></img>
          </span>
        </div>
      </div>
      <div className="header_second">
        <input placeholder="search for products" type="text" />
        <SearchIcon />
      </div>
      <div className="header_third">
        <Tippy
          theme="light"
          content={<LoginT></LoginT>}
          interactive={true}
          offset={[5, 18]}
        >
          <button>Login</button>
        </Tippy>
      </div>
      <div className="header_fourth">
        <Tippy
          theme="light"
          content={<MoreT></MoreT>}
          interactive={true}
          offset={[5, 18]}
        >
          <span>More</span>
        </Tippy>
        <ExpandMoreIcon />
      </div>
      <div className="header_fifth">
        <ShoppingCartIcon />
        <p>Cart</p>
      </div>
    </div>
  );
};

export default Header;
