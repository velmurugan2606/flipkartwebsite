import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import StoreIcon from "@mui/icons-material/Store";
import "./LoginT.css";
import ValidatedLoginForm from "./ValidatedLoginForm";

const LoginT = () => {
  return (
    <div className="logint">
      <div className="logint__in">
        <h2>New Customer</h2>
        <a href="ValidatedLoginForm ">signup</a>
      </div>
      <hr />
      <div className="logint__in">
        <AccountCircleIcon />
        <p>My Profile</p>
      </div>
      <hr />
      <div className="logint__in">
        <img src="" alt="" />
        <p>Flipkart Plus</p>
      </div>
      <hr />
      <div className="logint__in">
        <StoreIcon />
        <p>Order</p>
      </div>
      <hr />
      <div className="logint__in">
        <FavoriteIcon />
        <p>Wishlist</p>
      </div>
      <hr />
      <div className="logint__in">
        <ConfirmationNumberIcon />
        <p>Rewards</p>
      </div>
      <hr />
      <div className="logint__in">
        <CardGiftcardIcon />
        <p>Gift Cards</p>
      </div>
      <hr />
    </div>
  );
};

export default LoginT;
