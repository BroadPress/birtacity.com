import React from "react";
import image1 from "../assets/Homepage/Sectionsecond/image1.png";
import image2 from "../assets/Homepage/Sectionsecond/image2.png";
import image3 from "../assets/Homepage/Sectionsecond/image3.png";
import image4 from "../assets/Homepage/Sectionsecond/image4.png";
import image5 from "../assets/Homepage/Sectionsecond/image5.png";
import image6 from "../assets/Homepage/Sectionsecond/image6.png";
import image7 from "../assets/Homepage/Sectionsecond/image7.png";
import image8 from "../assets/Homepage/Sectionsecond/image8.png";
import arrow from "../assets/icons/arrow.svg";

import profile1 from "../assets/Homepage/Sectionsecond/profile1.png";
import profile2 from "../assets/Homepage/Sectionsecond/profile2.png";

const newsLeft = [
	{
		img: image3,
		title: "रूसको कीवमाथि हवाई आक्रमण: १८ जनाको मृत्यु",
		desc: "रूसले २८ अगस्ट २०२५ मा युक्रेनको राजधानी कीवमा हवाई आक्रमण गरेको छ, जसमा १८ जनाको मृत्यु भएको छ र ४८ जना घाइते भएका छन्",
	},
	{
		img: image4,
		title: "युक्रेनले १८ देखि २२ वर्षका पुरुषलाई विदेश जान अनुमति दियो",
		desc: "रूसको पूर्ण आक्रमणपछि पहिलो पटक युक्रेनले १८ देखि २२ वर्षका पुरुषलाई २९ अगस्ट २०२५ देखि विदेश जान अनुमति दिएको",
	},
	{
		img: image8,
		title: "युरोपले इरानमाथि आणविक कार्यक्रमको कारण प्रतिबन्ध पुनः लागू गर्दै",
		desc: "संयुक्त अधिराज्य, फ्रान्स र जर्मनीले २०१५ को आणविक सम्झौताअनुसार इरानमाथि लगाइएका सबै प्रतिबन्ध पुनः",
	},
];

const newsRight = [
	{
		img: image6,
		title: "चीनमा रुस र उत्तर कोरियाका नेतासँग सैन्य परेड",
		desc: "चीनका राष्ट्रपति शी जिनपिङले ८० औं द्वितीय विश्वयुद्धको अन्त्यको सम्झनामा रुसका राष्ट्रपति भ्लादिमिर पुटिन र उत्तर कोरियाका",
	},
	{
		img: image7,
		title: "अमेरिकामा डाक सेवामा अवरोध: नयाँ ट्यारिफ नियमको प्रभाव",
		desc: "अमेरिकामा डोनाल्ड ट्रम्पको प्रशासनले $८०० भन्दा कम मूल्यका प्याकेजमाथि ट्यारिफ हटाउने नियम हटाएपछि विश्वभरका डाक",
	},
	{
		img: image8,
		title: "इन्डोनेसियामा संसद सदस्यहरूको विशेषाधिकारको विरोधमा प्रदर्शन",
		desc: "इन्डोनेसियामा संसद सदस्यहरूको आवास भत्ताको विरोधमा देशभरि प्रदर्शन भएको छ। यस भत्ताले न्यूनतम तलबको लगभग १० गुणा बढी",
	},
];

