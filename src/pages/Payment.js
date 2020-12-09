import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "../stripe.css";
import StripeCheckout from "../components/StripeCheckout";

const promise = loadStripe(
  "pk_test_51Hv84qJWbCwT2jyaJarTv3pAOjsWdOoXL4p29CVvZlJzSrfnEVqpm8HzD2GBBUBhL5QMcKdeX7spoxZuZKj8WYmS00qiGDILZH"
);

function Payment() {
  return (
    <div className="container p-5 text-center">
      <h4>Complete your purchase</h4>
      <Elements stripe={promise}>
        <div className="col-md-8 offset-md-2">
          <StripeCheckout />
        </div>
      </Elements>
    </div>
  );
}

export default Payment;
