import React from "react";
import image1 from "../assets/Homepage/Thapkathaharu/image1.png";
import image2 from "../assets/Homepage/Thapkathaharu/image2.png";
import image3 from "../assets/Homepage/Thapkathaharu/image3.png";
import image4 from "../assets/Homepage/Thapkathaharu/image4.png";
import image5 from "../assets/Homepage/Thapkathaharu/image5.png";
import image6 from "../assets/Homepage/Thapkathaharu/image6.jpg";
import image7 from "../assets/Homepage/Thapkathaharu/image7.jpg";
import image8 from "../assets/Homepage/Thapkathaharu/image8.jpg";
import image9 from "../assets/Homepage/Thapkathaharu/image9.jpg";
import image10 from "../assets/Homepage/Thapkathaharu/image10.jpg";
import image11 from "../assets/Homepage/Thapkathaharu/image11.png";
import arrleft from '../assets/icons/arrleft.svg'
import arrright from '../assets/icons/arrright.svg'
import profile from "../assets//Homepage/Samachar/profile1.png"
const Thapkathaharu = () => {
	const leftItems = [
		{
			image: image1,
			title:
				"साप्ताहिक घर बिक्री: ब्याकयार्ड ओएसिससहितको स्वान्सी क्याप $६८१केमा बिक्री भयो",
			category: "रियल इस्टेट",
		},
		{
			image: image8,
			title:
				"मोंटिग्नीले सहायक–बसोबास सुविधा सुरक्षा सम्बन्धी विस्तृत प्रतिवेदन मागे",
			category: "समाचार",
		},
		{
			image: image3,
			title: "सबै स्कोलास्टिक्स: उच्च विद्यालय बेसबल",
			category: "बेसबल",
		},
		{
			image: image10,
			title:
				"मोंटिग्नीले सहायक–बसोबास सुविधा सुरक्षा सम्बन्धी विस्तृत प्रतिवेदन मागे",
			category: "समाचार",
		},
		{
			image: image7,
			title:
				"मोंटिग्नीले सहायक–बसोबास सुविधा सुरक्षा सम्बन्धी विस्तृत प्रतिवेदन मागे",
			category: "समाचार",
		},
	];

	const rightItems = [
		{
			image: image9,
			title: "फल रिभर मिल विकासकर्ताले भन्छन्: हाउसिङ बजारमा ‘मोमेंटम’ देखियो",
			category: "रियल इस्टेट",
		},
		{
			image: image7,
			title: "खरीदारी सम्झौता र उत्पादन सिफारिसहरू",
			category: "खरीदारी",
		},
		{
			image: image8,
			title:
				"प्रमुख समाचार: रेल्वे पाईले सोमरसट ट्रेन रूपान्तरण गर्यो, चाँडै खुल्न तयार",
			category: "स्थानीय",
		},
		{
			image: image9,
			title: "खरीदारी सम्झौता र उत्पादन सिफारिसहरू",
			category: "खरीदारी",
		},
		{
			image: image10,
			title: "खरीदारी सम्झौता र उत्पादन सिफारिसहरू",
			category: "रियल खरीदारी",
		},
	];

	const renderItems = (items) =>
		items.map((item, index) => (
			<div key={index} className="flex gap-5">
				<img
					src={item.image}
					alt=""
					className="w-[120px] h-[89px] rounded-[5px]"
				/>
				<div className="flex flex-col gap-2 justify-around">
					<p className="font-bold text-sm">{item.title}</p>
					<p className="text-xs">{item.category}</p>
				</div>
			</div>
		));

	return (
		<div className="flex flex-col gap-10 mt-10">
			<div className="flex items-center gap-7">
				<span className="font-bold text-black">थप कथाहरू</span>
				<div className="w-[55%] border-t border-black"></div>
			</div>
			<div className="flex gap-6 items-stretch">
				<div className="flex gap-6 p-4 w-[65%]">
					<div className="flex gap-6 justify-between">
						<div className="flex flex-col gap-8">{renderItems(leftItems)}</div>
					</div>
					<div className="flex gap-6">
						<div className="flex flex-col gap-8">{renderItems(rightItems)}</div>
					</div>
				</div>
				<div className="w-[35%] bg-[#FFFFFF] flex flex-col p-4 border gap-8 ">
					<div className="flex justify-between items-center">
						<div className="text-lg font-bold">
							सबैभन्दा धेरै हेरिएका समाचार
						</div>
						<div className="flex gap-5">
							<img src={arrleft} alt="" />
							<img src={arrright} alt="" />
						</div>
					</div>
					<img src={image11} alt="" className="aspect-video rounded-[15px]" />
					<div className="flex gap-15 justify-center items-center">
						<div className="bg-[#D9D9D9] px-7 py-2 text-sm font-bold rounded-md">
							प्रविधि
						</div>
						<p className="font-bold text-xs">२४ फेब्रुअरी २०२०</p>
					</div>
					<p className="font-bold text-md text-center">
						कसरी स्थानले बढी प्रासंगिक खोज परिणाम दिन मद्दत गर्दछ
					</p>
					<p className="text-xs text-center">
						स्थानले खोज परिणामलाई बढी प्रासंगिक बनाउँछ किनभने यसले
						प्रयोगकर्ताको हालको स्थानअनुसार नजिकका सेवा, पसल वा सुविधा
						प्राथमिकतामा देखाउँछ। यसले स्थानीय सन्दर्भ, मौसम, समय र ट्राफिक
						अवस्थासँग मिलेर उपयोगी र व्यवहारिक जानकारी प्रदान गर्छ। 
					</p>
					<div className="flex justify-center items-center gap-4">
						<img src={profile} alt="" className="h-5 w-5 rounded-full" />
						<p className="text-[#4B4B4B] text-sm">लेखक: मिरान्डा एच. हलीम</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Thapkathaharu;