const Secondsection = () => {
	return (
		<div className="mt-10 flex flex-col gap-10">
			{/* Top Section */}
			<div className="lg:flex-row flex flex-col gap-6">
				<div className=" flex flex-col  gap-6 border border-t-black border-x-0 border-b-0 py-6 w-full lg:w-[75%]">
					<div className="font-bold text-lg">खेलकुदसम्बन्धी समाचार</div>
					<div className="lg:flex-row flex flex-col gap-6">
						<div className="flex flex-col gap-6 lg:w-[30%] ">
							<div className="flex flex-col gap-4">
								<div className=" flex flex-col gap-2">
									<p className="font-bold text-md">
										विकासको नयाँ युगमा नेपाली खेलकुद
									</p>
									<p className="text-md">
										आधुनिक प्रविधिको प्रयोगले नेपाली खेलाडीहरूको शारीरिक र
										मानसिक तयारीमा ठूलो परिवर्तन ल्याएको छ। ।
									</p>
								</div>
								<div className=" flex flex-col gap-3">
									<p className="font-bold text-md">
										क्रिकेटर द्वय भट्ट र रावललाई आजीवन छात्रवृत्ति
									</p>
									<p className="text-md">
										क्रिकेट नगरीका रूपमा परिचित धनगढीमा अवस्थित एसपीए कलेजले
										सुदूरपश्चिमका गौरवशाली युवा 
									</p>
								</div>
								<div className="flex flex-col gap-3">
									<p className="font-bold text-md">
										ओलम्पिक खेलहरूमा नेपालको सहभागिता र सम्भावना
									</p>
									<p className="text-md">
										ओलम्पिक खेलहरू विश्वका सबैभन्दा प्रतिष्ठित खेल प्रतियोगिता
										हुन् 
									</p>
								</div>
							</div>
						</div>
						{/* Middle Image */}
						<div className="flex flex-col gap-1 lg:w-[70%] w-full">
							<img
								src={image1}
								alt="Nepali sports"
								className="aspect-video rounded-[20px] object-cover"
							/>
							<p className="text-end text-xs">
								LOIC VENANCE/AFP via Getty images
							</p>
							<p className="text-md font-bold">
								विकासको नयाँ युगमा नेपाली खेलकुद
							</p>
						</div>
					</div>
				</div>

				{/* Third Image */}
				<div
					className="w-full lg:w-[30%] bg-cover bg-center relative rounded-[20px] aspect-[16/9] overflow-hidden"
					style={{ backgroundImage: `url(${image2})` }}
				>
					<div className="absolute bottom-5 left-5 px-4">
						<p className="text-md text-white mt-2 font-bold">
							किन जुगनुहरू यो गर्मीमा जतातततै देखिन्छन्?
						</p>
						<div className="text-sm text-white flex flex-col ">
							<div className="flex gap-3 items-center ">
								<img src={profile1} alt="" className="h-5 w-5 rounded-full" />
								<p>टेलर रोबिन्सन</p>
							</div>
							<div className="flex gap-3 items-center ">
								<img src={profile2} alt="" className="h-5 w-5 rounded-full" />
								<p>युवराज खन्ना</p>
							</div>

							<p>२०२५ जुलाई १९</p>
						</div>
					</div>
				</div>
			</div>

			{/* News Section  */}
			<div className="lg:flex gap-7   ">
				<div className="flex flex-col lg:w-1/2 gap-7">
					{newsLeft.map((item, index) => (
						<div key={index} className="lg:flex-row flex flex-col gap-8">
							<img
								src={item.img}
								alt=""
								className="lg:w-[148px] lg:h-[72px] w-full rounded-[5px] aspect-video"
							/>
							<div className="flex flex-col gap-3 justify-around ">
								<p className="font-bold text-sm">{item.title}</p>
								<p className="text-md text-justify line-clamp-2">{item.desc}</p>
							</div>
						</div>
					))}
				</div>

				<div className="flex flex-col lg:w-1/2 gap-7">
					{newsRight.map((item, index) => (
						<div key={index} className="lg:flex-row flex flex-col gap-8">
							<img
								src={item.img}
								alt=""
								className="lg:w-[148px] lg:h-[72px] w-full rounded-[5px] aspect-video"
							/>
							<div className="flex flex-col gap-3 justify-around ">
								<p className="font-bold text-sm">{item.title}</p>
								<p className="text-md text-justify line-clamp-2">{item.desc}</p>
							</div>
						</div>
					))}
				</div>
			</div>

			
			<div className="text-sm flex gap-3 justify-center font-bold">
				<p>थप समाचार </p>
				<img src={arrow} alt="" className="" />
			</div>
		</div>
	);
};

export default Secondsection;
