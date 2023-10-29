import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";

import CheckoutForm from "./CheckoutForm";
import "../Stripe.css";
import { selectCurrentOrder } from "../features/order/orderSlice";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
	"pk_test_51LS5KhSA2eW7tOKacrogxAKKov7BySlOpvF3VI0DdgS9Ko2SNzDc8Hmq3XyRZhR8aN3eGK5yec0RXm9Sznv8IYMx00M96iCwet"
);

export default function StripeCheckout() {
	const [clientSecret, setClientSecret] = useState("");
	const currentOrder = useSelector(selectCurrentOrder);

	useEffect(() => {
		// Create PaymentIntent as soon as the page loads
		fetch("/create-payment-intent", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				totalAmount: currentOrder.totalAmount,
				orderId: currentOrder.id,
			}),
		})
			.then((res) => res.json())
			.then((data) => setClientSecret(data.clientSecret));
	}, []);

	const appearance = {
		theme: "stripe",
	};
	const options = {
		clientSecret,
		appearance,
	};

	return (
		<div className="Stripe">
			{clientSecret && (
				<Elements options={options} stripe={stripePromise}>
					<CheckoutForm />
				</Elements>
			)}
		</div>
	);
}
