import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { fetchLoggedInUserOrderAsync, selectUserOrders } from "../userSlice";
import { selectLoggedInUser } from "../../auth/authSlice";
import { updateUser } from "../userAPI";

const UserOrders = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectLoggedInUser);
	const orders = useSelector(selectUserOrders);

	useEffect(() => {
		dispatch(fetchLoggedInUserOrderAsync(user.id));
	}, [dispatch]);

	return (
		<div>
			<div>
				{orders.map((order) => (
					<div>{order.id}</div>
				))}
			</div>
		</div>
	);
};

export default UserOrders;
