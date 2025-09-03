import React from 'react'
import facebook from "../assets/icons/facebook.svg"
import instagram from "../assets/icons/instagram.svg"
import linkdin from "../assets/icons/linkdin.svg"
import pinterest from "../assets/icons/pinterest.svg"
import twitter from "../assets/icons/twitter.svg"
import birtacity from "../assets/icons/birtacity.svg"
const Navbar = () => {
    return (
			<div className="flex flex-col gap-16">
				<div className="flex justify-between items-center">
					<div className="flex gap-3">
						<img src={facebook} alt="" className="src" />
						<img src={instagram} alt="" className="src" />
						<img src={twitter} alt="" className="src" />
						<img src={linkdin} alt="" className="src" />
						<img src={pinterest} alt="" className="src" />
					</div>
					<div className="flex gap-8 items-center text-[#055D59] text-[19px]">
						<input
							type="text"
							placeholder="Search"
							className="px-3 py-1 border rounded-lg "
						/>
						<div className="text-center text-[#055D59] text-[19px]">
							Sign in
						</div>
						<div className="border py-2 px-4 bg-[#055D59] text-white font-bold ">
							{" "}
							Write a post
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center justify-center gap-6">
					<img src={birtacity} alt="" className="src" />
					<div className="text-[18px] text-[#055D59] flex gap-2">
						<div>23 June 2025</div>
						<div>( ९ असार २०८२, सोमवार )</div>
					</div>
				</div>
				<div className="flex flex-col gap-8">
					<div className=" border border-[#055D59] border-x-0 px-4 py-2 flex gap-9 items-center justify-center text-sm font-bold text-[#055D59]">
						<div>होमपेज </div>
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
					</div>
					<div className="border border-[#055D59] border-x-0 flex items-center text-sm font-bold overflow-hidden">
						<div className="w-[10%] text-white bg-[#055D59] text-center px-4 py-2 text-sm">
							Trending
						</div>

						<div className="w-[80%] overflow-hidden">
							<div className="flex gap-10 animate-marquee whitespace-nowrap items-center text-sm">
								<p>Historic climate change agreement</p>
								<div className="h-2 w-2 bg-[#055D59] rounded-full flex-shrink-0"></div>
								<p>Tech giants are tackling a major cyber security breach.</p>
								<div className="h-2 w-2 bg-[#055D59] rounded-full flex-shrink-0"></div>
								<p>Financial Market experiences a huge loss</p>
								<div className="h-2 w-2 bg-[#055D59] rounded-full flex-shrink-0"></div>

								<p>Historic climate change agreement</p>
								<div className="h-2 w-2 bg-[#055D59] rounded-full flex-shrink-0"></div>
								<p>Tech giants are tackling a major cyber security breach.</p>
								<div className="h-2 w-2 bg-[#055D59] rounded-full flex-shrink-0"></div>
								<p>Financial Market experiences a huge loss</p>
								<div className="w-10 flex-shrink-0"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
}

export default Navbar