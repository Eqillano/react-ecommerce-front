import axios from "axios";

const REACT_APP_API = "/api";

export const createPaymentIntent = (authtoken, coupon) =>
  axios.post(
    `${REACT_APP_API}/create-payment-intent`,
    { couponApplied: coupon },
    {
      headers: {
        authtoken,
      },
    }
  );
