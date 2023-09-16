import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUserInfo, updateUserAsync } from "../userSlice";
import { useForm } from "react-hook-form";

const UserProfile = () => {
	const dispatch = useDispatch();
	const userInfo = useSelector(selectUserInfo);

	const {
		register,
		handleSubmit,
		reset,
		setValue,
		formState: { errors },
	} = useForm();

	const handleEdit = (e, index) => {};

	const handleRemove = (e, index) => {
		const newUser = { ...userInfo, addresses: [...userInfo.addresses] };
		newUser.addresses.splice(index, 1);
		dispatch(updateUserAsync(newUser));
	};

	const handleEditForm = () => {};

	const handleAdd = () => {};

	return (
		<div>
			<div>
				<div className="mx-auto mt-12 bg-white max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="border-t border-gray-200 px-4 py-6 sm:px-6">
						<h1 className="text-4xl my-5 font-bold tracking-tight text-gray-900">
							Name: {userInfo.name ? userInfo.name : "New User"}
						</h1>
						<h3 className="text-xl my-5 font-bold tracking-tight text-red-900">
							Email : {userInfo.email}
						</h3>
					</div>

					<div className="border-t border-gray-200 px-4 py-6 sm:px-6">
						<p className="mt-0.5 text-sm text-gray-500">Your Address :</p>
						{userInfo.addresses.map((address, index) => (
							<div>
								<form
									className="bg-white px-5 py-12 mt-12"
									noValidate
									onSubmit={handleSubmit((data) => {
										console.log(data);
										dispatch(
											updateUserAsync({
												...user,
												addresses: [...user.addresses, data],
											})
										);
										reset();
									})}
								>
									<div className="space-y-12">
										<div className="border-b border-gray-900/10 pb-12">
											<h2 className="text-2xl font-semibold leading-7 text-gray-900">
												Personal Information
											</h2>
											<p className="mt-1 text-sm leading-6 text-gray-600">
												Use a permanent address where you can receive mail.
											</p>

											<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
												<div className="sm:col-span-4">
													<label
														htmlFor="name"
														className="block text-sm font-medium leading-6 text-gray-900"
													>
														Full name
													</label>
													<div className="mt-2">
														<input
															type="text"
															{...register("name", {
																required: "name is required",
															})}
															id="name"
															className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
														/>
													</div>
												</div>

												<div className="sm:col-span-4">
													<label
														htmlFor="email"
														className="block text-sm font-medium leading-6 text-gray-900"
													>
														Email address
													</label>
													<div className="mt-2">
														<input
															id="email"
															{...register("email", {
																required: "email is required",
															})}
															type="email"
															className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
														/>
													</div>
												</div>

												<div className="sm:col-span-3">
													<label
														htmlFor="phone"
														className="block text-sm font-medium leading-6 text-gray-900"
													>
														Phone
													</label>
													<input
														type="number"
														{...register("phone", {
															required: "phone is required",
														})}
														id="city"
														className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
													/>
													<div className="mt-2"></div>
												</div>

												<div className="col-span-full">
													<label
														htmlFor="street-address"
														className="block text-sm font-medium leading-6 text-gray-900"
													>
														Street address
													</label>
													<div className="mt-2">
														<input
															type="text"
															{...register("street", {
																required: "street is required",
															})}
															id="street"
															className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
														/>
													</div>
												</div>

												<div className="sm:col-span-2 sm:col-start-1">
													<label
														htmlFor="city"
														className="block text-sm font-medium leading-6 text-gray-900"
													>
														City
													</label>
													<div className="mt-2">
														<input
															type="text"
															{...register("city", {
																required: "city is required",
															})}
															id="city"
															className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
														/>
													</div>
												</div>

												<div className="sm:col-span-2">
													<label
														htmlFor="region"
														className="block text-sm font-medium leading-6 text-gray-900"
													>
														State / Province
													</label>
													<div className="mt-2">
														<input
															type="text"
															{...register("state", {
																required: "state is required",
															})}
															id="state"
															className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
														/>
													</div>
												</div>

												<div className="sm:col-span-2">
													<label
														htmlFor="postal-code"
														className="block text-sm font-medium leading-6 text-gray-900"
													>
														ZIP / Postal code
													</label>
													<div className="mt-2">
														<input
															type="text"
															{...register("pinCode", {
																required: "pinCode is required",
															})}
															id="pinCode"
															className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
														/>
													</div>
												</div>
											</div>
											<div className="mt-6 flex items-center justify-end gap-x-6">
												<button
													type="button"
													className="text-sm font-semibold leading-6 text-gray-900"
												>
													Reset
												</button>
												<button
													type="submit"
													className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
												>
													Add Address
												</button>
											</div>
										</div>

										<div className="border-b border-gray-900/10 pb-12">
											<h2 className="text-base font-semibold leading-7 text-gray-900">
												Adress
											</h2>
											<p className="mt-1 text-sm leading-6 text-gray-600">
												Choose from Existing address
											</p>

											<ul role="list">
												{user.addresses.map((address, index) => (
													<li
														w
														key={index}
														className="flex justify-between gap-x-6 py-5 px-5 border-solid border-2 border-gray-200"
													>
														<div className="flex min-w-0 gap-x-4">
															<input
																onChange={handleAddress}
																value={index}
																name="address"
																type="radio"
																className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
															/>
															<div className="min-w-0 flex-auto">
																<p className="text-sm font-semibold leading-6 text-gray-900">
																	{address.name}
																</p>
																<p className="mt-1 truncate text-xs leading-5 text-gray-500">
																	Address: {address.street}
																</p>
																<p className="mt-1 truncate text-xs leading-5 text-gray-500">
																	Pincode: {address.pincode}
																</p>
															</div>
														</div>
														<div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
															<p className="text-sm leading-6 text-gray-900">
																Phone: {address.phone}
															</p>
															<p className="mt-1 truncate text-xs leading-5 text-gray-500">
																{address.city}
															</p>
														</div>
													</li>
												))}
											</ul>

											<div className="mt-10 space-y-10">
												<fieldset>
													<legend className="text-sm font-semibold leading-6 text-gray-900">
														Payment Methods
													</legend>
													<p className="mt-1 text-sm leading-6 text-gray-600">
														Choose One
													</p>
													<div className="mt-6 space-y-6">
														<div className="flex items-center gap-x-3">
															<input
																id="cash"
																name="payments"
																// onChange={handlePayment}
																value="cash"
																type="radio"
																// checked={paymentMethod === "cash"}
																className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
															/>
															<label
																htmlFor="cash"
																className="block text-sm font-medium leading-6 text-gray-900"
															>
																Cash
															</label>
														</div>
														<div className="flex items-center gap-x-3">
															<input
																id="card"
																// onChange={handlePayment}
																name="payments"
																// checked={paymentMethod === "card"}
																value="card"
																type="radio"
																className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
															/>
															<label
																htmlFor="card"
																className="block text-sm font-medium leading-6 text-gray-900"
															>
																Card Payment
															</label>
														</div>
													</div>
												</fieldset>
											</div>
										</div>
									</div>
								</form>
								<div>
									<div className="flex justify-between gap-x-6 px-5 py-5 border-solid border-2 border-gray-200">
										<div className="flex gap-x-4">
											<div className="min-w-0 flex-auto">
												<p className="text-sm font-semibold leading-6 text-gray-900">
													{address.name}
												</p>
												<p className="mt-1 truncate text-xs leading-5 text-gray-500">
													{address.street}
												</p>
												<p className="mt-1 truncate text-xs leading-5 text-gray-500">
													{address.pinCode}
												</p>
											</div>
										</div>
										<div className="hidden sm:flex sm:flex-col sm:items-end">
											<p className="text-sm leading-6 text-gray-900">
												Phone: {address.phone}
											</p>
											<p className="text-sm leading-6 text-gray-500">
												{address.city}
											</p>
										</div>
										<div className="hidden sm:flex sm:flex-col sm:items-end">
											<button
												onClick={(e) => handleEdit(e, index)}
												type="button"
												className="font-medium text-indigo-600 hover:text-indigo-500"
											>
												Edit
											</button>
											<button
												onClick={(e) => handleRemove(e, index)}
												type="button"
												className="font-medium text-indigo-600 hover:text-indigo-500"
											>
												Remove
											</button>

											<p className="text-sm leading-6 text-gray-500">
												{address.city}
											</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
