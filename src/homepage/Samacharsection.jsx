import React from "react";
import image1 from "../assets/Homepage/Samachar/image1.png";
import image2 from "../assets/Homepage/Samachar/image2.png";
import image3 from "../assets/Homepage/Samachar/image3.png";
import image4 from "../assets/Homepage/Samachar/image4.png";
import image5 from "../assets/Homepage/Samachar/image5.png";
import profile1 from "../assets/Homepage/Samachar/profile1.png";
import time from "../assets/icons/time.svg";
import tag from "../assets/icons/tag.svg";
import arrow from "../assets/icons/arrright.svg";
import profile from "../assets/icons/profile.svg";
const Samacharsection = () => {
	return (
		<div className="mt-10 flex flex-col gap-10">
			{/* First section */}
			<p className="text-lg font-bold">समाचार</p>
			<div className="lg:flex-row flex flex-col  gap-5 ">
				<img
					src={image1}
					alt=""
					className="aspect-video rounded-[15px] lg:w-1/2 w-full"
				/>
				<div className="flex flex-col gap-3  lg:w-1/2">
					<div className="flex gap-3">
						<img src={profile1} alt="" className="h-5 w-5 rounded-full" />
						<p>Biratinfo</p>
					</div>
					<p className="text-xs font-bold">४ घण्टा अघि अपडेट गरिएको</p>
					<div className="flex flex-col gap-2">
						<p className="text-md text-justify">
							सर्ट्स प्रयोगकर्ताहरूका लागि अर्को रोचक समाचार नयाँ एआई प्रभावहरू
							हुन्। यी प्रभावहरूको प्रयोग गरेर, तपाईं आफ्नो डूडलहरू (हातले
							बनाएका स्केचहरू) पूर्ण कलात्मक फोटोमा रूपान्तरण गर्न
							सक्नुहुन्छ।सर्ट्स प्रयोगकर्ताहरूका लागि अर्को रोचक समाचार नयाँ एआई
							प्रभावहरू हुन्। यी प्रभावहरूको प्रयोग गरेर, तपाईं आफ्नो डूडलहरू
							(हातले बनाएका स्केचहरू) पूर्ण कलात्मक फोटोमा रूपान्तरण गर्न
							सक्नुहुन्छ।यस्तैगरी, यी आधुनिक एआई उपकरणहरूले सिर्जनात्मक
							प्रक्रियालाई छिटो र सजिलो बनाउँछन्। ।
						</p>
						<p className="text-md text-justify">
							त्यसैगरी, नयाँ एआई टूलहरूले प्रयोगकर्ताहरूलाई अझ धेरै सिर्जनात्मक
							स्वतन्त्रता दिन्छन्। तपाईंले आफ्नो साधारण चित्र वा प्रारम्भिक
							डिज़ाइनहरूलाई प्रभावशाली एनिमेशन वा 3D शैलीमा रूपान्तरण गर्न
							सक्नुहुन्छ। यसले केवल कलात्मक अनुभवलाई समृद्ध बनाउँदैन, तर
							प्रयोगकर्ताहरूलाई आफ्नो सिर्जनात्मक विचारहरूलाई वास्तविकता जस्तो
							दृश्यात्मक रूपमा प्रस्तुत गर्ने अवसर पनि प्रदान गर्दछ।पहिले जहाँ
						</p>
					</div>

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
			<div className="flex flex-col gap-10 ">
				<div className="text-lg flex justify-between font-bold border border-b-[#00000033] border-x-0 border-t-0 py-5">
					<div>साप्ताहिक प्रविधि</div>
					<div className="flex gap-4 justify-end items-center">
						<p className="lg:font-bold text-sm">सबै हेर्नुहोस्</p>
						<img src={arrow} alt="" className="w-4 h-4" />
					</div>
				</div>

				<div className="flex flex-col lg:flex-row gap-7 lg:h-[470px] pr-12">
					{/* First Image */}
					<div className="w-full lg:w-[45%]">
						<div
							className="bg-cover bg-center relative rounded-[20px] w-full lg:h-full aspect-video overflow-hidden flex-[2]"
							style={{ backgroundImage: `url(${image2})` }}
						>
							<div className="absolute bottom-5 left-5 px-4">
								<p className="text-md text-white mb-4 font-bold">
									नेपालीहरूमा स्टार्टअपको उत्साह
								</p>
								<div className="flex gap-5 text-white">
									<div className="flex gap-3">
										<img
											src={profile}
											alt=""
											className="h-5 w-5 rounded-full"
										/>
										<p className="text-xs">सुधीर नेपाल</p>
									</div>
									<p className="text-xs">२३ दिन अघि</p>
								</div>
							</div>
						</div>
					</div>

					{/* Second Image */}
					<div className="w-full lg:w-[25%]">
						<div
							className="bg-cover bg-center relative rounded-[20px] w-full lg:h-full aspect-video overflow-hidden"
							style={{ backgroundImage: `url(${image3})` }}
						>
							<div className="absolute bottom-5 left-5 px-4">
								<p className="text-md text-white mb-4 font-bold">
									नेपालीहरूमा स्टार्टअपको उत्साह
								</p>
								<div className="flex gap-5 text-white">
									<div className="flex gap-3">
										<img
											src={profile}
											alt=""
											className="h-5 w-5 rounded-full"
										/>
										<p className="text-xs">सुधीर नेपाल</p>
									</div>
									<p className="text-xs">२३ दिन अघि</p>
								</div>
							</div>
						</div>
					</div>

					{/* Third Images */}
					<div className="flex flex-col gap-4 w-full lg:w-[30%] lg:h-auto">
						<div
							className="bg-cover bg-center relative rounded-[20px] w-full aspect-video lg:h-1/2 overflow-hidden"
							style={{ backgroundImage: `url(${image4})` }}
						>
							<div className="absolute bottom-5 left-5 px-4">
								<p className="text-md text-white mb-4 font-bold">
									नेपालीहरूमा स्टार्टअपको उत्साह
								</p>
								<div className="flex gap-5 text-white">
									<div className="flex gap-3">
										<img
											src={profile}
											alt=""
											className="h-5 w-5 rounded-full"
										/>
										<p className="text-xs">सुधीर नेपाल</p>
									</div>
									<p className="text-xs">२३ दिन अघि</p>
								</div>
							</div>
						</div>

						<div
							className="bg-cover bg-center relative rounded-[20px] w-full aspect-video lg:h-1/2 overflow-hidden"
							style={{ backgroundImage: `url(${image5})` }}
						>
							<div className="absolute bottom-5 left-5 px-4 items-center justify-center">
								<p className="text-md text-white mb-4 font-bold">
									किन बन्दैछ नेपाल अपराधीहरूको सुरक्षित ठाउँ
								</p>
								<div className="flex gap-5 text-white">
									<div className="flex gap-3">
										<img
											src={profile}
											alt=""
											className="h-5 w-5 rounded-full"
										/>
										<p className="text-xs">सुधीर नेपाल</p>
									</div>
									<p className="text-xs">२३ दिन अघि</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Samacharsection;
