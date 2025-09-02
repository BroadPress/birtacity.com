import React from "react";
import image1 from "../assets/Homepage/prachalit/image1.png";
import image2 from "../assets/Homepage/prachalit/image2.png";
import image3 from "../assets/Homepage/prachalit/image3.png";
import time from "../assets/icons/time.svg";
import tag from "../assets/icons/tag.svg";
const Prachalitsection = () => {
	return (
		<div className="mt-10 flex flex-col gap-10 ">
			<p className="text-lg font-bold">प्रचलित</p>
			<div className="flex gap-6 h-[370px]">
				{/* LEFT SIDE */}
				<div className="flex flex-col w-1/2 gap-6 h-full">
					{[image1, image2].map((img, index) => (
						<div key={index} className="flex gap-4 h-[50%]">
							<img
								src={img}
								alt=""
								className="rounded-[20px] w-1/2 h-full object-cover"
							/>
							<div className="flex flex-col gap-3 justify-around w-1/2">
								<p className="font-bold">
									युवाहरूलाई इन्टरनेटमार्फत स्वरोजगारमा जोड्न सकिनेछ...
									स्वरोजगारमा जोड्न युवाहरू
								</p>
								<p className="text-xs">
									युवाहरूलाई इन्टरनेटमार्फत स्वरोजगारमा जोड्न सकिनेछ, जसले
									बेरोजगारी कम गर्नेछ। तर, डिजिटल परिवर्तनका लागि सरकारी नीति
									स्पष्ट, पहुँच सरल र शिक्षा प्रवाह व्यवस्थित हुन जरुरी
								</p>
								<div className="flex gap-4">
									<div className="flex gap-2">
										<img src={time} alt="" className="h-5 w-5" />
										<p className="text-xs">३ मिनेटमा पढ्नुहोस्</p>
									</div>
									<div className="flex gap-2">
										<img src={tag} alt="" className="h-5 w-5" />
										<p className="text-xs">प्रविधि</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* RIGHT SIDE */}
				<div className="w-1/2 h-full">
					<div
						className="bg-cover bg-center relative rounded-[20px] h-full overflow-hidden"
						style={{ backgroundImage: `url(${image3})` }}
					>
						<div className="absolute bottom-5 left-5 px-4">
							<p className="text-md text-white mt-2 font-bold">
								नेपाली चलचित्रको बढ्दो लोकप्रियता
							</p>
						</div>
						<div className="absolute bottom-5 right-5  w-fit">
							<p className="text-sm  rounded-xl px-7 py-2 bg-[#D9D9D9] ">
								थप पढ्नुहोस्
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Prachalitsection;
