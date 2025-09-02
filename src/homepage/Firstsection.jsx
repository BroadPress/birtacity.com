import React from "react";
import arrow from "../assets/icons/arrow.svg";
import image1 from "../assets/Homepage/Sectionfirstimage/imag1.png";
import image2 from "../assets/Homepage/Sectionfirstimage/image2.png";
import image3 from "../assets/Homepage/Sectionfirstimage/image3.png";

const Firstsection = () => {
	const cards = [
		{
			image: image1,
			tags: ["सेलेब्रेटीहरू", "अहिले चर्चामा"],
			title: "पहिले र पछि – लेना मोरोको मनमोहक रूपान्तरण",
			date: "फेब्रुअरी २१",
			author: "ओलिभिया कार्टर",
		},
		{
			image: image2,
			tags: ["स्वास्थ्य", "अहिले चर्चामा"],
			title: "ऊर्जा र आत्मविश्वाससहित उमेर बढाउँदै जाने रहस्यहरू",
			date: "फेब्रुअरी २१",
			author: "ओलिभिया कार्टर",
		},
		{
			image: image3,
			tags: ["स्वास्थ्य", "अहिले चर्चामा"],
			title: "रेट्रो अन व्हिल्स – भिन्टेज क्याम्परहरूको सौन्दर्यपूर्ण पुनरागमन",
			date: "फेब्रुअरी २१",
			author: "ओलिभिया कार्टर",
		},
	];

	return (
		<div className="flex flex-col gap-8 mt-10">
			<div className="flex items-center justify-between">
				<div className="font-bold text-lg">पर्यटन</div>
				<div className="flex gap-3">
					<p className="text-sm">सबै हेर्नुहोस्</p>
					<img src={arrow} alt="" className="src" />
				</div>
			</div>

			<div className="grid lg:grid-cols-3 grid-cols-1 gap-13">
				{cards.map((card, index) => (
					<div key={index} className="flex flex-col gap-4">
						<img
							src={card.image}
							alt=""
							className="aspect-video rounded-[20px]"
						/>
						<div className="flex gap-2">
							{card.tags.map((tag, idx) => (
								<div key={idx} className="w-fit px-5 py-2 text-sm bg-[#F2F4F5]">
									{tag}
								</div>
							))}
						</div>
						<p className="text-md font-bold">{card.title}</p>
						<p className="text-[14px]">
							{card.date} | <span className="font-bold">लेखिका:</span>{" "}
							{card.author}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Firstsection;
