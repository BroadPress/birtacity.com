import React from "react";
import image1 from "../assets/Categories/Prachalit/image5.png";
import image2 from "../assets/Categories/Prachalit/image6.png";
import image3 from "../assets/Categories/Prachalit/image7.png";
import image4 from "../assets/Categories/Prachalit/image8.png";
import rightarr from "../assets/icons/arrright.svg";

const Prachalit = () => {
	const article = [
		{
			image: image1,
			date: "राजनीति - २२ जनवरी, २०२४",
			title: "सम्बन्ध: नयाँ गठबन्धन सरकारको घोषणा",

			desc: "देशको राजनीतिक परिदृश्यमा ठूलो परिवर्तन आउँदैछ। प्रमुख दलहरूबीच नयाँ गठबन्धनको सहमति भएको छ जसले आगामी नीति तथा कार्यक्रमलाई प्रत्यक्ष प्रभाव पार्नेछ",
			author: "लेखक: जोन डो",
		},
		{
			image: image2,
			date: "राजनीति - २२ जनवरी, २०२४",
			title: "सीमावर्ती क्षेत्रमा सुरक्षा वार्ता",

			desc: "विद्यालय तथा विश्वविद्यालयहरूमा अनलाइन शिक्षण प्रणालीलाई अनिवार्य रूपमा लागू गर्ने निर्णय सरकारले गरेको छ। यसले विद्यार्थीलाई आधुनिक प्रविधि–मैत्री बनाउने अपेक्षा गरिएको छ।",
			author: "लेखक: जोन डो",
		},
		{
			image: image3,
			date: "राजनीति - २२ जनवरी, २०२४",
			title: "सम्बन्ध: शिक्षा र संस्कृतिमा सहकार्य",

			desc: "नेपालमा पहिलोपटक ६G प्रविधिको परीक्षण सुरु भएको छ। यसले इन्टरनेट स्पीडलाई नयाँ स्तरमा पुर्‍याउने र डिजिटल सेवा अझ छिटो र भरपर्दो बनाउने दाबी गरिएको छ।",
			author: "लेखक: जोन डो",
		},
		{
			image: image4,
			date: "राजनीति - २२ जनवरी, २०२४",
			title: "सम्बन्ध: पूर्वाधार विकासमा संयुक्त लगानी",

			desc: "पर्यटन मन्त्रालयले आगामी वर्ष २० लाख पर्यटक भित्र्याउने महत्वाकांक्षी योजना सार्वजनिक गरेको छ। हिमाल, संस्कृति र साहसिक पर्यटनमार्फत रोजगारी र आयस्रोत बढाउने उद्देश्य राखिएको छ।",
			author: "लेखक: जोन डो",
		},
	];
	return (
		<div className="flex flex-col mt-10 gap-10">
			<div className="flex justify-between border border-x-0 py-2">
				<p className="text-lg font-bold">प्रचलित</p>
				<div className="flex gap-2 items-center">
					<p className="text-sm ">सबै हेर्नुहोस्</p>
					<img src={rightarr} alt="" className="h-3 items-center" />
				</div>
			</div>
			<div className="grid grid-cols-4 gap-5">
				{article.map((article, index) => (
					<div key={index} className="flex flex-col gap-2">
						<p className="text-sm">{article.date}</p>
						<p className="text-md font-bold">{article.title}</p>
						<img
							src={article.image}
							alt=""
							className="aspect-video rounded-[15px]"
						/>
						<p className="text-md">{article.desc}</p>
						<p className="text-sm font-bold">{article.author}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Prachalit;
