import React from "react";
import fb from "../assets/icons/fbf.svg";
import twit from "../assets/icons/twitf.svg";
import yt from "../assets/icons/ytf.svg";
import insta from "../assets/icons/instaf.svg";
import note from "../assets/icons/note.svg";
import map from "../assets/icons/map.svg";
import phone from "../assets/icons/phone.svg";
import mesg from "../assets/icons/mesg.svg";
import playstore from '../assets/icons/playstore.svg'
import apple from '../assets/icons/apple.svg'
const Footer = () => {
	return (
		<div className="mt-10 bg-[#EBEBEB] py-6 px-7 md:px-0 flex flex-col gap-10 text-center">
			<div className="lg:flex-row flex flex-col lg:justify-around gap-10">
				{/* Company Information section */}
				<div className="flex flex-col gap-5 lg:w-1/4 items-start">
					<p className="text-md font-bold text-start">
						Birat Informatics Pvt. Ltd
					</p>
					<p className="text-md text-start ">
						BiratInfo एक अनलाइन समाचार पोर्टल हो, जसले नेपालको विराटनगर र
						आसपासका क्षेत्रहरूबाट स्थानीय, राष्ट्रिय र अन्तर्राष्ट्रिय समाचारहरु
						पाठकसम्म पुर्‍याउँछ।
					</p>
					<div className="flex gap-5">
						<img src={fb} alt="" className="src" />
						<img src={twit} alt="" className="src" />
						<img src={yt} alt="" className="src" />
						<img src={insta} alt="" className="src" />
					</div>
				</div>
				{/* Team section */}
				<div className="flex flex-col gap-8 text-start">
					<p className="text-md font-bold ">हाम्रो टीम</p>
					<div className="text-md flex gap-8">
						<div className="flex flex-col gap-5">
							<p>अध्यक्ष : </p>
							<p>सम्पादक :</p>
							<p>प्रविधि :</p>
							<p>डिजाइन :</p>
						</div>
						<div className="flex flex-col gap-5">
							<p>सुधीर नेपाल </p>
							<p>प्रकाश उप्रेती </p>
							<p>संजय खतिवडा:</p>
							<p>आस्था खड्का</p>
						</div>
					</div>
				</div>
				{/* Contact section */}
				<div className="flex flex-col gap-8 text-start">
					<p className="text-md font-bold ">सम्पर्क</p>

					<div className="flex flex-col gap-5">
						<div className="flex gap-4 text-md">
							<img src={note} alt="" className="w-4" />
							<p>DOIB # नं YYY-081/82</p>
						</div>
						<div className="flex gap-4 text-md">
							<img src={map} alt="" className="w-4" />
							<p>कमलपोखरी, काठमाडौं, नेपाल</p>
						</div>
						<div className="flex gap-4 text-md">
							<img src={phone} alt="" className="w-4" />
							<p>+977-98511-52774</p>
						</div>
						<div className="flex gap-4 text-md">
							<img src={mesg} alt="" className="w-4" />
							<p>info@biratinfo.com</p>
						</div>
					</div>
				</div>
				{/* Download section */}
				<div className="flex flex-col gap-5">
					<p className="text-md font-bold ">Download the App</p>
					<div className="lg:flex lg:flex-col flex justify-center gap-5">
						<img src={playstore} alt="" className="src" />
						<img src={apple} alt="" className="src" />
					</div>
				</div>
			</div>
			<div className="border border-x-0 border-b-0">
				<p className="text-md">
					All Rights Reserved. © 2025 SRIYOG Consulting Pvt. Ltd.Powered By
					Microsoft For Startups
				</p>
			</div>
		</div>
	);
};

export default Footer;
