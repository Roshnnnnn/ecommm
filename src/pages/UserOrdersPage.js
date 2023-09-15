import React from "react";
import UserOrders from "../features/user/components/UserOrders";
import NavBar from "../features/navbar/Navbar";

const UserOrdersPage = () => {
	return (
		<NavBar>
			<UserOrders />
		</NavBar>
	);
};

export default UserOrdersPage;
