import React from "react";
import Navbar from "../features/navbar/Navbar";
import UserOrders from "../features/user/components/UserOrders";

const UserOrdersPage = () => {
	return (
		<Navbar>
			<h1 className="text-2xl m-auto">My orders</h1>
			<UserOrders />
		</Navbar>
	);
};

export default UserOrdersPage;
