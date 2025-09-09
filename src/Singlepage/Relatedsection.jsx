import React from 'react'
import image3 from "../assets/Singlepage/image3.png";
import image4 from "../assets/Singlepage/image4.png";
import image5 from "../assets/Singlepage/image5.png";
import image6 from "../assets/Singlepage/image6.png";
import image7 from "../assets/Singlepage/image7.png";
import time from "../assets/icons/time.svg";
import fb from "../assets/icons/sfb.svg";
import twit from "../assets/icons/stw.svg";
import pint from "../assets/icons/sp.svg";
import linkdin from "../assets/icons/slink.svg";
import ss from "../assets/icons/ss.svg";
import arrow from "../assets/icons/arrright.svg";
const Relatedsection = () => {
	const cards = [
			{
				image: image5,
				tags: ["सेलेब्रेटीहरू", "अहिले चर्चामा"],
				title: "पहिले र पछि – लेना मोरोको मनमोहक रूपान्तरण",
				date: "फेब्रुअरी २१",
				author: "ओलिभिया कार्टर",
			},
			{
				image: image6,
				tags: ["स्वास्थ्य", "अहिले चर्चामा"],
				title: "ऊर्जा र आत्मविश्वाससहित उमेर बढाउँदै जाने रहस्यहरू",
				date: "फेब्रुअरी २१",
				author: "ओलिभिया कार्टर",
			},
			{
				image: image7,
				tags: ["स्वास्थ्य", "अहिले चर्चामा"],
				title: "रेट्रो अन व्हिल्स – भिन्टेज क्याम्परहरूको सौन्दर्यपूर्ण पुनरागमन",
				date: "फेब्रुअरी २१",
				author: "ओलिभिया कार्टर",
			},
		];
  return (
		<div className="flex flex-col gap-10 mt-10">
			{/* Related News */}
			<div className="mt-10 flex flex-col gap-7">
				<div className="text-lg font-bold border border-b-[#00000033] border-x-0 border-t-0 py-5">
					Related News
				</div>
				<div className="flex flex-col lg:flex-row gap-4">
					<div className="py-7 flex flex-col lg:flex-row lg:w-[80%] gap-7">
						<div className="flex flex-col lg:flex-row gap-7">
							<img
								src={image3}
								alt=""
								className="rounded-[20px] lg:w-1/2 aspect-video"
							/>
							<div className="flex flex-col justify-around lg:w-1/2 gap-2 text-justify">
								<p className="font-bold text-md">
									कम्प्युटर भाइरस भनेको के हो र यो किन खतरनाक हुन्छ?{" "}
								</p>
								<p className="text-md">
									नेपालमा इन्टरनेटको पहुँच तीव्र रूपमा बढिरहेको छ, र यससँगै
									कम्प्युटर भाइरसको जोखिम पनि बढिरहेको छ। त्यसैले, यस समस्याबाट
									जोगिनको लागि सजग हुनु अत्यावश्यक छ नेपालमा इन्टरनेटको पहुँच
									तीव्र रूपमा बढिरहेको छ, र यससँगै कम्प्युटर भाइरसको जोखिम पनि
									बढिरहेको छ।
								</p>
								<p className="text-md">
									साथै, डिजिटल सुरक्षा सम्बन्धी चेतना अभिवृद्धि गर्नु पनि आवश्यक
									छ। प्रयोगकर्ताहरूले बलियो पासवर्ड प्रयोग गर्ने, अनजान लिंक वा
									फाइल नखोल्ने, र नियमित रूपमा एण्टी-भाइरस सफ्टवेयर अपडेट गर्ने
									बानी बसाल्नुपर्छ।।
								</p>
								<div className="flex gap-5">
									<div className="flex gap-3">
										<img src={time} alt="h-5 w-5" className="src" />
										<p className="text-xs">७ मिनेटमा पढ्नुहोस</p>
									</div>
									<div className="text-xs">
										<p>प्रविधि</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-5 lg:w-[25%] border-y-0 border-r-0 border border-l-[#00000033] px-8 justify-center">
						<div className="text-lg font-bold">सुझावहरू</div>
						<div className="flex flex-col gap-2">
							<p className="text-md">किन हुन्छ वेबसाइट ह्याक?</p>
							<p className="text-xs">अपडेट गरिएको : २ दिन अघि</p>
						</div>
						<div className="flex flex-col gap-2">
							<p className="text-md">पासवर्ड कसरी सुरक्षित राख्ने?</p>
							<p className="text-xs">अपडेट गरिएको : २ दिन अघि</p>
						</div>
						<div className="flex flex-col gap-2">
							<p className="text-md">किन हुन्छ वेबसाइट ह्याक?</p>
							<p className="text-xs">अपडेट गरिएको : २ दिन अघि</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-2 text-md text-justify">
					<p className="">
						आजको युगमा वेबसाइट भनेको केवल इन्टरनेटमा देखिने एउटा पृष्ठ मात्र
						होइन; यो संस्था, व्यवसाय, वा व्यक्तिगत ब्राण्डको डिजिटल परिचय हो।
						वेबसाइटमा कम्पनीको सेवा, जानकारी, ग्राहक डेटा, भुक्तानी प्रणाली,
						कर्मचारी विवरणदेखि गोप्य फाइलहरूसम्म रहने भएकाले यसको सुरक्षा
						अत्यन्त संवेदनशील विषय हो। तर, दुःखको कुरा के छ भने नेपाललगायत
						विश्वभर अधिकांश वेबसाइटहरू सुरक्षाका आधारभूत मापदण्डहरूबिना नै
						सञ्चालन भइरहेका छन्
					</p>
					<p>
						ह्याक हुनुको पहिलो र प्रमुख कारण भनेको कमजोर वा खराब सर्भर हो। सस्तो
						र अज्ञात होस्टिङ सेवा प्रयोग गर्दा वेबसाइटले आवश्यक सुरक्षा प्रणाली
						जस्तै– अपडेटेड फायरवाल, DDOS प्रोटेक्सन, र Server-level scanning
						जस्ता सुविधा प्राप्त गर्दैन। ह्याकरहरूले यिनै कमजोरीहरू खोजेर सजिलै
						सिस्टममा प्रवेश गर्छन्।
					</p>
				</div>
			</div>
			{/* Middle section */}
			<div className=" border border-[#E5E5E5] lg:p-14">
				<div className="flex flex-col lg:flex-row gap-8">
					<img
						src={image4}
						alt=""
						className="lg:w-1/2 rounded-[15px] aspect-video"
					/>
					<div className="lg:w-1/2 flex flex-col gap-4 text-md justify-evenly">
						<p className="">लेखकबारे थप जान्नुहोस्</p>
						<div className="flex items-center gap-4">
							<p className="font-bold text-black text-lg">सुधीर नेपाल</p>
							<span className="w-5 h-px bg-black"></span>
							<p className="font-bold">प्राविधिक लेखक</p>
						</div>
						<p>
							बिगत तिन दशक देखि नेपाली पत्रकारिताको क्षेत्रमा निरन्तर रुपले
							लागिरहेका एक अनुभवी र दक्ष पत्रकार हुन् । नेपाली पत्रकरितालाई
							व्यावसायिक, आधुनिक र प्रविधिमैत्री बनाउने जमर्कोमा लागेका पत्रकार
							नेपालले आफ्नो कार्यगत अनुभव नेपाली पत्रकरितालाई व्यावसायिक, आधुनिक
							र प्रविधिमैत्री बनाउने जमर्कोमा लागेका पत्रकार नेपालले आफ्नो
							कार्यगत अनुभव नेपाली पत्रकरितालाई व्यावसायिक, आधुनिक र
							प्रविधिमैत्री बनाउने जमर्कोमा लागेका पत्रकार नेपालले आफ्नो कार्यगत
							अनुभव नेपाली पत्रकरितालाई व्यावसायिक, आधुनिक र प्रविधिमैत्री
							बनाउने जमर्कोमा लागेका पत्रकार नेपालले आफ्नो कार्यगत अनुभव{" "}
						</p>
						<div className="flex gap-3">
							<img src={fb} alt="" className="h-5 w-5" />
							<img src={twit} alt="" className="h-5 w-5" />
							<img src={linkdin} alt="" className="h-5 w-5" />
							<img src={pint} alt="" className="h-5 w-5" />
							<img src={ss} alt="" className="h-5 w-5" />
						</div>
					</div>
				</div>
			</div>
			{/* Prabidhhi samachar section */}
			<div className="flex flex-col gap-8 ">
				<div className="flex items-center justify-between">
					<div className="font-bold text-lg">प्रवृत्तिमा रहेका समाचार</div>
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
									<div
										key={idx}
										className="w-fit px-5 py-2 text-sm bg-[#F2F4F5]"
									>
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
		</div>
	);
}

export default Relatedsection