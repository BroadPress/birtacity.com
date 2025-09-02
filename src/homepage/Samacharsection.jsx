import React from "react";
import image1 from "../assets/Homepage/Samachar/image1.png";
import image2 from "../assets/Homepage/Samachar/image2.png";
import image3 from "../assets/Homepage/Samachar/image3.png";
import image4 from "../assets/Homepage/Samachar/image4.png";
import image5 from "../assets/Homepage/Samachar/image5.png";
import profile1 from "../assets/Homepage/Samachar/profile1.png";
import time from "../assets/icons/time.svg";
import tag from "../assets/icons/tag.svg";
import arrow from "../assets/icons/arrow.svg";
import profile from "../assets/icons/profile.svg";
const Samacharsection = () => {
	return (
		<div className="mt-10 flex flex-col gap-10">
			{/* First section */}
			<p className="text-lg font-bold">समाचार</p>
			<div className="flex gap-5 ">
				<img src={image1} alt="" className="aspect-video rounded-md w-1/2" />
				<div className="flex flex-col gap-3 justify-around w-1/2">
					<div className="flex gap-3">
						<img src={profile1} alt="" className="h-5 w-5 rounded-full" />
						<p>Biratinfo</p>
					</div>
					<p className="text-xs font-bold">४ घण्टा अघि अपडेट गरिएको</p>
					<p className="teext-xs">
						सर्ट्स प्रयोगकर्ताहरूका लागि अर्को रोचक समाचार नयाँ एआई प्रभावहरू
						हुन्। यी प्रभावहरूको प्रयोग गरेर, तपाईं आफ्नो डूडलहरू (हातले बनाएका
						स्केचहरू) पूर्ण कलात्मक फोटोमा रूपान्तरण गर्न सक्नुहुन्छ।सर्ट्स
						प्रयोगकर्ताहरूका लागि अर्को रोचक समाचार नयाँ एआई प्रभावहरू हुन्। यी
						प्रभावहरूको प्रयोग गरेर, तपाईं आफ्नो डूडलहरू (हातले बनाएका स्केचहरू)
						पूर्ण कलात्मक फोटोमा रूपान्तरण गर्न सक्नुहुन्छ।
					</p>
					<div className="flex gap-7">
						<div className="flex gap-2">
							<img src={time} alt="" className="src" />
							<p className="text-xs">३ मिनेटमा पढ्नुहोस्</p>
						</div>
						<div className="flex gap-2">
							<img src={tag} alt="" className="src" />
							<p className="text-xs">प्रविधि</p>
						</div>
					</div>
				</div>
			</div>
			{/* Saptahik prabidhi */}
			<div className="flex flex-col gap-10">
				<div className="text-lg font-bold border border-b-[#00000033] border-x-0 border-t-0 py-7">
					साप्ताहिक प्रविधि
				</div>
				<div className="flex gap-4 justify-end">
					<p className="font-bold text-sm">सबै हेर्नुहोस्</p>
					<img src={arrow} alt="" className="src" />
				</div>
				<div className="flex gap-7">
					{/* First Image */}
					<div className="w-[40%]">
						<div
							className="bg-cover bg-center relative rounded-[20px] aspect-[16/9] overflow-hidden flex-[2]"
							style={{ backgroundImage: `url(${image2})` }}
						>
							<div className="absolute bottom-5 left-5 px-4">
								
								<p className="text-md text-white mt-2 font-bold">
									नेपालीहरूमा स्टार्टअपको उत्साह
								</p>
							</div>
						</div>
					</div>

					{/* Second Image */}
					<div className="w-[20%]">
						<div
							className="bg-cover bg-center relative rounded-[20px] h-full overflow-hidden"
							style={{ backgroundImage: `url(${image3})` }}
						>
							<div className="absolute bottom-5 left-5 px-4">
								
								<p className="text-md text-white mt-2 font-bold">
									नेपालीहरूमा स्टार्टअपको उत्साह
								</p>
							</div>
						</div>
					</div>
					{/* Third images */}
					<div className="flex flex-col gap-4 w-[40%] h-auto">
						<div
							className="bg-cover bg-center relative rounded-[20px] h-1/2 overflow-hidden"
							style={{ backgroundImage: `url(${image4})` }}
						>
							<div className="absolute bottom-5 left-5 px-4">
								
								<p className="text-md text-white mt-2 font-bold">
									नेपालीहरूमा स्टार्टअपको उत्साह
								</p>
							</div>
						</div>
						<div
							className="bg-cover bg-center relative rounded-[20px] h-1/2 overflow-hidden"
							style={{ backgroundImage: `url(${image5})` }}
						>
							<div className="absolute bottom-5 left-5 px-4">
					
								<p className="text-md text-white mt-2 font-bold">
									किन बन्दैछ नेपाल अपराधीहरूको सुरक्षित ठाउँ
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Samacharsection;
