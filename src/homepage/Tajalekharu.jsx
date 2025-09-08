import React from "react";
import image1 from "../assets/Homepage/Tajalekharu/image1.png";
import image2 from "../assets/Homepage/Tajalekharu/image2.png";
import image3 from "../assets/Homepage/Tajalekharu/image3.png";
import time from "../assets/icons/time.svg";

const Tajalekharu = () => {
	return (
		<div className="flex flex-col mt-10 gap-10">
			<p className="font-bold text-lg">ताजा लेखहरू</p>

			<div className="lg:flex-row flex flex-col gap-10">
				{/* Left Side (Main Featured Article) */}
				<div className="lg:flex flex flex-col lg:w-1/2">
					<div className="flex flex-col gap-2 w-full">
						<div
							className="relative rounded-[20px] aspect-video overflow-hidden p-5 bg-cover bg-center"
							style={{ backgroundImage: `url(${image1})` }}
						>
							<p className="px-5 py-1 bg-[#FFFFFF6B] w-fit absolute right-2 top-3 rounded-xl">
								स्वास्थ्य
							</p>
						</div>

						<div className="flex justify-between items-center">
							<p className="font-bold">
								शीर्षक: “सुदूरपश्चिममा डेंगुका संक्रमित बढ्द”
							</p>
							<div className="flex gap-2 items-center">
								<img src={time} alt="time icon" />
								<p className="text-xs">४ मिनेटमा पढ्न सकिन्छ</p>
							</div>
						</div>
					</div>
				</div>

				{/* Right Side (Secondary Articles) */}
				<div className="flex flex-col gap-8 lg:w-1/2">
					<div className="lg:flex-row flex flex-col gap-4">
						<img
							src={image2}
							alt="article thumbnail"
							className="rounded-[20px] lg:w-1/2 aspect-video object-cover"
						/>
						<div className="flex flex-col gap-4 lg:w-1/2">
							<div className="flex justify-between items-center">
								<p className="text-xs">१ घण्टा पहिले अपडेट</p>
								<p className="px-4 py-1 bg-[#E9E9E9] w-fit text-sm rounded-xl">
									राजनीति
								</p>
							</div>
							<p className="text-md font-bold">शीर्षक: “संसद् बैठक आज बस्दै”</p>
							<p className="text-sm">
								संक्षिप्त विवरण: संसद्को आगामी बैठक आज बिहान ११ बजे बस्ने भएको
								छ। बैठकमा बजेट अनुमोदन र नयाँ कानुन प्रस्तावबारे छलफल हुने छ।
							</p>
						</div>
					</div>

					<div className="lg:flex-row flex flex-col gap-4">
						<img
							src={image3}
							alt="article thumbnail"
							className="rounded-[20px] lg:w-1/2 aspect-video object-cover"
						/>
						<div className="flex flex-col gap-4  lg:w-1/2">
							<div className="flex justify-between items-center">
								<p className="text-xs">२ घण्टा पहिले अपडेट</p>
								<p className="px-4 py-1 bg-[#E9E9E9] w-fit text-sm rounded-xl">
									खेलकुद
								</p>
							</div>
							<p className="text-md font-bold">
								शीर्षक: “नेपाल क्रिकेट टिमको विजयी यात्रा”
							</p>
							<p className="text-sm">
								संक्षिप्त विवरण: नेपाल क्रिकेट टिमले अघिल्लो खेलमा पाँच विकेटले
								विजयी हासिल गर्दै सेमीफाइनलमा स्थान बनाएको छ। प्रशंसकहरूले
								टोलीको प्रदर्शनमा उत्साह व्यक्त गरेका छन्।
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tajalekharu;
