import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
// import Cookies from "js-cookie";
import CheckForm from "../components/CheckForm.js";
import React from "react";
import { useLocation } from "react-router-dom";
import "../assets/CSS/CheckForm.css";

const Payment = () => {
  const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");
  // const token = Cookies.get("userToken");
  const location = useLocation();
  const { title, price } = location.state;

  console.log(" location : ", location.state);

  return (
    <div className="form-contain-check">
      <div>
        <h1>formulaire de paiment</h1>
        <Elements stripe={stripePromise}>
          <CheckForm title={title} price={price} />
        </Elements>
      </div>
    </div>
  );
};
export default Payment;
