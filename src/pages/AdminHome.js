import AdminProductList from "../features/admin/components/AdminProductList";
import NavBar from "../features/navbar/Navbar";

function AdminHome() {
	return (
		<div>
			<NavBar>
				<AdminProductList />
			</NavBar>
			Foot
		</div>
	);
}

export default AdminHome;
