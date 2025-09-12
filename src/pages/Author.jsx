import React from "react";
import image1 from "../assets/Author/image1.png";
import image2 from "../assets/Author/image2.png";
import image3 from "../assets/Author/image3.png";
import image4 from "../assets/Author/image4.png";
import image5 from "../assets/Author/image5.png";
import image18 from "../assets/Author/image18.png";
import pracassir from "../assets/Author/pracassir.png";
import profile1 from "../assets/Homepage/Samachar/profile1.png";
import time from "../assets/icons/time.svg";
import tag from "../assets/icons/tag.svg";
import { first, second, third, last } from "../data/Authordata";
const Author = () => {
	return (
		<div className="mt-10 flex flex-col gap-10 ">
			{/* main author section */}
			<div className="flex flex-col ">
				<div className="w-full text-white flex flex-col lg:flex-row items-center gap-15 lg:gap-23 h-auto py-6 px-8 lg:px-22 bg-[#055D59]">
					<div className=" flex flex-col  justify-center w-[40%]  items-center p-6 gap-6 ">
						<div className="bg-gray-200 items-center flex justify-center  rounded-full h-[238px] w-[238px] ">
							<img
								src={pracassir}
								alt=""
								className="h-full w-full rounded-full"
							/>
						</div>
					</div>
					<div className="flex flex-col gap-7 ">
						{" "}
						<div className="flex flex-col gap-8 justify-evenly border-0 border-b-2 py-8 ">
							<div className="flex flex-col items-start text-white">
								<p className="text-3xl font-bold">प्रकाश उप्रेती</p>
								<span className="w-12 h-[3px] bg-white mt-4"></span>
							</div>
							<p className="text-md text-justify">
								प्रकाश उप्रेती सूचना प्रविधिको क्षेत्रमा लामो समयदेखि सक्रिय
								व्यक्तित्व हुनुहुन्छ. उहाँले सूचना प्रविधि, डिजिटल मिडिया, र
								नवप्रवर्तनमूलक प्रविधिहरूमा निरन्तर कलम चलाउँदै आउनुभएको छ. लेखन
								तथा अनुसन्धानका माध्यमबाट प्रविधिको उपयोग, प्रभाव र
								विकासक्रममाथि गहिरो चासो राख्नुहुन्छ |
							</p>
						</div>
						<div className="flex flex-col lg:flex-row gap-6">
							<div className=" flex flex-col gap-1 rounded-[15px]  bg-white p-4 text-black flex-1 ">
								<p className="font-bold text-md">जम्मा लेखहरू</p>
								<p className="font-bold text-lg">८</p>
								<div className="flex items-center">
									<div className="grow bg-[#B1E8B8] h-1">
										<div
											className="bg-black h-1 
                    transform transition-transform duration-300 hover:scale-105 w-3/12"
										></div>
									</div>
								</div>
							</div>
							<div className="rounded-[15px]  gap-1   bg-white p-4 text-black flex-1 ">
								<p className="font-bold text-md">मुख्य श्रेणीहरू</p>
								<p className="font-bold text-md">प्रविधि, विचार, जीवनशैली</p>
								<div className="flex gap-2">
									<div className="mt-2 border-t-3 border-black w-4 "></div>
									<div className="mt-2 border-t-3 border-black w-4 "></div>
									<div className="mt-2 border-t-3 border-black w-4 "></div>
								</div>
							</div>
							<div className="rounded-[15px]  bg-white p-4 font-bold text-black flex-1 ">
								<p className=" text-md">लेखन शुरु गरेको मिति</p>
								<p className=" text-lg"> २०२५ जून २१ , शनिवार</p>
								<p className="">२०२८-०६-२१</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* मुख्य विधाहरू section */}
			<div className=" flex gap-4 flex-col">
				<div className="text-lg font-bold">
					<p className="underline underline-offset-8">मुख्य विधाहरू</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:justify-around bg-primary p-5 text-md ">
					<div className="flex flex-col gap-5 bg-[#B1E8B8] p-5 rounded-[15px]">
						<div className="flex flex-col gap-3 font-semibold ">
							<p>पर्यटन </p>
							<p> ७ लेखहरू</p>
						</div>
						<div>
							<div className="flex items-center">
								<div className="grow bg-gray-600  h-1">
									<div
										className="bg-gray-200 h-1 
                    transform transition-transform duration-300 hover:scale-105 w-7/12"
									></div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-5 bg-[#B1E8B8] p-5 rounded-[15px]">
						<div className="flex flex-col gap-3 font-semibold  ">
							<p>जीवनशैली </p>
							<p>२ लेखहरू</p>
						</div>
						<div>
							<div className="flex items-center">
								<div className="grow bg-gray-600  h-1">
									<div
										className="bg-gray-200 h-1 
                    transform transition-transform duration-300 hover:scale-105 w-2/12"
									></div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-5 bg-[#B1E8B8] p-5 rounded-[15px]">
						<div className="flex flex-col gap-3 font-semibold   ">
							<p>अर्थ</p>
							<p>९ लेखहरू</p>
						</div>
						<div>
							<div className="flex items-center">
								<div className="grow bg-gray-600  h-1">
									<div
										className="bg-gray-200 h-1  
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
									></div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-5 bg-[#B1E8B8] p-5 rounded-[15px] ">
						<div className="flex flex-col gap-3 font-semibold ">
							<p>प्रबिधि</p>
							<p>४ लेखहरू</p>
						</div>
						<div>
							<div className="flex items-center">
								<div className="grow bg-gray-600  h-1">
									<div
										className="bg-gray-200 h-1  
                    transform transition-transform duration-300 hover:scale-105 w-4/12"
									></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* मुख्य लेखहरू section */}
			<div className="flex flex-col gap-8">
				<div className="text-lg font-bold">मुख्य लेखहरू</div>
				<div className="flex flex-col-reverse lg:flex-row gap-6 lg:h-[370px]">
					{/* LEFT SIDE */}
					<div className="flex flex-col lg:w-1/2 gap-6 h-full">
						{[image1, image2].map((img, index) => (
							<div
								key={index}
								className="flex flex-col lg:flex-row gap-4"
							>
								<img
									src={img}
									alt=""
									className="rounded-[20px] aspect-video lg:w-1/2 object-cover"
								/>
								<div className="flex flex-col gap-1 justify-around lg:w-1/2 text-justify">
									<p className="font-bold line-clamp-1">
										युवाहरूलाई इन्टरनेटमार्फत स्वरोजगारमा जोड्न सकिनेछ...
										स्वरोजगारमा जोड्न युवाहरू
									</p>
									<p className="text-md line-clamp-2">
										युवाहरूलाई इन्टरनेटमार्फत स्वरोजगारमा जोड्न सकिनेछ, जसले
										बेरोजगारी कम गर्नेछ। तर, डिजिटल परिवर्तनका लागि सरकारी नीति
										स्पष्ट
									</p>
									<div className="flex gap-2">
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
					<div className="lg:w-1/2 lg:h-full ">
						<div
							className="bg-cover bg-center relative rounded-[20px] aspect-video overflow-hidden"
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
			{/* midddle section */}
			<div className="flex flex-col lg:flex-row gap-5 mt-8 ">
				<img src={image4} alt="" className="aspect-video rounded-md lg:w-1/2" />
				<div className="flex flex-col gap-3 justify-around lg:w-1/2">
					<div className="flex gap-3">
						<img src={profile1} alt="" className="h-5 w-5 rounded-full" />
						<p>Biratinfo</p>
					</div>
					<p className="text-xs font-bold">४ घण्टा अघि अपडेट गरिएको</p>
					<div className="flex flex-col gap-2 text-justify">
						<p className="text-md">
							सर्ट्स प्रयोगकर्ताहरूका लागि अर्को रोचक समाचार नयाँ एआई प्रभावहरू
							हुन्। यी प्रभावहरूको प्रयोग गरेर, तपाईं आफ्नो डूडलहरू (हातले
							बनाएका स्केचहरू) पूर्ण कलात्मक फोटोमा रूपान्तरण गर्न
							सक्नुहुन्छ।सर्ट्स प्रयोगकर्ताहरूका लागि अर्को रोचक समाचार नयाँ एआई
							प्रभावहरू हुन्। यी प्रभावहरूको प्रयोग गरेर, तपाईं आफ्नो डूडलहरू
							(हातले बनाएका स्केचहरू) पूर्ण कलात्मक फोटोमा रूपान्तरण गर्न
							सक्नुहुन्छ।यस्तैगरी, यी आधुनिक एआई उपकरणहरूले सिर्जनात्मक
							प्रक्रियालाई छिटो र सजिलो बनाउँछन्। ।
						</p>
						<p className="text-md">
							त्यसैगरी, नयाँ एआई टूलहरूले प्रयोगकर्ताहरूलाई अझ धेरै सिर्जनात्मक
							स्वतन्त्रता दिन्छन्। तपाईंले आफ्नो साधारण चित्र वा प्रारम्भिक
							डिज़ाइनहरूलाई प्रभावशाली एनिमेशन वा 3D शैलीमा रूपान्तरण गर्न
							सक्नुहुन्छ। यसले केवल कलात्मक अनुभवलाई समृद्ध बनाउँदैन, तर
							प्रयोगकर्ताहरूलाई आफ्नो सिर्जनात्मक विचारहरूलाई वास्तविकता जस्तो
							दृश्यात्मक रूपमा प्रस्तुत गर्ने अवसर पनि प्रदान गर्दछ।पहिले जहाँ
						</p>
					</div>

					<div className="flex gap-7">
						<div className="flex gap-2">
							<img src={time} alt="" className="src" />
							<p className="text-xs">३ मिनेटमा पढ्नुहोस्</p>
						</div>
						<div className="flex gap-2">
							<img src={tag} alt="" className="src" />
							<p className="text-xs">प्रविधि</p>
						</div>
					</div>
				</div>
			</div>
			{/* sujhab section */}
			<div className=" flex flex-col gap-9">
				<div className="text-lg font-bold border border-b-[#00000033] border-x-0 border-t-0 py-5"></div>
				<div className="flex flex-col lg:flex-row gap-4">
					<div className="py-7 flex flex--col lg:flex-row lg:w-[75%] gap-7">
						<div className="flex flex-col lg:flex-row gap-7">
							<img
								src={image5}
								alt=""
								className="rounded-[20px] lg:w-1/2 aspect-video"
							/>
							<div className="flex flex-col justify-around lg:w-1/2 gap-2 text-justify ">
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
					<div className="flex flex-col gap-5 lg:w-[25%] lg:border-y-0 lg:border-r-0 lg:border lg:border-l-[#00000033] lg:px-8 justify-center">
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
			</div>
			{/* News grid section */}
			<div className="flex flex-col gap-12">
				{/* First grid */}
				<div className="grid grid-cols-1 mdd:grid-cols-2 lg:grid-cols-4 gap-7">
					{first.map((article, index) => (
						<div key={index} className="flex flex-col gap-3">
							<p className="text-sm">{article.date}</p>
							<p className="text-md font-bold line-clamp-1">{article.title}</p>
							<img
								src={article.image}
								alt=""
								className="aspect-video rounded-[15px]"
							/>
							<p className="text-md line-clamp-4">{article.desc}</p>
							<p className="text-sm font-bold">{article.author}</p>
						</div>
					))}
				</div>
				{/* Second grid section */}
				<div className="grid grid-cols-1 mdd:grid-cols-2 lg:grid-cols-4 gap-7">
					{second.map((article, index) => (
						<div key={index} className="flex flex-col gap-3">
							<p className="text-sm">{article.date}</p>
							<p className="text-md font-bold line-clamp-1">{article.title}</p>
							<img
								src={article.image}
								alt=""
								className="aspect-video rounded-[15px]"
							/>
							<p className="text-md line-clamp-4">{article.desc}</p>
							<p className="text-sm font-bold">{article.author}</p>
						</div>
					))}
				</div>
				{/* Bottom section */}
				<div className="bg-black w-fit text-white px-5 py-2 text-sm text-center mx-auto">
					थप लोड गर्नुहोस्
				</div>
			</div>
			{/* Thap padnuhos section */}
			<div className="flex flex-col  gap-10">
				{/* Header */}
				<div className="flex justify-between py-2">
					<div className="flex flex-col gap-2">
						<p className="text-lg font-bold">थप पढ्नुहोस्</p>
						<p className="text-sm text-[#8B8B8B]">
							हाम्रा लेख, अन्तर्वार्ता, र सृजनात्मक परियोजनाहरूको अभिलेख अन्वेषण
							गर्नुहोस्
						</p>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
					{third.map((item, index) => (
						<div key={index} className="flex flex-col gap-2 p-2 rounded-[15px]">
							<img
								src={item.image}
								alt={item.title}
								className="aspect-video rounded-[15px] object-cover"
							/>
							<p className="text-sm font-bold">{item.title}</p>
							<p className="text-md font-bold line-clamp-1">{item.heading}</p>

							<p className="text-md  text-gray-700 line-clamp-3">{item.desc}</p>
							<p className="text-sm">{item.author}</p>
						</div>
					))}
				</div>
			</div>
			{/* last section */}
			<div className="flex flex-col gap-10 mt-10">
				<p className="text-lg font-bold">प्रविधि</p>
				<div className="flex flex-col lg:flex-row gap-8">
					<div className="flex lg:w-1/2 flex-col gap-3">
						<img src={image18} alt="" className="aspect-video rounded-[15px]" />
						<p className="text-md font-bold">
							द न्यू योर्करको राजनीतिक मञ्च: पोडकास्ट र स्थानीय सत्ता खेल
						</p>
						<p className="text-md text-justify">
							बेल्टवे–बाहेकको हलचल! DC को राजनीतिक जामदेखि NYC का शक्ति खेलसम्म,
							द न्यू योर्करले राजनीतिक नाट्यक्रमलाई कसरी देखाउँछ भनेर सुन्नुहोस्
						</p>
						<p className="text-md text-justify">
							बेल्टवे–बाहेकको हलचल! DC को राजनीतिक जामदेखि NYC का शक्ति खेलसम्म,
							द न्यू योर्करले राजनीतिक नाट्यक्रमलाई कसरी देखाउँछ भनेर सुन्नुहोस्
						</p>
						<p className="text-xs font-bold">
							लेखक: जिन-हो किम • पढ्न समय: २ मिनेट
						</p>
					</div>
					<div className="flex flex-col gap-10 lg:w-1/2">
						{last.map((item, index) => (
							<div
								key={index}
								className="flex flex-col-reverse lg:flex-row gap-2 lg:justify-between"
							>
								<div className="flex flex-col gap-2 text-md lg:w-[65%]">
									<p className="font-bold line-clamp-1">{item.title}</p>
									<p className="text-justify line-clamp-4">{item.desc}</p>
								</div>
								<img
									src={item.img}
									alt={item.title}
									className="lg:w-[232px] lg:h-[133px] aspect-video rounded-[15px] "
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
export default Author;
