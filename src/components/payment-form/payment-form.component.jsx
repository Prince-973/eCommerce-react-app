import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  PaymentButton,
  FormContainer,
  PaymentFormContainer,
} from "./payment-form.style";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";

function PaymentForm() {
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector((state) => state.user.currentUser);
  const stripe = useStripe();
  const elements = useElements(); // Corrected variable name
  const [isProcessigpayment, setIsProcessingPaymnet] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsProcessingPaymnet(true);
    const res = await fetch("/.netlify/functions/create-payment-intent", {
      // Updated URL
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amount * 100,
        description: "Export of software services",
      }),
    });

    const data = await res.json(); // Added error handling
    if (!res.ok) {
      console.error("Payment error:", data.error);
      return;
    }
    const {
      paymentIntent: { client_secret },
    } = data;
    // console.log(client_secret);

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });
    setIsProcessingPaymnet(false); // Corrected function call
    if (paymentResult.error) {
      console.log(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment successful");
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment</h2>
        <CardElement />
        <PaymentButton
          isLoading={isProcessigpayment}
          disabled={isProcessigpayment}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
        >
          Pay Now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
}

export default PaymentForm;
