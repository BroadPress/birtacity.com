import React from "react";
import image1 from "../assets/Categories/Pramuk/image1.png";
import image2 from "../assets/Categories/Pramuk/image2.png";
import image3 from "../assets/Categories/Pramuk/image3.png";
import image4 from "../assets/Categories/Pramuk/image4.png";

import rightarr from "../assets/icons/arrright.svg";

const Pramuk = () => {
	const article = [
		{
			image: image1,
			date: "राजनीति - २२ जनवरी, २०२४",
			title: "सम्बन्ध: छिमेकी देशहरूसँगको वार्ता",
			desc: "उच्च स्तरका छलफलहरू अघि बढिरहेका छन्। आपसी सम्बन्ध सुधार र सहकार्यलाई थप सुदृढ बनाउने विषयमा निरन्तर वार्ता भइरहेको छ। दुवै पक्षबीच विश्वास अभिवृद्धि गर्ने, राजनीतिक ...",
			author: "लेखक: रमेश अधिकारी",
		},
		{
			image: image2,
			date: "समाज - २२ जनवरी, २०२४",
			title: "सीमावर्ती क्षेत्रमा सुरक्षा वार्ता",

			desc: "सीमावर्ती क्षेत्रमा बढ्दो सुरक्षा चुनौतीलाई मध्यनजर गर्दै दुवै पक्षबीच संयुक्त गस्ती र सूचना आदानप्रदान गर्ने सहमति भएको छ। यसले आपसी विश्वासलाई बलियो बनाउनेछ।",
			author: "लेखक: रमेश अधिकारी",
		},
		{
			image: image3,
			date: "प्रविधि - २२ जनवरी, २०२४",
			title: "सम्बन्ध: शिक्षा र संस्कृतिमा सहकार्य",

			desc: "छिमेकी मुलुकसँग शैक्षिक आदानप्रदान कार्यक्रम र सांस्कृतिक सहकार्य सुरु गर्ने निर्णय भएको छ। विद्यार्थी आदानप्रदान र भाषा अध्ययनले सम्बन्ध अझ प्रगाढ हुने अपेक्षा गरिएको छ ",
			author: "लेखक: रमेश अधिकारी",
		},
		{
			image: image4,
			date: "पर्यटन - २२ जनवरी, २०२४",
			title: "सम्बन्ध: पूर्वाधार विकासमा संयुक्त लगानी",

			desc: "दुवै मुलुकले सडक, जलविद्युत् र प्रविधि क्षेत्रमा संयुक्त लगानी गर्ने सहमति गरेका छन्। यसले दुवै राष्ट्रको आर्थिक प्रगतिमा योगदान पुर्‍याउने विश्वास गरिएको छ।",
			author: "लेखक: रमेश अधिकारी",
		},
	];
    return (
			<div className="flex flex-col mt-10 gap-10">
				<div className="flex justify-between border border-x-0 py-2">
					<p className="text-lg font-bold">प्रमुख</p>
					<div className="flex gap-2 items-center">
                    <p className="text-sm ">सबै हेर्नुहोस्</p>
                    <img src={rightarr} alt="" className="h-3 items-center" />
					</div>
            </div>
            <div className="grid grid-cols-4 gap-5">
                {article.map((article,index)=>(
                <div key={index} className="flex flex-col gap-2">
                        <p className="text-sm">{article.date}</p>
                        <p className="text-md font-bold">{article.title}</p>
                        <img src={article.image} alt="" className="aspect-video rounded-[15px]" />
                        <p className="text-md">{article.desc}</p>
                        <p className="text-sm font-bold">{article.author}</p>
                </div>
))}
            </div>
			</div>
		);
};

export default Pramuk;
