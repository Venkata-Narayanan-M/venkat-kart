import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KUKyHSBhYVZIxLNHNrBilWh5gZHmkHVKLbovu453GgrbxLXOXa9BFIV7zZjvA019FTfFWCMI2OHxfWSfqbyOygS00MGqD6QjT";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Venkat Kart"
      billingAddresss
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
