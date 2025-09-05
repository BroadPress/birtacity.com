import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage";
import Navbar from '../src/components/Navbar'
import Footer from "./components/Footer";
import Categories from "./pages/Categories";
import Singlepage from "./pages/Singlepage";
import Team from "./pages/Team";
import Author from "./pages/Author";
import Contact from "./pages/Contact";

function App() {
	return (
		<div className="">
			<div className=" px-6 py-3 md:px-14 md:py-7 ">
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/categories" element={<Categories />} />
					<Route path="/singlepage" element={<Singlepage />} />
					<Route path="/team" element={<Team />} />
					<Route path="/author" element={<Author />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</div>
			<Footer/>
		</div>
	);
}

export default App;
