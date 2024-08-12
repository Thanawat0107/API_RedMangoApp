import React from 'react'
import { useLocation } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { PaymentForm } from "../Components/Page/Payment";
import { OrderSummary } from "../Components/Page/Order";

const stripePromise = loadStripe(
  "pk_test_51P8zpLIwR8EpO71EF784dHKiY8YSwkizYywbXJq44oscWJXL3rqGHa8saQqKOEcTFBgr239jrKs8fjDxRbSDGQln00qbf0eLG5"
);

export default function Payment() {
  const {
    state: { apiResult, userInput },
  } = useLocation();

  const options = {
    // passing the client secret obtained from the server
    clientSecret: apiResult.clientSecret,
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <div className="container m-5 p-5">
        <div className="row">
          <div className="col-md-7">
          <OrderSummary data={apiResult} userInput={userInput} />
          </div>
          <div className="col-md-4 offset-md-1">
            <h3 className="text-success">Payment</h3>
            <div className="mt-5">
              <PaymentForm data={apiResult} userInput={userInput} />
            </div>
          </div>
        </div>
      </div>
    </Elements>
  );
}
