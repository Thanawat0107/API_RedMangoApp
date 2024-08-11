import React from 'react'
import { useLocation } from "react-router-dom";

export default function Payment() {
  const {
    state: { apiResult, userInput },
  } = useLocation();

  console.log(apiResult);
  console.log(userInput);

  return <div>Payment</div>;
}
