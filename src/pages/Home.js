import React from "react";
import Navbar from "../features/navbar/Navbar";
import Product from "../features/product/Product";
import Footer from "../features/common/Footer";

const Home = () => {
	return (
		<div>
			<Navbar>
				<Product />
			</Navbar>
			<Footer />
		</div>
	);
};

export default Home;
