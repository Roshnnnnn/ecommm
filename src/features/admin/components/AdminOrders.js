import { useEffect, useState } from "react";
import { ITEMS_PER_PAGE } from "../../../app/constants";
import { useDispatch, useSelector } from "react-redux";
import {
	fetchAllOrdersAsync,
	selectOrders,
	selectTotalOrders,
	updateOrderAsync,
} from "../../order/orderSlice";
import {
	PencilIcon,
	EyeIcon,
	ArrowUpIcon,
	ArrowDownIcon,
} from "@heroicons/react/24/outline";
import Pagination from "../../common/Pagination";

const AdminOrders = () => {
	return <div>AdminOrders</div>;
};

export default AdminOrders;
