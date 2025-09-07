import React, { useState } from "react";
import image1 from "../assets/Contact/1.svg";
import image2 from "../assets/Contact/2.svg";
import image3 from "../assets/Contact/3.svg";
import image4 from "../assets/Contact/4.svg";
import image5 from "../assets/Contact/5.svg";
import image6 from "../assets/Contact/6.svg";
import image7 from "../assets/Contact/7.svg";
import image8 from "../assets/Contact/image1.png";

const Contact = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		challenge: "",
		help: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
	};

	return (
		<div className="mt-10 flex flex-col gap-10 ">
			{/* Main section */}
			<div className="bg-[#055D59] flex flex-col gap-12 text-white p-8 md:p-12">
				<div className="flex flex-col gap-6 items-center w-full md:w-1/3 mx-auto">
					<p className="text-3xl font-bold">सम्पर्क गर्नुहोस्</p>
					<p className="text-md text-center">
						Birtacity सँग सम्पर्क गर्न चाहनुहुन्छ? तपाईंको सोधपुछ अनुसार यसका
						केही तरिकाहरू छन्। तल सबै विकल्पहरू जाँच गर्नुहोस्।
					</p>
				</div>

				<div className="flex flex-col md:flex-row justify-between gap-8 md:gap-8 w-full md:w-[70%] mx-auto">
					<div className="flex flex-col gap-4 md:gap-8 w-full md:w-1/3">
						<img src={image1} alt="Support" className="h-8 w-8" />
						<p className="text-lg font-semibold">समर्थन प्राप्त गर्नुहोस्</p>
						<p className="text-md">
							यदि तपाईंलाई BIRTACITY प्रयोग गर्दा समस्या आइरहेको छ भने, Help &
							Learning का लेखहरू हेर्नुहोस् वा हाम्रो चर्चा फोरमहरूमा अन्य
							Evernote प्रयोगकर्ताबाट सहयोग लिनुहोस्।
						</p>
						<div className="w-fit bg-white text-black text-lg font-bold px-2 py-1 rounded">
							{"</>"}
						</div>
					</div>

					<div className="flex flex-col gap-4 md:gap-8 w-full md:w-1/3">
						<img src={image2} alt="Support 2" className="h-8 w-8" />
						<p className="text-lg font-semibold">समर्थन प्राप्त गर्नुहोस्</p>
						<p className="text-md">
							यदि तपाईंलाई BIRTACITY प्रयोग गर्दा समस्या आइरहेको छ भने, Help &
							Learning का लेखहरू हेर्नुहोस् वा हाम्रो चर्चा फोरमहरूमा अन्य
							Evernote प्रयोगकर्ताबाट सहयोग लिनुहोस्।
						</p>
						<img src={image3} alt="Extra" className="h-8 w-8" />
					</div>
				</div>
			</div>

			{/* Form section */}
			<div className="flex flex-col md:flex-row justify-between gap-8">
				{/* Left section */}
				<div className="w-full md:w-2/5 flex flex-col gap-5 text-md">
					<p className="text-lg font-bold">हाम्रो विशेषज्ञसँग कुरा गर्नुहोस्</p>
					<p>
						आउनुहोस्, हामी तपाईंको वेबसाइट वा डिमाण्ड जेनेरेसन लक्ष्यहरू हासिल
						गर्न कसरी मद्दत गर्न सक्छौं भन्ने बारेमा छलफल गरौं।
					</p>
					<p>तपाईंले के आशा गर्न सक्नुहुन्छ:</p>
					<ul className="list-disc pl-8 space-y-2">
						<li>
							फारम सबमिट गर्नुहोस् र तपाईंको आवश्यकताहरू छलफल गर्न बैठक समय चयन
							गर्नुहोस्।
						</li>
						<li>
							हाम्रो पहिलो संवादमा, हामी तपाईंका उद्देश्यहरू बुझ्नेछौं र तिनीहरू
							हासिल गर्न कसरी मद्दत गर्न सक्छौं भन्ने बारेमा छलफल गर्नेछौं।
						</li>
						<li>
							त्यसपछि हामी तपाईंका आवश्यकताहरूअनुसार विशेष प्रस्ताव र योजना तयार
							गर्नेछौं। आवश्यक परे थप विवरण संकलन गर्नेछौं।
						</li>
						<li>
							अन्ततः, तपाईंका लक्ष्यहरू हासिल गर्न हामी तपाईंसँगै काम सुरु
							गर्नेछौं।
						</li>
					</ul>
					<img
						src={image8}
						alt="Contact Illustration"
						className="w-full md:w-[90%]"
					/>
				</div>

				{/* Right section */}
				<div className="w-full md:w-2/5">
					<div className="bg-[#055D59] text-white p-8 rounded-lg w-full">
						<h2 className="text-lg font-bold mb-2">
							तपाईँका लक्ष्यहरूबारे हामीसँग कुरा गर्नहोस्
						</h2>
						<p className="text-sm mb-6">
							तलको फारम पूरा गर्नुहोस् र पछि लगइनहुनेछ कि हामी तपाईंलाई कसरी
							मद्दत गर्न सक्छौं।
						</p>

						<form onSubmit={handleSubmit} className="space-y-4">
							<div className="flex flex-col md:flex-row md:space-x-4">
								<div className="flex-1">
									<label className="block text-sm mb-1">पहिलो नाम *</label>
									<input
										type="text"
										name="firstName"
										value={formData.firstName}
										onChange={handleChange}
										className="w-full p-2 rounded text-black bg-[#E7E7E7B0]"
										placeholder="ड्यान"
									/>
								</div>
								<div className="flex-1">
									<label className="block text-sm mb-1">थर *</label>
									<input
										type="text"
										name="lastName"
										value={formData.lastName}
										onChange={handleChange}
										className="w-full p-2 rounded text-black bg-[#E7E7E7B0]"
										placeholder="स्टिलगो"
									/>
								</div>
							</div>

							<div>
								<label className="block text-sm mb-1">ईमेल ठेगाना *</label>
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									className="w-full p-2 rounded text-black bg-[#E7E7E7B0]"
									placeholder="dan.stillgoe@blendb2b.com"
								/>
							</div>

							<div>
								<input
									type="text"
									name="phone"
									value={formData.phone}
									onChange={handleChange}
									className="w-full p-2 rounded text-black bg-[#E7E7E7B0]"
									placeholder="-तपाईं के छलफल गर्न चाहनुहुन्छ? - *"
								/>
							</div>

							<div>
								<label className="block text-sm mb-1">सन्देश *</label>
								<textarea
									name="challenge"
									value={formData.challenge}
									onChange={handleChange}
									rows="3"
									className="w-full p-2 rounded text-black bg-[#E7E7E7B0]"
									placeholder="के हामीसँग कुरा गर्नु अघि अरु केही जान्न आवश्यक छ?"
								/>
							</div>

							<div>
								<label className="block text-sm mb-1">
									हामीबारे तपाईंले कहाँबाट थाहा पाउनुभयो? *
								</label>
								<textarea
									name="help"
									value={formData.help}
									onChange={handleChange}
									rows="3"
									className="w-full p-2 rounded text-black bg-[#E7E7E7B0]"
									placeholder="हामीबारे तपाईंले कहाँबाट थाहा पाउनुभयो?"
								/>
							</div>

							<p className="text-gray-300 text-sm">
								यो फारम पठाउँदा तपाईंले हामीलाई तपाईंको जानकारी प्रयोग गर्ने
								अनुमति दिनुहुन्छ। हामी तपाईंको गोपनीयताको सम्मान गर्छौं।
							</p>

							<button
								type="submit"
								className="bg-white font-semibold px-4 py-2 rounded text-black"
							>
								अगाडि बढ्नुहोस्
							</button>
						</form>
					</div>
				</div>
			</div>

			{/* Support section */}
			<div className="flex flex-col md:flex-row gap-6 md:gap-8 mt-10 items-center justify-center">
				{[image4, image5, image6].map((img, idx) => (
					<div
						key={idx}
						className="flex flex-col gap-3 md:gap-5 bg-[#055D59] text-white p-6 md:p-8 rounded-[10px] items-center justify-center h-[300px] w-full md:w-1/4"
					>
						<img src={img} alt={`Support ${idx}`} className="h-8 w-8" />
						<p className="text-lg font-bold">
							{idx === 0 ? "बिक्री" : idx === 1 ? "समर्थन" : "प्रश्नहरू"}
						</p>
						<p className="text-md text-center">
							{idx === 0
								? "हाम्रो बिक्री टोलीसँग सम्पर्क गर्नुहोस् सफ्टवेयर, मूल्य र डेमो सम्बन्धी प्रश्नहरूका लागि।"
								: idx === 1
								? "हाम्रो समर्थन टोलीसँग सम्पर्क गर्नुहोस् विशेष गरी सफ्टवेयरसम्बन्धी प्रश्नहरूका लागि।"
								: "हामीलाई लाइभ च्याटमार्फत सम्पर्क गर्नुहोस् र तपाईँसँग रहेका कुनै पनि प्रश्न सोध्नुहोस्।"}
						</p>
						<div className="border border-white rounded w-fit px-4 py-2">
							{idx === 0
								? "बिक्री सम्पर्क गर्नुहोस्"
								: idx === 1
								? "समर्थन भ्रमण गर्नुहोस्"
								: "हामीसँग च्याट गर्नुहोस्"}
						</div>
					</div>
				))}
			</div>

			{/* FAQ section */}
			<div className="flex flex-col gap-10 mt-10">
				<div className="flex flex-col gap-5">
					<p className="text-3xl font-bold text-center">
						प्रायः सोधिने प्रश्नहरू
					</p>
					<p className="text-md text-center">
						तपाईँसँग कुनै प्रश्न छन् वा केवल नमस्ते भन्न चाहनुहुन्छ भने, हामीलाई
						सम्पर्क गर्नुहोस्।
					</p>
					<div className="w-full md:w-[75%] mx-auto text-md">
						{[
							"समाचार कसरी पठाउने?",
							"न्युज पोर्टलमा खाता कसरी बनाउन सकिन्छ?",
							"समाचार प्रकाशित हुन कति समय लाग्छ?",
							"विज्ञापन कसरी प्रकाशित गर्ने?",
						].map((faq, i) => (
							<div
								key={i}
								className="border border-x-0 border-t-0 border-[#D9D9D9]"
							>
								<div className="flex justify-between items-center py-4 px-3">
									<p>{faq}</p>
									<img src={image7} alt="Arrow" className="w-5 h-5" />
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Last CTA */}
			<div className="flex justify-center mt-10">
				<div className="px-5 py-2 bg-[#055D59] rounded-[20px] text-white text-md">
					अहिल्यै Amazon बाट प्राप्त गर्नुहोस्
				</div>
			</div>
		</div>
	);
};

export default Contact;
