import React from "react";
import image1 from "../assets/Categories/Prabidhi/image1.jpg";
import image2 from "../assets/Categories/Prabidhi/image2.jpg";
import image3 from "../assets/Categories/Prabidhi/image3.jpg";
import image4 from "../assets/Categories/Prabidhi/image4.jpg";

const Prabadhi = () => {
	const article = [
		{
			image: image1,
			date: "प्रविधि - २९ अगस्ट, २०२५",
			title: "सम्बन्ध: कृत्रिम उपग्रह प्रविधिमा नेपालको प्रगति",
			desc: "नेपालले आफ्नै सानो उपग्रह प्रविधि विकास गर्ने तयारी गरेको छ। यसले मौसम पूर्वानुमान, दुरसञ्चार र कृषि क्षेत्रमा ठूलो योगदान पुर्‍याउने अपेक्षा गरिएको छ।",
		},
		{
			image: image2,
			date: "प्रविधि - २२ जनवरी, २०२४",
			title: "सम्बन्ध: कृत्रिम बुद्धिमत्ताद्वारा सरकारी सेवा सहज",
			desc: "सरकारले एआई प्रविधि प्रयोग गरेर नागरिकता, राहदानी र करसम्बन्धी सेवा छिटो र पारदर्शी बनाउने घोषणा गरेको छ।",
		},
		{
			image: image3,
			date: "प्रविधि - २२ जनवरी, २०२४",
			title: "सम्बन्ध: ई–कमर्स बजारमा तीव्र वृद्धि",
			desc: "अनलाइन किनमेल गर्ने प्रयोगकर्ताको संख्या तीव्र गतिमा बढ्दै गएको छ। यसले स्थानीय व्यवसायलाई डिजिटल बजारतर्फ उन्मुख बनाइरहेको छ।",
		},
		{
			image: image4,
			date: "प्रविधि - २२ जनवरी, २०२४",
			title: "सम्बन्ध: शिक्षा क्षेत्रमा भर्चुअल रियलिटी प्रयोग",
			desc: "विद्यालय तथा विश्वविद्यालयहरूमा भर्चुअल रियलिटी प्रयोग बढ्दै गएको छ। यसले विद्यार्थीलाई प्रत्यक्ष अनुभवमार्फत सिकाइमा मद्दत गरिरहेको छ।",
		},
	];

	return (
		<div className="flex flex-col mt-10 gap-10">
			{/* Header */}
			<div className="flex justify-between py-2">
				<div className="flex flex-col gap-2">
					<p className="text-lg font-bold">प्रविधि</p>
					<p className="text-sm text-[#8B8B8B]">
						हाम्रा लेख, अन्तर्वार्ता, र सृजनात्मक परियोजनाहरूको अभिलेख अन्वेषण
						गर्नुहोस्
					</p>
				</div>

				
			</div>

			
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
				{article.map((item, index) => (
					<div
						key={index}
						className="flex flex-col gap-2 p-2 rounded-[15px]"
					>
						<p className="text-sm font-bold">{item.date}</p>
						<p className="text-md font-bold line-clamp-1">{item.title}</p>
						<img
							src={item.image}
							alt={item.title}
							className="aspect-video rounded-[15px] object-cover"
						/>
						<p className="text-md  text-gray-700 line-clamp-3">{item.desc}</p>
					</div>
				))}
			</div>

			
		</div>
	);
};

export default Prabadhi;
