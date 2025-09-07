import React from "react";

import image1 from "../assets/Homepage/Lastsection/image1.png";
import image2 from "../assets/Homepage/Lastsection/image2.png";
import image3 from "../assets/Homepage/Lastsection/image3.png";
import image4 from "../assets/Homepage/Lastsection/image4.png";
import image5 from "../assets/Homepage/Lastsection/image5.png";
import image6 from "../assets/Homepage/Lastsection/image6.png";
import image7 from "../assets/Homepage/Lastsection/image7.png";
import image8 from "../assets/Homepage/Lastsection/image8.png";
import image9 from "../assets/Homepage/Lastsection/image9.png";
import image10 from "../assets/Homepage/Lastsection/image10.png";
import image11 from "../assets/Homepage/Lastsection/image11.png";
import image12 from "../assets/Homepage/Lastsection/image12.png";
import rightarr from '../assets/icons/arrright.svg'
const Lastsection = () => {
	const categories = ["पर्यटन", "राजनीति", "खेलकुद", "वातावरण"];

	const articles = [
		{
			image: image1,
			title: "पाटन दरबार क्षेत्रको सांस्कृतिक अनुभव",
			desc: "पाटन दरबार क्षेत्रले सम्पूर्ण नेवार संस्कृति र कलात्मक हस्तकला प्रदर्शन गर्दछ। यहाँको मन्दिर र संग्रहालयहरूले पर्यटकलाई सांस्कृतिक यात्रा प्रदान गर्छ।",
		},
		{
			image: image2,
			title: "काठमाडौं दरबार क्षेत्रको ऐतिहासिक यात्रा",
			desc: "नेपालको सांस्कृतिक राजधानी काठमाडौंको दरबार क्षेत्रले प्राचीन मठमन्दिर र वास्तुकलाको सुन्दरता प्रदर्शन गर्दछ। पर्यटकहरू यहाँको इतिहास र परम्परागत जीवनशैली अनुभव गर्न सक्छन्।",
		},
		{
			image: image3,
			title: "भक्तपुर दरबार क्षेत्रको जीवंत सांस्कृतिक दृश्य",
			desc: "भक्तपुर दरबार क्षेत्रमा रंगीन चाडपर्व र परम्परागत नाचगान पर्यटकलाई आकर्षित गर्छ। यहाँको सांस्कृतिक जीवंतता विशेष अनुभव दिन्छ।",
		},
		{
			image: image4,
			title: "भक्तपुरको मन्दिर र प्राचीन संरचना",
			desc: "भक्तपुरका मन्दिर र प्राचीन संरचनाले नेपालको वास्तुकला र ऐतिहासिक गौरवको परिचय दिन्छ। यहाँ पर्यटकहरूले शान्ति र सांस्कृतिक अनुभूति पाउँछन्।",
		},
		{
			image: image5,
			title: "पाटन दरबार क्षेत्रको सांस्कृतिक अनुभव",
			desc: "पाटन दरबार क्षेत्रले सम्पूर्ण नेवार संस्कृति र कलात्मक हस्तकला प्रदर्शन गर्दछ। यहाँको मन्दिर र संग्रहालयहरूले पर्यटकलाई सांस्कृतिक यात्रा प्रदान गर्छ।",
		},
		{
			image: image6,
			title: "पाटन दरबार क्षेत्रको सांस्कृतिक अनुभव",
			desc: "पाटन दरबार क्षेत्रले सम्पूर्ण नेवार संस्कृति र कलात्मक हस्तकला प्रदर्शन गर्दछ। यहाँको मन्दिर र संग्रहालयहरूले पर्यटकलाई सांस्कृतिक यात्रा प्रदान गर्छ।",
		},
		{
			image: image7,
			title: "पाटन दरबार क्षेत्रको सांस्कृतिक अनुभव",
			desc: "पाटन दरबार क्षेत्रले सम्पूर्ण नेवार संस्कृति र कलात्मक हस्तकला प्रदर्शन गर्दछ। यहाँको मन्दिर र संग्रहालयहरूले पर्यटकलाई सांस्कृतिक यात्रा प्रदान गर्छ।",
		},
		{
			image: image8,
			title: "पाटन दरबार क्षेत्रको सांस्कृतिक अनुभव",
			desc: "पाटन दरबार क्षेत्रले सम्पूर्ण नेवार संस्कृति र कलात्मक हस्तकला प्रदर्शन गर्दछ। यहाँको मन्दिर र संग्रहालयहरूले पर्यटकलाई सांस्कृतिक यात्रा प्रदान गर्छ।",
		},
		
    ];
     const article = [
				{
					image: image9,
					title:
						"स्याउ आयात बर्सेनि बढ्दो, कर्णालीको उत्पादनमा गुणस्तर बचाउने चुनौती",
					desc: "गएको साउनमा चीनबाट ७२ करोड ९९ लाख रुपैयाँको ५२ लाख ४३ हजार किलो र भारतबाट ३२ करोड ४४ लाख रुपैयाँको ४० लाख ५० हजार किलो स्याउ आयात भएको कृषि तथा पशुपन्छी विकास मन्त्रालयको तथ्यांक छ ।",
				},
				{
					image: image10,
					title: "११ महिनापछि मान्डु हाइड्रोबाट पूर्ण क्षमतामा बिजुली उत्पादन",
					desc: "हेटौंडा — गत वर्ष असोज ११ र १२ मा बागमतीको बाढीले क्षतिग्रस्त २२ मेगावाटको मान्डु हाइड्रोपावरले बिहीबारदेखि पूर्ण क्षमतामा पुनः विद्युत् उत्पादन थालेको छ । पुनर्निर्माण सकेर मान्डु हाइड्रोपावरले गत साउन १९ देखि ५० प्रतिशत विद्युत् उत्पादन सुरु गरेको थियो ।",
				},
				{
					image: image11,
					title: "गौरीघाटमा जलसतहले सतर्कता तह नाघ्यो, ठाउँठाउँमा वर्षा",
					desc: "काठमाडौँको गौरीघाट जलमापन केन्द्रमा बुधबार साँझ जलसतहले सतर्कता तह पार गरेको छ । जल तथा मौसम विज्ञान विभाग, मौसम पूर्वानुमान महाशाखाले बागमती नदी बढ्दो क्रममा रहेकाले, नदी तटीय क्षेत्रमा सतर्कता अपनाउने सार्वजनिक सूचनामार्फत अनुरोध गरेको छ ।",
				},
				{
					image: image12,
					title:
						"चारदिने रक्तदान कार्यक्रममा एघार हजार नौ सय १६ पिन्ट रगत संकलन",
					desc: "ब्रह्माकुमारी राजयोग सेवा केन्द्रले चारदिनमा ११ हजार ९१६ पिन्ट रक्त संकलन गरेको छ । यही भदौ ६ गतेदेखि आजसम्म देशको विभिन्न स्थानमा गरिएका रक्तदान कार्यक्रममार्फत उक्त परिमाणमा रक्त संकलन गरिएको सो संस्थाद्वारा जारी प्रेस विज्ञप्तिमा उल्लेख छ ।",
				},
			];


	return (
		<div className="mt-10 flex flex-col gap-10">
			{/* Categories */}
			<div className="border-b flex">
				{categories.map((cat, index) => (
					<button
						key={index}
						className="lg:px-8 px-5 py-2 text-sm border-r font-bold last:border-r-0 
                       hover:bg-gray-100 focus:bg-gray-200"
					>
						{cat}
					</button>
				))}
			</div>

			{/* Articles Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				{articles.map((article, idx) => (
					<div key={idx} className="flex flex-col gap-2">
						<img
							src={article.image}
							alt={article.title}
							className="aspect-video object-cover rounded-[15px]"
						/>
						<p className="text-md font-bold">{article.title}</p>
						<p className="text-md text-[#00000099] text-justify">{article.desc}</p>
					</div>
				))}
			</div>
			{/* Bottom articles part */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
				{article.map((article, idx) => (
					<div
						key={idx}
						className="flex flex-col gap-3 bg-[#D9D9D9] py-5 px-3 rounded-[10px]"
					>
						<img
							src={article.image}
							alt={article.title}
							className="aspect-video rounded-[15px] object-cover"
						/>
						<p className="text-md font-bold">{article.title}</p>
						<p className="text-md line-clamp-5">{article.desc}</p>
						<div className="flex justify-end items-end gap-2">
							<p className="text-xs">See more</p>
							<img src={rightarr} alt="arrow" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Lastsection;
