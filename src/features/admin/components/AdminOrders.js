import { useEffect, useState } from "react";
import { ITEMS_PER_PAGE, discountedPrice } from "../../../app/constants";
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
	const [page, setPage] = useState(1);
	const dispatch = useDispatch();
	const orders = useSelector(selectOrders);
	const totalOrders = useSelector(selectTotalOrders);
	const [editableOrderId, setEditableOrderId] = useState(-1);
	const [sort, setSort] = useState({});

	const handleEdit = (order) => {
		console.log("Edit");
	};

	const handleShow = () => {
		console.log("Show");
	};

	useEffect(() => {
		const pagination = { _page: page, _limit: ITEMS_PER_PAGE };
		dispatch(fetchAllOrdersAsync({ sort, pagination }));
	}, [dispatch, page, sort]);
	return (
		<div>
			<>
				{/* component */}
				<div className="overflow-x-auto">
					<div className=" bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
						<div className="w-full ">
							<div className="bg-white shadow-md rounded my-6">
								<table className="min-w-max w-full table-auto">
									<thead>
										<tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
											<th className="py-3 px-6 text-left">Order</th>
											<th className="py-3 px-6 text-left">Items</th>
											<th className="py-3 px-6 text-center">Total Amount</th>
											<th className="py-3 px-6 text-center">
												Shipping Address
											</th>
											<th className="py-3 px-6 text-center">Status</th>
											<th className="py-3 px-6 text-center">Actions</th>
										</tr>
									</thead>
									<tbody className="text-gray-600 text-sm font-light">
										{orders.map((order, id) => (
											<tr
												key={id}
												className="border-b border-gray-200 hover:bg-gray-100"
											>
												<td className="py-3 px-6 text-left whitespace-nowrap">
													<div className="flex items-center">
														<div className="mr-2"></div>
														<span className="font-medium">{order.id}</span>
													</div>
												</td>
												<td className="py-3 px-6 text-left">
													{order.items.map((item) => (
														<div className="flex items-center">
															<div className="mr-2">
																<img
																	className="w-6 h-6 rounded-full"
																	src={item.thumbnail}
																/>
															</div>
															<span>
																{item.title} - #{item.quantity}- $
																{discountedPrice(item)}
															</span>
														</div>
													))}
												</td>

												<td className="py-3 px-6 text-center">
													<div className="flex items-center justify-center">
														${order.totalAmount}
													</div>
												</td>
												<td className="py-3 px-6 text-left whitespace-nowrap">
													<div className="flex items-center">
														<div className="mr-2"></div>
														<span className="font-medium">
															<div>
																<strong>{order.selectedAddress.name}</strong>,
															</div>
															<div>{order.selectedAddress.street},</div>
															<div>{order.selectedAddress.city},</div>
															<div>{order.selectedAddress.state},</div>
															<div>{order.selectedAddress.pinCode},</div>
															<div>{order.selectedAddress.phone},</div>
														</span>
													</div>
												</td>
												<td className="py-3 px-6 text-center">
													<span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
														{order.status}
													</span>
												</td>
												<td className="py-3 px-6 text-center">
													<div className="flex item-center justify-center">
														<div className="w-6 mr-4 transform hover:text-purple-500 hover:scale-120">
															<EyeIcon
																className="w-6 h-6"
																onClick={(e) => handleShow(order)}
															/>
														</div>
														<div className="w-6 mr-2 transform hover:text-purple-500 hover:scale-120">
															<PencilIcon
																className="w-6 h-6"
																onClick={(e) => handleEdit(order)}
															/>
														</div>
														<div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"></div>
													</div>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</>
		</div>
	);
};

export default AdminOrders;
