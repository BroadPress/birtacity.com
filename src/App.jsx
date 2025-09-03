import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage";
import Navbar from '../src/components/Navbar'
import Footer from "./components/Footer";

function App() {
	return (
		<div className="">
			<div className=" px-6 py-3 md:px-14 md:py-7 ">
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</div>
			<Footer/>
		</div>
	);
}

export default App;
