import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { createRoot } from "react-dom/client";
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Link,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import ProductDetailPage from "./pages/ProductDetailPage";
import Protected from "./features/auth/components/Protected";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/login",
		element: <LoginPage />,
	},
	{
		path: "/signup",
		element: <SignupPage />,
	},
	{
		path: "/cart",
		element: (
			<Protected>
				<CartPage />
			</Protected>
		),
	},
	{
		path: "/checkout",
		element: (
			<Protected>
				<Checkout />
			</Protected>
		),
	},
	{
		path: "/product-detail/:id",
		element: <ProductDetailPage />,
	},
]);

function App() {
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
