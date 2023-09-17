import React from "react";
import NavBar from "../features/navbar/Navbar";
import UserProfile from "../features/user/components/UserProfile";

const UserProfilePage = () => {
	return (
		<NavBar>
			<h1 className="text-2xl mx-auto">My Profile</h1>
			<UserProfile />
		</NavBar>
	);
};

export default UserProfilePage;
