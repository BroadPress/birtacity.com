import React, { useState, useEffect } from "react";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import linkdin from "../assets/icons/linkdin.svg";
import pinterest from "../assets/icons/pinterest.svg";
import twitter from "../assets/icons/twitter.svg";
import birtacity from "../assets/icons/birtacity.svg";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";

const Navbar = () => {
	const [hamIcon, setHamIcon] = useState(false);
	const [isMenuFixed, setIsMenuFixed] = useState(false);
	const [active, setActive] = useState("होमपेज");
	const [activeSearch, setActiveSearch] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 600) {
				setIsMenuFixed(true);
			} else {
				setIsMenuFixed(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="flex flex-col gap-6 ">
			{/*Desktop Top bar */}
			<div className="hidden lg:flex justify-between items-center">
				<div className="flex gap-3">
					<img src={facebook} alt="facebook" />
					<img src={instagram} alt="instagram" />
					<img src={twitter} alt="twitter" />
					<img src={linkdin} alt="linkedin" />
					<img src={pinterest} alt="pinterest" />
				</div>
				<div className="flex gap-8 items-center text-[#055D59] text-[19px]">
					{/* <input
						type="text"
						placeholder="Search..."
						className="px-3 py-1 border rounded-lg focus:outline-none focus:ring-0 focus:border-[#055D59] "
					/> */}
					<div className="text-center">Sign in</div>
					<div className="border text-sm py-2 px-4 bg-[#055D59] text-white font-bold rounded">
						Write a post
					</div>
				</div>
			</div>

			{/* Mobile top bar */}
			<div className="flex lg:hidden justify-between items-center px-4">
				<div className="flex flex-col justify-center items-center gap-3">
					<img src={birtacity} alt="logo" className="w-40" />
					<div className="text-xs text-[#055D59] flex gap-2">
						<div>23 June 2025</div>
						<div>( ९ असार २०८२, सोमवार )</div>
					</div>
				</div>
				<div className="flex gap-2">
					<div className="text-[#055D59] tesxt-xs">Sign in</div>
					<button
						className="text-[#055D59] text-2xl"
						onClick={() => setHamIcon(!hamIcon)}
					>
						{hamIcon ? <FaTimes /> : <FaBars />}
					</button>
				</div>
			</div>

			<div className=" hidden lg:flex flex-col items-center gap-4 justify-center">
				<img src={birtacity} alt="logo" className="hidden lg:block w-96" />
				<div className="text-[16px] lg:text-[18px] text-[#055D59] flex gap-2">
					<div>23 June 2025</div>
					<div>( ९ असार २०८२, सोमवार )</div>
				</div>
			</div>

			{/* Desktop Menu */}

			<div
				className={`hidden lg:flex ${
					isMenuFixed
						? "fixed top-0 left-0 w-full z-50 bg-white shadow-md "
						: ""
				} border border-[#055D59] border-x-0 justify-center transition-all duration-300`}
			>
				<div className="flex gap-6 lg:gap-2 items-center text-sm font-bold text-[#055D59] overflow-x-auto whitespace-nowrap">
					<div
						className={`hidden lg:flex ${
							isMenuFixed
								? "fixed top-0 left-0 w-full z-50 bg-white shadow-md "
								: ""
						}  justify-center transition-all duration-300`}
					>
						<div className="flex gap-6 lg:gap-0 items-center text-sm font-bold text-[#055D59] overflow-x-auto whitespace-nowrap">
							<div
								onClick={() => setActive("होमपेज")}
								className={`py-2 px-3 cursor-pointer hover:bg-blue-300 ${
									active === "होमपेज" ? "bg-blue-500 text-white" : ""
								}`}
							>
								होमपेज
							</div>
							<div
								onClick={() => setActive("राजनीति")}
								className={`py-2 px-3 cursor-pointer hover:bg-blue-300 ${
									active === "राजनीति" ? "bg-blue-500 text-white" : ""
								}`}
							>
								राजनीति
							</div>
							<div
								onClick={() => setActive("प्रविधि")}
								className={`py-2 px-3 cursor-pointer hover:bg-blue-300 ${
									active === "प्रविधि" ? "bg-blue-500 text-white" : ""
								}`}
							>
								प्रविधि
							</div>
							<div
								onClick={() => setActive("साहित्य")}
								className={`py-2 px-3 cursor-pointer hover:bg-blue-300 ${
									active === "साहित्य" ? "bg-blue-500 text-white" : ""
								}`}
							>
								साहित्य
							</div>
							<div
								onClick={() => setActive("अर्थ")}
								className={`p-2 px-3 cursor-pointer hover:bg-blue-300 ${
									active === "अर्थ" ? "bg-blue-500 text-white" : ""
								}`}
							>
								अर्थ
							</div>
							<div
								onClick={() => setActive("सम्पादकीय")}
								className={`py-2 px-3 cursor-pointer hover:bg-blue-300 ${
									active === "सम्पादकीय" ? "bg-blue-500 text-white" : ""
								}`}
							>
								सम्पादकीय
							</div>
							<div
								onClick={() => setActive("बिचार")}
								className={`py-2 px-3 cursor-pointer hover:bg-blue-300 ${
									active === "बिचार" ? "bg-blue-500 text-white" : ""
								}`}
							>
								बिचार
							</div>
							<div
								onClick={() => setActive("खेलकुद")}
								className={`py-2 px-3 cursor-pointer hover:bg-blue-300 ${
									active === "खेलकुद" ? "bg-blue-500 text-white" : ""
								}`}
							>
								खेलकुद
							</div>
							<div
								onClick={() => setActive("रोजगार")}
								className={`py-2 px-3 cursor-pointer hover:bg-blue-300 ${
									active === "रोजगार" ? "bg-blue-500 text-white" : ""
								}`}
							>
								रोजगार
							</div>
							<div
								onClick={() => setActive("मनोरंजन")}
								className={`py-2 px-3 cursor-pointer hover:bg-blue-300 ${
									active === "मनोरंजन" ? "bg-blue-500 text-white" : ""
								}`}
							>
								मनोरंजन
							</div>
							<div
								onClick={() => setActive("सुरक्षा")}
								className={`py-2 px-3 cursor-pointer hover:bg-blue-300 ${
									active === "सुरक्षा" ? "bg-blue-500 text-white" : ""
								}`}
							>
								सुरक्षा
							</div>
							<div
								onClick={() => setActive("अन्य")}
								className={`py-2 px-3 cursor-pointer hover:bg-blue-300 ${
									active === "अन्य" ? "bg-blue-500 text-white" : ""
								}`}
							>
								अन्य
							</div>
							<div
								onClick={() => setActiveSearch(!activeSearch)}
								className="py-2 px-3 cursor-pointer"
							>
								<FaSearch />
							</div>
						</div>
					</div>
				</div>
			</div>
			{activeSearch && (
				<div className="flex relative flex-col -top-6 bg-gray-300 px-2 py-1 ">
					<div className="flex gap-5">
						<input
							type="text"
							placeholder="लेखकको नाम"
							className=" text-md px-4 py-1 rounded-full focus:outline-none bg-white"
						/>
					</div>
				</div>
			)}

			{/* Trending section */}
			<div className="border border-[#055D59] border-x-0 flex items-center text-sm font-bold overflow-hidden">
				<div className="w-[20%] md:w-[15%] lg:w-[10%] text-white bg-[#055D59] text-center px-4 py-2 text-xs lg:text-sm">
					Trending
				</div>
				<div className="w-[80%] overflow-hidden">
					<div className="flex gap-10 animate-marquee whitespace-nowrap items-center text-xs lg:text-sm">
						<p>Historic climate change agreement</p>
						<div className="h-2 w-2 bg-[#055D59] rounded-full"></div>
						<p>Tech giants are tackling a major cyber security breach.</p>
						<div className="h-2 w-2 bg-[#055D59] rounded-full"></div>
						<p>Financial Market experiences a huge loss</p>
						<div className="h-2 w-2 bg-[#055D59] rounded-full"></div>
						<p>Historic climate change agreement</p>
						<div className="h-2 w-2 bg-[#055D59] rounded-full"></div>
						<p>Tech giants are tackling a major cyber security breach.</p>
						<div className="h-2 w-2 bg-[#055D59] rounded-full"></div>
						<p>Financial Market experiences a huge loss</p>
						<div className="w-10"></div>
					</div>
				</div>
			</div>

			{/* Mobile Dropdown Menu */}
			{hamIcon && (
				<div
					className={`fixed top-0 left-0 flex flex-col gap-4 w-2/3 h-full bg-[#055D59] p-10  transform transition-transform duration-500 ease-in-out z-10 ${
						hamIcon ? "translate-x-0" : "-translate-x-full"
					}`}
				>
					<div className=" flex justify-end">
						<FaTimes
							onClick={() => setHamIcon(!hamIcon)}
							size={22}
							color="white"
						/>
					</div>
					<div className="flex flex-col gap-4 text-white font-bold text-sm">
						<div>होमपेज</div>
						<div>राजनीति</div>
						<div>प्रविधि</div>
						<div>साहित्य</div>
						<div>अर्थ</div>
						<div>सम्पादकीय</div>
						<div>बिचार</div>
						<div>खेलकुद</div>
						<div>रोजगार</div>
						<div>मनोरंजन</div>
						<div>सुरक्षा</div>
						<div>अन्य</div>
						<div className="font-bold  w-fit">Write a post</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Navbar;
