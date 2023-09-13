import React, { useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { selectCount } from "./cartSlice";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link, Navigate } from "react-router-dom";
import {
	deleteItemFromCartAsync,
	selectItems,
	updateCartAsync,
} from "./orderSlice";

const Cart = () => {
	const dispatch = useDispatch();

	return (
		<div>
			<div></div>
		</div>
	);
};

export default Cart;
