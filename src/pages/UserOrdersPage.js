import React from "react";
import UserOrders from "../features/user/components/UserOrders";
import NavBar from "../features/navbar/Navbar";

const UserOrdersPage = () => {
	return (
		<NavBar>
			<h1 className="text-2xl mx-auto">My Orders</h1>
			<UserOrders />
		</NavBar>
	);
};

export default UserOrdersPage;
