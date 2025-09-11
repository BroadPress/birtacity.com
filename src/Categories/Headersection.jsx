import React from "react";
import image1 from "../assets/Categories/Headers/image1.png";
import image2 from "../assets/Categories/Headers/image2.png";
import image3 from "../assets/Categories/Headers/image3.png";
import image4 from "../assets/Categories/Headers/image4.png";
import image5 from "../assets/Categories/Headers/image5.png";
const Headersection = () => {
	return (
		<div className=" mt-10 flex flex-col lg:flex-row gap-8">
			<div className="flex flex-col gap-3 lg:w-1/2">
				<div className="flex flex-col gap-2">
					<img src={image1} alt="" className="aspect-video rounded-[15px]" />
					<div className="text-xs text-[#4B4B4B]">
						म्याडी म्यागार्भे/द वाशिङ्टन पोस्टका लागि
					</div>
				</div>
				<p className="text-md font-bold line-clamp-1">
					उनीहरूले एउटा घरमा ठूलो खर्च गरे। त्यसपछि उनीहरूको अमेरिकी सपना भत्किन
					थाले।
				</p>
				<p className="text-md text-[#4B4B4B] line-clamp-2">
					ओहियोको स्प्रिंगफिल्डमा रहेका हाइटियन परिवारका लागि, चेस्टनट एभेन्यूको
					घर यस देशमा उनीहरूको भविष्यको प्रतिनिधित्व गर्थ्यो। अहिले उनीहरू
					सोच्दै छन् कि के बचाउन सकिन्छ।
				</p>
				<p className="text-xs text-[#4B4B4B]">१ घण्टा अघि</p>
			</div>
			<div className="lg:flex-row flex flex-col lg:w-1/2 gap-8">
				<div className="flex flex-col gap-4 lg:w-1/2">
					<div className="flex flex-col gap-2">
						<img src={image2} alt="" className="aspect-video rounded-[15px]" />
						<p className="text-md font-bold line-clamp-2">
							क्यारोलिन ह्याक्स च्याट:"मेरो श्रीमान्को हत्यारालाई केवल सजायको
							झट्का मात्र भयो। म न्याय चाहन्छु।"
						</p>
						<p className="text-xs text-[#4B4B4B]">१८ घण्टा अघि</p>
					</div>
					<div className="flex flex-col gap-2">
						<img src={image4} alt="" className="aspect-video rounded-[15px]" />
						<p className="text-md font-bold line-clamp-2">
							ट्रम्पका अधीनस्थहरूले एप्स्टिन पोन्जी योजना चलाए। अब बैंक रन सुरु
							भयो।
						</p>
						<p className="text-xs text-[#4B4B4B]">१८ घण्टा अघि</p>
					</div>
				</div>
				<div className="flex flex-col gap-4 lg:w-1/2">
					<div className="flex flex-col gap-2">
						<img src={image3} alt="" className="aspect-video rounded-[15px]" />
						<p className="text-md font-bold line-clamp-2">
							ट्रम्पले भने, उनले आफ्नो जीवनमा कहिल्यै कुनै चित्र लेखेका छैनन्।"
							यहाँ चार उदाहरणहरू छन्।
						</p>
						<p className="text-xs text-[#4B4B4B]">१५ घण्टा अघि</p>
					</div>
					<div className="flex flex-col gap-2">
						<img src={image5} alt="" className="aspect-video rounded-[15px]" />
						<p className="text-md font-bold line-clamp-2">
							विदेश विभागका कर्मचारी कटौती बाहिरका टोलीद्वारा सञ्चालित, जो
							'चीजहरू तोड्न तयार' थिए।
						</p>
						<p className="text-xs text-[#4B4B4B]">१ घण्टा अघि</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Headersection;
