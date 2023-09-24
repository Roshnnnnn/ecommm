import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
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
import { fetchItemsByUserIdAsync } from "./features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser } from "./features/auth/authSlice";
import { fetchLoggedInUserAsync } from "./features/user/userSlice";
import Logout from "./features/auth/components/Logout";
import PageNotFound from "./pages/404";
import AdminHome from "./pages/AdminHome";
import UserOrdersPage from "./pages/UserOrdersPage";
import UserProfilePage from "./pages/UserProfilePage";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import AdminProductDetailPage from "./pages/AdminProductDetailPage";
import ProtectedAdmin from "./features/auth/components/ProtectedAdmin";
import AdminProductFormPage from "./pages/AdminProductFormPage";
import AdminOrdersPage from "./pages/AdminOrdersPage";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
	timeout: 5000,
	position: positions.BOTTOM_LEFT,
};

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<Protected>
				<Home />
			</Protected>
		),
	},
	{
		path: "/admin",
		element: (
			<ProtectedAdmin>
				<AdminHome />
			</ProtectedAdmin>
		),
	},
	{
		path: "/admin/product-detail/:id",
		element: (
			<ProtectedAdmin>
				<AdminProductDetailPage />
			</ProtectedAdmin>
		),
	},
	{
		path: "/admin/product-form",
		element: (
			<ProtectedAdmin>
				<AdminProductFormPage />
			</ProtectedAdmin>
		),
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
		element: (
			<Protected>
				<ProductDetailPage />
			</Protected>
		),
	},
	{
		path: "/admin/product-detail/:id",
		element: (
			<ProtectedAdmin>
				<AdminProductDetailPage />
			</ProtectedAdmin>
		),
	},
	{
		path: "/admin/orders",
		element: (
			<ProtectedAdmin>
				<AdminOrdersPage />
			</ProtectedAdmin>
		),
	},
	{
		path: "/admin/product-form/edit/:id",
		element: (
			<ProtectedAdmin>
				<AdminProductFormPage></AdminProductFormPage>
			</ProtectedAdmin>
		),
	},
	{
		path: "/order-success/:id",
		element: (
			<Protected>
				<OrderSuccessPage />
			</Protected>
		),
	},
	{
		path: "/orders",
		element: (
			<Protected>
				<UserOrdersPage />
			</Protected>
		),
	},
	{
		path: "/profile",
		element: (
			<Protected>
				<UserProfilePage />
			</Protected>
		),
	},
	{
		path: "/logout",
		element: <Logout />,
	},
	{
		path: "/reset-password",
		element: <ResetPasswordPage />,
	},
	{ path: "/forgot-password", element: <ForgotPasswordPage /> },
	{
		path: "*",
		element: (
			<>
				<PageNotFound />
			</>
		),
	},
]);

function App() {
	const dispatch = useDispatch();
	const user = useSelector(selectLoggedInUser);

	useEffect(() => {
		if (user) {
			dispatch(fetchItemsByUserIdAsync(user.id));
			dispatch(fetchLoggedInUserAsync(user.id));
		}
	}, [dispatch, user]);

	return (
		<div className="App">
			<Provider template={AlertTemplate} {...options}>
				<RouterProvider router={router} />
			</Provider>
		</div>
	);
}

export default App;
