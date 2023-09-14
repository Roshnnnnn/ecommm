import React, { useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { fetchLoggedInUserAsync } from "../userSlice";

const UserProfile = () => {
	const dispatch = useDispatch();

	return (
		<div>
			<div></div>
		</div>
	);
};

export default UserProfile;
